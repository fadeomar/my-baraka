const Joi = require("@hapi/joi");

const schema = Joi.object().keys({
  username: Joi.string()
    .alphanum()
    .min(2)
    .max(30)
    .required(),
  password: Joi.string()
    .regex(/^[a-zA-Z0-9]{5,30}$/)
    .required(),
  confirmPassword: Joi.ref("password"),
  email: Joi.string()
    .email({ minDomainSegments: 2 })
    .required()
});

const sginupValidation = sginupData => Joi.validate(sginupData, schema);
module.exports = sginupValidation;
