const ApiUrl = '/api/'
const setUser = user => (window.localStorage.veUser = JSON.stringify(user))

const handleLogin = async ({ email, password }) => {
  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password
      }),
    }
    let response = await fetch(
      ApiUrl + "/login",
      requestOptions
    )
    let data = await response.json()
    if (data && data.status === 200) {
      setUser({
        isLoggedIn: true,
      })

    } else {

    }
  } catch (e) {
    debugger
    console.log(e)
  }
}
export default handleLogin