const ApiUrl = '/api/users'
const setUser = user => (window.localStorage.loggedIn = JSON.stringify(user))
const HandleLogin = async ({ email, password }) => {
  // const history = useHistory();
  try {
    const requestOptions = {
      method: "PUT",
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
    console.log(response.status)
    if (data.token && response.status === 200) {
      setUser({
        isLoggedIn: true,
      })
      window.location.href = "/dashboard"
    } else {

    }
  } catch (e) {
    console.log(e)
  }
}
export default HandleLogin