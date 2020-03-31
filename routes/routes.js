const express = require('express');
const controller = require('../controllers/user')

const router = express.Router();

router.get('/', controller.getIndex)

router.get('/blog', controller.getBlog)

router.get('/projects', controller.getProjects)

router.get('/contact-me', controller.getContactMe)

module.exports = router;