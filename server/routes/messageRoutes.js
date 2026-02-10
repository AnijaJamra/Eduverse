const express = require('express')
const { getMessages, sendMessages } = require('../controllers/messageController')
const protect = require('../middleware/authMiddlewre')

const router = express.Router()

router.get("/", protect, getMessages)
router.post("/:pid", protect, sendMessages)

module.exports = router