const ApiUrl = '/api/users'
const setUser = user => (window.localStorage.veUser = JSON.stringify(user))

const handleLogin = async ({ email, password }) => {
  try {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password
      }),
    }
    let response = await fetch(
      ApiUrl,
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
    console.log(e)
  }
}
export default handleLogin