export const errorSubmit = (schema, user) => {
  const errors = {};
  const { error } = schema.validate(user, { abortEarly: false });
  if (error) {
    for (let index = 0; index < error.details.length; index++) {
      errors[error.details[index].path[0]] = error.details[index].message;
    }
    return errors;
  }
  return null;
};
