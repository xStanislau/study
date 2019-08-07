import { BASE_URL, PROXY_URL } from "../urls";

export const deleteArticle = async id => {
  try {
    const options = {
      method: "DELETE"
    };

    const url = `${PROXY_URL}${BASE_URL}/api/news/${id}`;
    const response = await fetch(url, options);
    if (!response.ok) throw Error(response.statusText);
    return response.json();
  } catch (error) {
    throw error;
  }
};
