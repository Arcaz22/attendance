const crypto = require('crypto');

const isPasswordMatchSHA1 = (password, hashed_password) => {
  const new_hashed_password = crypto.createHash('sha1').update(password).digest('hex');
  return new_hashed_password === hashed_password;
};

module.exports = isPasswordMatchSHA1;
