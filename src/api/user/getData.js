import { BASE_URL, PROXY_URL } from "../urls";

export const getData = async id => {
  try {
    const url = `${PROXY_URL}${BASE_URL}/api/user/${id} `;
    const response = await fetch(url);
    if (!response.ok) throw Error(response.statusText);
    return response.json();
  } catch (error) {
    throw error;
  }
};
