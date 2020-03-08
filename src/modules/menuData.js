import axios from "axios";
const saveData = async (name, price, id) => {
  let headers = sessionStorage.getItem("foodanddrinks");
  headers = JSON.parse(headers);
  headers = {
    ...headers,
    "Content-type": "application/json",
    Accept: "application/json"
  };
  try {
    await axios.post("/menu_data", 
      { 
        menu_data: { data: { message: name, price, id } } 
      }, {
        headers: headers
      }
    );
    entryHandler();
  } catch (err) {
    console.error(err);
    alert("Something went wrong");
  }
};
const getData = async () => {
  let headers = sessionStorage.getItem("foodanddrinks");
  headers = JSON.parse(headers);
  headers = {
    ...headers,
    "Content-type": "application/json",
    Accept: "application/json"
  };
  const response = await axios.get("/menu_data", {
    headers: headers
  })
  return response;
};
export { getData, saveData }