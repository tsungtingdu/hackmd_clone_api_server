const db = require("../models");
const { Collaborator, Post, User } = db;

const collaboratorService = {
  getCollaborators: async (req, res, callback) => {
    try {
      // only allow owner, viewer, collaborator to see the info
      let collaborator = await Collaborator.findOne({
        where: { PostId: req.params.postId, UserId: req.user.id },
      });

      if (!collaborator) {
        return callback({
          status: 401,
          message: "Unauthorized",
          data: null,
        });
      }

      // retrieve data
      let collaborators = await Collaborator.findAll({
        where: { PostId: req.params.postId },
        include: User,
      });

      collaborators = collaborators.map((i) => {
        let userEmail = i.dataValues.User.email;
        delete i.dataValues.User;
        return {
          ...i.dataValues,
          userEmail,
        };
      });

      return callback({
        status: 200,
        message: "success",
        data: collaborators,
      });
    } catch (err) {
      console.log(err);
      return callback({
        status: 400,
        message: err,
        data: null,
      });
    }
  },

  addCollaborator: async (req, res, callback) => {
    try {
      const { email, role } = req.body;

      // only allow owner
      let collaborator = await Collaborator.findOne({
        where: {
          PostId: req.params.postId,
          UserId: req.user.id,
          role: "owner",
        },
        include: User,
      });

      if (!collaborator) {
        return callback({
          status: 401,
          message: "Unauthorized",
          data: null,
        });
      }
      if (email === collaborator.User.email) {
        return callback({
          status: 400,
          message: "Owner can't change his/her own collaboration status",
          data: null,
        });
      }

      // missing field
      if (!email || !role) {
        return callback({
          status: 400,
          message: "All fields are required.",
          data: null,
        });
      }

      // user does not exist
      let user = await User.findOne({ where: { email: email } });
      if (!user) {
        return callback({
          status: 400,
          message: "Please enter valid user.",
          data: null,
        });
      }

      // check if exist
      let newCollaborator = await Collaborator.findOne({
        where: {
          PostId: req.params.postId,
          UserId: user.id,
        },
      });
      let message = "";

      if (newCollaborator) {
        // if exist, update
        await newCollaborator.update({
          PostId: req.params.postId,
          UserId: user.id,
          role: role,
        });
        message = "Update collaborator successfully!";
      } else {
        // if not, create new
        newCollaborator = await Collaborator.create({
          PostId: req.params.postId,
          UserId: user.id,
          role: role,
        });
        message = "Add new collaborator successfully!";
      }

      // return
      if (newCollaborator) {
        return callback({
          status: 200,
          message: message,
          data: newCollaborator,
        });
      } else {
        return callback({
          status: 400,
          message: err,
          data: null,
        });
      }
    } catch (err) {
      return callback({
        status: 400,
        message: err,
        data: null,
      });
    }
  },

  deleteCollaborator: async (req, res, callback) => {
    try {
      const { email } = req.body;
      // only allow owner, viewer, collaborator to see the info
      let collaborator = await Collaborator.findOne({
        where: {
          PostId: req.params.postId,
          UserId: req.user.id,
          role: "owner",
        },
      });
      if (!collaborator) {
        return callback({
          status: 401,
          message: "Unauthorized",
          data: null,
        });
      }

      // user does not exist
      let user = await User.findOne({ where: { email: email } });
      let record = await Collaborator.findOne({
        where: { PostId: req.params.postId, UserId: user.id },
      });
      if (!user || !record) {
        return callback({
          status: 400,
          message: "Please enter valid user.",
          data: null,
        });
      }

      // delete a collaborator
      if (record.UserId === req.user.id) {
        return callback({
          status: 400,
          message: "You can not remove yourself",
          data: null,
        });
      }

      await record.destroy();
      return callback({
        status: 200,
        message: "Delete a collaborator successfully!",
        data: null,
      });
    } catch (err) {
      return callback({
        status: 400,
        message: err,
        data: null,
      });
    }
  },
};

module.exports = collaboratorService;
