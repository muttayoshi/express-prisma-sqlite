const express = require('express')
const router = express.Router()
const controller = require('../controllers/profile')


router.route('/')
  .get(controller.getList)
  .post(controller.create)

router.route('/:id')
  .get(controller.getDetail)
  .patch(controller.update)
  .delete(controller.softDelete)

module.exports = router