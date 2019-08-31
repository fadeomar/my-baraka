const Joi = require("@hapi/joi");
const schema = Joi.object.keys({
  username: Joi.string()
    .alphanum()
    .min(2)
    .max(30)
    .required(),
  password: Joi.string()
    .regex(/^[a-zA-Z0-9]{5,20}$/)
    .required()
});

module.exports = loginData => Joi.validate(loginData, schema);
