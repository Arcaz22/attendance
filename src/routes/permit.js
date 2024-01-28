const { Router } = require('express');
const {
  CreatePermitController, UpdatePermitController
} = require('../controllers/permit');
const AuthorizationCheck = require('../middlewares/Auth');
const ValidateAccess = require('../middlewares/Access');

const router = Router();

router.post('/create_permit', [AuthorizationCheck, ValidateAccess], CreatePermitController);
router.put('/approval_permit', [AuthorizationCheck, ValidateAccess], UpdatePermitController);

module.exports = router;
