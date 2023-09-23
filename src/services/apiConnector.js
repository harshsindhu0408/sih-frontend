import axios from "axios";

export let apiConnector = async function ({
  method = "get",
  url,
  body=null,
  headers = null,
}) {
  return await new Promise((resolve, reject) => {
    axios(url, {
      method: method,
      data: body,
      headers: headers,
    })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error.response);
      });
  });
};