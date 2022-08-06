export const isEmptyChecker = (email, password) => {
  if (email.length === 0 || password.length === 0) {
    return false;
  }
};

export const isValidUsernameChecker = email => {
  if (email.match(/^(?=[a-zA-Z0-9._]{4,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/)) {
    return true;
  } else {
    return false;
  }
};
export const isValidPasswordChecker = password => {
  if(password.length > 5) {
    return true;
  } else {
    return false;
  }
};
