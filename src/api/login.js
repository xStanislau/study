import mockData from "../mocks/mocks";

export default async data => {
  setTimeout(() => {}, 300);
  const { credentials } = mockData;

  const error = Object.create(null);
  if (
    data.username !== credentials.userName ||
    data.password !== credentials.password
  ) {
    error.message = "The username or password you entered is incorrect";
    return { error };
  }

  return { userName: credentials.userName };
};
