import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000";

const postCall = (url, data, headers) => {
  return axios({
    method: "post",
    url,
    data,
    headers,
  });
};

const getCall = (url) => {
  return axios({
    method: "get",
    url,
  });
};

export let uploadFileApi = async (data, headers) => {
  // console.log({ data, headers });
  const response = await postCall("/api/upload", data, headers);
  console.log(response);
  console.log(response.data);
  console.log(response.status);
  return response.data;
};

export let downloadFileApi = async (id) => {
  const response = await getCall(`/api/download/${id}`);
  const statusCode = response.status === 200 ? "OK" : response.status;
  const filename = response.headers["content-disposition"];
  console.log(response);
  console.log(filename);
  console.log(response.data);
  return filename;
};
