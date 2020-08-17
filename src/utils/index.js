const getCookies = () => {
    const cookieStrings = document.cookie.split(';')
    const cookies = []
    const regex = new RegExp('^\\s*([^=]+)\\s*=\\s*(.*?)$')
    cookieStrings.forEach((value, index) => {
        const cookieStr = value
        const match = regex.exec(cookieStr)
        if (match !== null) {
            cookies.push({
                name: match[1],
                value: match[2]
            })
        }
    })
    return cookies
}

// getCookie() to get individual cookie from whole document cookie
export const getCookie = (name) => {
    const cookies = getCookies()
    for (let i = 0; i < cookies.length; i++) {
        if (cookies[i].name === name) {
            // console.log(cookies[i])
            return cookies[i]
        }
    }
    return null
}

export const accesstoken = () => {
    const token = getCookie("accessToken")
    return !!token ? token.value : ''
}
export const isAuthenticated = () => {
    const auth = !!window.localStorage.loggedIn && JSON.parse(window.localStorage.loggedIn)
    const cookies = getCookie("accessToken")
    const isAuthenticated = !!auth && auth.isLoggedIn && !!cookies
    // console.log({ isAuthenticated, "auth.loggedIn": !!auth.isLoggedIn, "getCookie('accessToken').value": (!!cookies && getCookie("accessToken").value) })
    return isAuthenticated
}
