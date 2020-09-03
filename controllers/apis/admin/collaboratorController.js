const collaboratorService = require('../../../services/admin/collaboratorService')

const adminCollaboratorController = {
  getData: (req, res) => {
    collaboratorService.getData(req, res, data => {
      return res.status(data.status).json(data)
    })
  }
}

module.exports = adminCollaboratorController