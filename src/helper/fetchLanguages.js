import axios from "axios";

export const fetchLangugaes = async (app) => {
  const response = await axios.get(
    `https://api.github.com/repos/fivanusec/${app}/languages`
  );
  return response.data;
};
