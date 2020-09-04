const collaboratorService = require('../../../services/admin/collaboratorService')

const adminCollaboratorController = {
  getCollaborators: (req, res) => {
    collaboratorService.getCollaborators(req, res, data => {
      return res.status(data.status).json(data)
    })
  }
}

module.exports = adminCollaboratorController