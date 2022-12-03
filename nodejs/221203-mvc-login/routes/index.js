var express = require('express');
var controller = require('../controller/Cuser');
const router = express.Router();

router.get('/signup', controller.view_signup);
router.post('/signup', controller.signup);
router.get('/login', controller.view_login);
router.post('/login', controller.login);
router.post('/profile', controller.profile);
router.patch('/profile/edit', controller.edit_user);
router.delete('/profile/delete', controller.delete_user);

module.exports = router;