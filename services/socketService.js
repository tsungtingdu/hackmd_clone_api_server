const db = require("../models");
const getTitle = require("../helpers/getTitle");
const _ = require("lodash");
const { Post } = db;
const DiffMatchPatch = require("diff-match-patch");
const dmp = new DiffMatchPatch();

module.exports = socketService = (server) => {
  // create socket
  const socketIo = require("socket.io");
  const io = socketIo(server);
  let room;
  let post;
  let message;

  io.on("connection", async (socket) => {
    // retrieve data from database
    const setData = async () => {
      let postId = Number(room);
      if (!isNaN(postId)) {
        post = await Post.findOne({
          where: { id: postId },
        });
        message = post.content;

        // emit first data from database
        io.in(room).emit("post", { room: room, msg: message });
      }
    };

    // join a room
    socket.on("join", async (next) => {
      socket.join(next);
      room = next;
      await setData();
    });

    const updateDoc = async (room, diff) => {
      const { patches } = diff;
      if (patches) {
        let post = await Post.findOne({ where: { id: room } });
        let prevContent = post.content;
        let newContent = dmp.patch_apply(patches, prevContent);
        await post.update({
          title: getTitle(newContent[0]),
          content: newContent[0],
        });
      }
    };

    // listening on socket message
    socket.on("post", async (room, diff) => {
      // broadcast
      const curRoom = io.sockets.adapter.rooms[room];
      let numOfUsers = curRoom ? curRoom.length : 1;
      await updateDoc(room, diff);
      io.in(room).emit("post", {
        room: room,
        diff: diff,
        numOfUser: numOfUsers,
        msg: null,
      });
    });

    // disconnect socket
    socket.on("disconnect", () => {
      socket.leave(room);
    });
  });
};
