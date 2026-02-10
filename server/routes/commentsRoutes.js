const express = require('express')
const { getComment, addComment } = require('../controllers/commentController')
const protect = require('../middleware/authMiddlewre')

const router = express.Router({mergeParams : true})

router.get("/", getComment)
router.post("/" , protect, addComment)

module.exports = router