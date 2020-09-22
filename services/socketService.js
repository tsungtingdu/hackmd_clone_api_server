const db = require("../models");
const getTitle = require("../helpers/getTitle");
const _ = require("lodash");
const { Post } = db;

module.exports = socketService = (server) => {
  // create socket
  const socketIo = require("socket.io");
  const io = socketIo(server);

  io.on("connection", async (socket) => {
    // create a room
    let url = socket.request.headers.referer;
    url = url.split("/post/");
    const room = Number(url[url.length - 1]);

    // retrieve data
    let post = await Post.findOne({ where: { id: room } });
    let message = post.content;

    // auto save data
    const autoSave = _.debounce(async (msg) => {
      let post = await Post.findOne({ where: { id: room } });
      await post.update({
        title: getTitle(msg),
        content: msg,
      });
    }, 1000);

    // join a room
    socket.join(room);

    // emit first data from database
    io.in(room).emit("post", { room: room, msg: message });

    // listening on socket message
    socket.on("post", (room, msg) => {
      // broadcast
      const curRoom = io.sockets.adapter.rooms[room];
      let numOfUsers = curRoom.length;
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
