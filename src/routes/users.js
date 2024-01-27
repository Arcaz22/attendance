const { Router } = require('express');
const {
  CreateUserController, DeleteUserController, FindUserController, ChangePasswordController, CreateEmployeeController
} = require('../controllers/user');
const AuthorizationCheck = require('../middlewares/Auth');
const ValidateAccess = require('../middlewares/Access');

const router = Router();

router.get('', [AuthorizationCheck, ValidateAccess], FindUserController);
router.post('', [], CreateUserController);
router.post('/change_password', [AuthorizationCheck, ValidateAccess], ChangePasswordController);
router.delete('', [AuthorizationCheck, ValidateAccess], DeleteUserController);
router.post('/create_employee', [AuthorizationCheck, ValidateAccess], CreateEmployeeController);

module.exports = router;
