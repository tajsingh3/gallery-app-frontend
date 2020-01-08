import axios from "axios";

const sendSignupData = async data => {
  const response = await axios.post(
    "https://localhost:5001/api/user/signup",
    data
  );

  let isSignupSuccess = false;
  if (response.status === 200 && response.data.accountCreated === true) {
    isSignupSuccess = true;
  }
  return isSignupSuccess;
};

const sendLoginData = async data => {
  const response = await axios.post(
    "https://localhost:5001/api/user/login",
    data
  );

  let userId = null;
  if (response.status === 200) {
    localStorage.setItem("token", response.data.token);
    userId = response.data.userName;
  }
  return userId;
};

export { sendSignupData, sendLoginData };
