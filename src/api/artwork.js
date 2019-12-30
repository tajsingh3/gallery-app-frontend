import axios from "axios";

const fetchMyArt = async (page, userId) => {
  try {
    const response = await axios.get(
      `https://localhost:5001/api/artwork/${userId}?page=${page}&itemsperpage=5`
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
      formData
    );

    if (response.status === 200) {
      console.log("redirect to my art");
    }
  } catch (error) {
    console.log(`redirect to ${error.response.status} error`);
  }
  setSubmitting(false);
};

const sendEditedArtworkData = async (artworkId, formData, setSubmitting) => {
  try {
    const response = await axios.put(
      `https://localhost:5001/api/artwork/update/${artworkId}`,
      formData
    );

    if (response.status === 200) {
      console.log("redirect to my art");
    }
  } catch (error) {
    console.log(`redirect to ${error.response.status} error`);
  }
  setSubmitting(false);
};

export {
  fetchMyArt,
  fetchCommunityArt,
  sendArtworkData,
  sendEditedArtworkData
};
