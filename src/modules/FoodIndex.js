import axios from "axios";

const saveData = async () => {
  let headers = sessionStorage.getItem("products");
  headers = JSON.parse(headers);
  headers = {
    ...headers,
    "Content-type": "application/json",
    Accept: "application/json"
  };
 
  const response = await axios.get("/menu", {
    headers: headers
  })
  return response;
};
export {saveData}