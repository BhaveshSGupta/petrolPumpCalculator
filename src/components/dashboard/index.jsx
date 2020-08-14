import React from "react"
import useSWR from "swr"
import { useHistory } from "react-router-dom"
import { getCookie } from "../../utils/cookies"
const Dashboard = () => {
  let history = useHistory()
  // const [redirect, setredirect] = useState(false)
  const fetcher = url =>
    fetch(url, {
      headers: {
        Authorization: getCookie("accessToken").value,
      },
    }).then(async response => {
      if (response.status === 401) {
        localStorage.setItem("loggedIn", "")
        // setredirect(true/)
        mutate(null)
        history.push("/")
      }
      return await response.json()
    })
  const { data = [], mutate, error } = useSWR(
    "/api/dashboard?limit=5&sortBy=date:desc",
    fetcher
  )
  if (error) {
    console.log(error)
    return "An error has occurred."
  }
  if (!data) return "Loading..."
  return (
    <div>
      <h1>Dashboard</h1>
      {data.length > 0 &&
        data.map((day, index) => {
          let d = new Date(day.date)
          return <div key={index}>{d.toLocaleString("en-IN")}</div>
        })}
    </div>
  )
}

export default Dashboard
