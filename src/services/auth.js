const getUser = () => (window.localStorage.loggedIn)
const auth = !!getUser() && JSON.parse(window.localStorage.loggedIn)
export default auth