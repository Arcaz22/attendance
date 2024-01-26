const { Router } = require('express');
const { LoginUserController } = require('../controllers/user');

const router = Router();

router.post('', [], LoginUserController);

module.exports = router;
