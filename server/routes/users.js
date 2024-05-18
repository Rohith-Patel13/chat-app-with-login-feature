
const express = require("express")
const router = express.Router()
const {Login} = require("../controllers/users")


router.post("/register",Login)

module.exports = router
