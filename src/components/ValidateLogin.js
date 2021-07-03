const ValidateLogin = values => {
  const errors = {};

  if (!values.userName || values.userName.trim() === '') {
    errors.userName = 'Enter userName';
  }

  if (!values.password || values.password.trim() === '') {
    errors.password = 'Enter userName';
  }
 
  return errors;
}
export default ValidateLogin;