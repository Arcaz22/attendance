const ROLE = require("../schemas/enums/role");

module.exports = [
    {
        path: `/v1/user`,
        method: `GET`,
        allowed_role: [ ROLE.KARYAWAN ]
    },
    {
        path: `/v1/user/change_password`,
        method: `POST`,
        allowed_role: [ ROLE.KARYAWAN]
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
        allowed_role: [ ROLE.KARYAWAN ]
    },
    {
        path: `/v1/user`,
        method: `DELETE`,
        allowed_role: [ ROLE.KARYAWAN ]
    },
    {
        path: `/v1/user/create_employee`,
        method: `POST`,
        allowed_role: [ ROLE.KARYAWAN ]
    },
];
