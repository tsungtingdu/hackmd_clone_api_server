const service = require("../../services/collaboratorService");

const collaboratorController = {
  getCollaborators: (req, res) => {
    service.getCollaborators(req, res, (data) => {
      return res.status(data.status).json(data);
    });
  },
  addCollaborator: (req, res) => {
    service.addCollaborator(req, res, (data) => {
      return res.json(data);
    });
  },
  deleteCollaborator: (req, res) => {
    service.deleteCollaborator(req, res, (data) => {
      return res.json(data);
    });
  },
};

module.exports = collaboratorController;
