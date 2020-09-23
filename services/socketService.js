const db = require("../models");
const getTitle = require("../helpers/getTitle");
const _ = require("lodash");
const { Post } = db;

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

    // auto save data
    const autoSave = _.debounce(async (msg) => {
      let post = await Post.findOne({ where: { id: room } });
      await post.update({
        title: getTitle(msg),
        content: msg,
      });
    }, 1000);

    // listening on socket message
    socket.on("post", (room, msg) => {
      // broadcast
      const curRoom = io.sockets.adapter.rooms[room];
      let numOfUsers = curRoom ? curRoom.length : 1;
      io.in(room).emit("post", { room: room, msg: msg, numOfUser: numOfUsers });

      // auto saving
      autoSave(msg);
    });

    // disconnect socket
    socket.on("disconnect", () => {
      socket.leave(room);
    });
  });
};
