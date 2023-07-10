const prisma = require("../prisma/prisma")

const getList = async (req, res) => {
  try {
    const response = await prisma.profile.findMany({
      where: {
        isDeleted: false
      }
    })
    res.status(200).json(response)
  } catch (e) {
    res.status(400).json({
      errorMessage: e.message,
      message: "Something went wrong."
    })
  }
}

const getDetail = async (req, res) => {
  try {
    const response = await prisma.profile.findMany({
      where: {
        id: Number(req.params.id),
        isDeleted: false
      }
    })
    if (response.length === 0) {
      res.status(200).json(null)
    } else {
      res.status(200).json(response[0])
    }
  } catch (e) {
    res.status(400).json({
      errorMessage: e.message,
      message: "Something went wrong."
    })
  }
}

const create = async (req, res) => {
  try {
    const body = { name, dob, userId } = req.body
    body.dob = new Date(dob)
    const response = await prisma.profile.create({
      data: body
    })
    res.status(201).json(response)
  } catch (e) {
    res.status(400).json({
      errorMessage: e.message,
      message: "Something went wrong."
    })
  }
}

const update = async (req, res) => {
  try {
    const data = req.body
    const response = await prisma.profile.update({
      where: {
        id: Number(req.params.id),
        isDeleted: false
      },
      data: data
    })
    res.status(200).json(response)
  } catch (e) {
    res.status(400).json({
      errorMessage: e.message,
      message: "Something went wrong."
    })
  }
}

const softDelete = async (req, res) => {
  try {
    const response = await prisma.profile.update({
      where: {
        id: Number(req.params.id)
      },
      data: {
        isDeleted: true
      }
    })
    res.status(200).json(response)
  } catch (e) {
    res.status(400).json({
      errorMessage: e.message,
      message: "Something went wrong."
    })
  }
}

module.exports = {
  getList,
  getDetail,
  create,
  update,
  softDelete
}