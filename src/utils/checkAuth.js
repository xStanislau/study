const checkAuth = () => {
  if (!(localStorage.getItem("user") === null)) {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!!user.hasOwnProperty("isAuthorized")) {
        return user.isAuthorized;
    }
  }
}
export default checkAuth;