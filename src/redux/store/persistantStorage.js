export const loadUser = () => {
  if (sessionStorage.getItem("user") !== null) {
    const user = JSON.parse(sessionStorage.getItem("user"));
    const { isAuthorized, name: userName } = user;

    return { auth: { userInfo: { userName }, isAuthorized } };
  } else if (localStorage.getItem("user") !== null) {
    const user = JSON.parse(localStorage.getItem("user"));
    const { isAuthorized, name: userName } = user;

    return { auth: { userInfo: { userName }, isAuthorized } };
  } else {
    return undefined;
  }
};
