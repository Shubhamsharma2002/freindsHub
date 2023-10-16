const express = require('express');
const router = express.Router();

const user_controller = require('../controller/user_c');
router.get('/profile', user_controller.profile);

router.get('/sign-up' , user_controller.SignUp);
router.get('/sign-in', user_controller.SigIn);
router.post('/create',user_controller.create);

module.exports = router;