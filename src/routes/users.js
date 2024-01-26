const { Router } = require('express');
const {
  CreateUserController, DeleteUserController, FindUserController, ChangePasswordController,
} = require('../controllers/user');
const AuthorizationCheck = require('../middlewares/Auth');
const ValidateAccess = require('../middlewares/Access');

const router = Router();

router.get('', [AuthorizationCheck, ValidateAccess], FindUserController);
router.post('', [], CreateUserController);
router.post('/change_password', [AuthorizationCheck, ValidateAccess], ChangePasswordController);
router.delete('', [AuthorizationCheck, ValidateAccess], DeleteUserController);

module.exports = router;
