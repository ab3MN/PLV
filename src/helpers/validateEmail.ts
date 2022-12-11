export const validateEmail = (email: any) => {
  const pattern = //eslint-disable-next-line
    /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;

  return email.length === 0 ? true : pattern.test(email);
};
