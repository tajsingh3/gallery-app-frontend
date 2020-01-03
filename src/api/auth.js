import axios from "axios";

// const token = null;

const sendSignupData = async data => {
  const response = await axios.post("someurl", data);

  let isSignupSuccess = false;
  if (response.status === 200) {
    isSignupSuccess = true;
    localStorage.setItem("token", response.data.token);
  }
  return isSignupSuccess;
};

const sendLoginData = async data => {
  const response = await axios.post("someurl", data);

  let isSignupSuccess = false;
  if (response.status === 200) {
    isSignupSuccess = true;
    localStorage.setItem("token", response.data.token);
  }
  return isSignupSuccess;

  //   const token = localStorage.getItem("token");
  //   const response = await axios.post("someurl", data, {
  //     headers: {
  //       Authorization: `Bearer ${token}`
  //     }
  //   });
};

export { sendSignupData, sendLoginData };
