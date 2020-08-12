import { getCookie } from "../utils/cookies"

const isAuthenticated = () => {
    const auth = !!window.localStorage.loggedIn && JSON.parse(window.localStorage.loggedIn)
    const cookies = getCookie("accessToken")
    const isAuthenticated = !!auth && auth.isLoggedIn && !!cookies
    // console.log({ isAuthenticated, "auth.loggedIn": !!auth.isLoggedIn, "getCookie('accessToken').value": (!!cookies && getCookie("accessToken").value) })
    return isAuthenticated
}


export { isAuthenticated }