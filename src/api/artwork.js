import axios from "axios";

let token = localStorage.getItem("token");

const fetchMyArt = async (page, userId) => {
  try {
    const response = await axios.get(
      `https://localhost:5001/api/artwork/${userId}?page=${page}&itemsperpage=5`,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log("redirect to error page");
  }
};

const fetchCommunityArt = async page => {
  try {
    const response = await axios.get(
      `https://localhost:5001/api/artwork/community?page=${page}&itemsperpage=5`
    );

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};

const sendArtworkData = async (userId, formData, setSubmitting) => {
  try {
    const response = await axios.post(
      `https://localhost:5001/api/artwork/${userId}`,
      formData,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    let isSuccess = false;
    if (response.status === 200) {
      isSuccess = true;
    }
    return isSuccess;
  } catch (error) {
    console.log(`redirect to ${error.response.status} error`);
  }
  setSubmitting(false);
};

const sendEditedArtworkData = async (artworkId, formData, setSubmitting) => {
  try {
    const response = await axios.put(
      `https://localhost:5001/api/artwork/update/${artworkId}`,
      formData,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    let isEditSuccess = false;
    if (response.status === 200) {
      isEditSuccess = true;
    }

    return isEditSuccess;
  } catch (error) {
    console.log(`redirect to ${error.response.status} error`);
  }
  setSubmitting(false);
};

const deletArtwork = async artworkId => {
  try {
    const response = await axios.delete(
      `https://localhost:5001/api/artwork/delete/${artworkId}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    let isDeleteSuccess = false;
    if (response.status === 200) {
      isDeleteSuccess = true;
    }

    return isDeleteSuccess;
  } catch (error) {
    console.log(`redirect to ${error.response.status} error`);
  }
};

export {
  fetchMyArt,
  fetchCommunityArt,
  sendArtworkData,
  sendEditedArtworkData,
  deletArtwork
};
