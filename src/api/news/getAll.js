import { BASE_URL, PROXY_URL } from "../urls";

export const getAll = async () => {
  try {
    const url = `${PROXY_URL}${BASE_URL}/api/news/`;
    const response = await fetch(url);
    if (!response.ok) throw Error(response.statusText);
    return response.json();
  } catch (error) {
    throw error;
  }
};
