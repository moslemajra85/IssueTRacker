import Joi from "joi";

// create Schema

const isseSchema = Joi.object({
  title: Joi.string().min(3).max(30).required(),
  description: Joi.string().max(512).required(),
  createdBy: Joi.string().required(),
});

const userSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

// create a function that validate a Issue based on the isseSchema
export const validateIssue = (issue) => {
  return isseSchema.validate(issue);
};

export const validateUser = (user) => {
  return userSchema.validate(user);
};
