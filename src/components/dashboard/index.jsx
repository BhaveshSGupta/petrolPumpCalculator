import React from "react"
import useSWR from "swr"
import { useHistory } from "react-router-dom"
const Dashboard = () => {
  let history = useHistory()
  const fetcher = url =>
    fetch(url)
      .then(async response => {
        if (response.status === 401) {
          localStorage.setItem("loggedIn", "")
          mutate(null)
          history.push("/")
          return ""
        }
        return await response.json()
      })
      .catch(e => {
        // localStorage.setItem("loggedIn", "")
        // mutate(null)
        // history.push("/")
        // return ""
        console.log(e)
      })
  const { data = [], mutate, error } = useSWR(
    "/api/daily?limit=5&sortBy=date:desc",
    fetcher
  )
  if (error) {
    return "An error has occurred please refresh"
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
