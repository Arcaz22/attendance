const { Router } = require('express');
const {
  CreateAttendanceController, UpdateAttendController
} = require('../controllers/attendance');
const AuthorizationCheck = require('../middlewares/Auth');
const ValidateAccess = require('../middlewares/Access');

const router = Router();

router.post('/check_in', [AuthorizationCheck, ValidateAccess], CreateAttendanceController);
router.post('/check_out', [AuthorizationCheck, ValidateAccess], UpdateAttendController);

module.exports = router;
