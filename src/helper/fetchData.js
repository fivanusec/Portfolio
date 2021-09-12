import axios from "axios";

export const fetchApi = async () => {
  const response = await axios.get(
    "https://api.github.com/users/fivanusec/repos"
  );
  return response.data;
};
