const ROLE = require("../schemas/enums/role");

module.exports = [
    {
        path: `/v1/user`,
        method: `GET`,
        allowed_role: [ ROLE.ADMIN ]
    },
    {
        path: `/v1/user/change_password`,
        method: `POST`,
        allowed_role: [ ROLE.KARYAWAN ]
    },
    {
        path: `/v1/user`,
        method: `POST`,
        allowed_role: [ ROLE.KARYAWAN ]
    },
    {
        path: `/v1/user`,
        method: `PUT`,
        allowed_role: [ ROLE.KARYAWAN ]
    },
    {
        path: `/v1/user`,
        method: `DELETE`,
        allowed_role: [ ROLE.ADMIN ]
    },
    {
        path: `/v1/user`,
        method: `DELETE`,
        allowed_role: [ ROLE.ADMIN ]
    },
    {
        path: `/v1/user/create_employee`,
        method: `POST`,
        allowed_role: [ ROLE.KARYAWAN ]
    },
    {
        path: `/v1/attendance/check_in`,
        method: `POST`,
        allowed_role: [ ROLE.KARYAWAN ]
    },
    {
        path: `/v1/attendance/check_out`,
        method: `POST`,
        allowed_role: [ ROLE.KARYAWAN ]
    },
    {
        path: `/v1/permit/create_permit`,
        method: `POST`,
        allowed_role: [ ROLE.KARYAWAN ]
    },
    {
        path: `/v1/permit/approval_permit`,
        method: `PUT`,
        allowed_role: [ ROLE.ADMIN ]
    },
];
