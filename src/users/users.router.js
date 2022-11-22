const router = require("express").Router()

const userServices = require("./users.services")


router.get("/users", userServices.getAllUsers)
router.post("/users", userServices.postUsers)
router.get("/users/:id", userServices.getUsersById)

module.exports = router