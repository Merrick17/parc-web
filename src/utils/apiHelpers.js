import axios from "axios";

const BASE_URL = "http://localhost:3500";

const postApi = async (url, body, config = {}) => {
  try {
    let result = await axios.post(`${BASE_URL}/${url}`, body, config);
    return result.data;
  } catch (error) {
    console.log("error", error.message);
  }
};
const updateApi = async (url, body, config = {}) => {
  try {
    let result = await axios.put(`${BASE_URL}/${url}`, body, config);
    return result.data;
  } catch (error) {
    console.log("error", error.message);
  }
};
const deleteApi = async (url, config = {}) => {
  try {
    let result = await axios.delete(`${BASE_URL}/${url}`, config);
    return result.data;
  } catch (error) {
    console.log("error", error.message);
  }
};

const getApi = async (url, config = {}) => {
  try {
    let result = await axios.get(`${BASE_URL}/${url}`, config);
    return result.data;
  } catch (error) {
    console.log("error", error.message);
  }
};

export { getApi, postApi, updateApi, deleteApi };
