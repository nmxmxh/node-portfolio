const express = require('express');
const controller = require('../controllers/admin')

const router = express.Router();

router.get('/', controller.getLogin)

router.post('/', controller.postLogin)

router.get('/create-a-post', controller.createAPost)

router.post('/create-a-post', controller.getAPost)

module.exports = router;