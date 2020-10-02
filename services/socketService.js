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

    // const autoSave = async (msg) => {
    //   let post = await Post.findOne({ where: { id: room } });
    //   post = await post.update({
    //     title: getTitle(msg),
    //     content: msg,
    //   });
    //   return post.content;
    // };

    const diffSync = async (msg) => {
      if (room) {
        // get previous version
        let post = await Post.findOne({ where: { id: room } });
        let prevContent = post.content;
        // get patches
        let patches = dmp.patch_make(prevContent, msg);
        // apply patches
        let newContent = dmp.patch_apply(patches, prevContent);
        let updatedPost = await post.update({
          title: getTitle(msg),
          content: newContent[0],
        });
        return newContent[0];
      } else {
        return msg;
      }
    };

    // listening on socket message
    socket.on("post", async (room, msg) => {
      // broadcast
      const curRoom = io.sockets.adapter.rooms[room];
      let numOfUsers = curRoom ? curRoom.length : 1;
      msg = await diffSync(msg);
      io.in(room).emit("post", {
        room: room,
        msg: msg,
        numOfUser: numOfUsers,
      });
    });

    // disconnect socket
    socket.on("disconnect", () => {
      socket.leave(room);
    });
  });
};
