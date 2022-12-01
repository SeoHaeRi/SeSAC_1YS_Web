var express = require('express');
var controller = require('../controller/Cmain');
const router = express.Router();

// . 한다는 것은 객체라는 의미
router.get('/', controller.main);
router.get('/test', controller.test);
router.get('/login', controller.login);
router.post('/signIn', controller.signin);

module.exports = router;