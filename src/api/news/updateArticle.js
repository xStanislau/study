import { BASE_URL, PROXY_URL } from "../urls";

export const updateArticle = async (id, data) => {
  try {
    const options = {
      method: "PUT",
      data: JSON.stringify(data)
    };

    const url = `${PROXY_URL}${BASE_URL}/api/news/${id}`;
    const response = await fetch(url, options);
    if (!response.ok) throw Error(response.statusText);
    return response.json();
  } catch (error) {
    throw error;
  }
};
