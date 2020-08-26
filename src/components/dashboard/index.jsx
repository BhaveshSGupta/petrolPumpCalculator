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
    "/api/dashboard?sortBy=date:desc",
    fetcher
  )
  if (error) {
    return "An error has occurred please refresh"
  }
  if (!data) return "Loading..."
  return (
    <div>
      <h1>Dashboard</h1>
      {data.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Volume for MS</th>
              <th>Volume for HSD1</th>
              <th>Volume for HSD2</th>
              <th>Total for Petrol</th>
              <th>Total for Diesel</th>
            </tr>
          </thead>
          <tbody>
            {data.map((day, index) => {
              let d = new Date(day.Date)
              return (
                <tr key={index}>
                  <td style={{ margin: "20px 10px" }}>
                    {d.toLocaleString("en-IN", { dateStyle: "medium" })}
                  </td>
                  <td style={{ margin: "20px 10px" }}>{day.Volume_in_MS}</td>
                  <td style={{ margin: "20px 10px" }}>
                    {day.Volume_in_HSD_DIP1}
                  </td>
                  <td style={{ margin: "20px 10px" }}>
                    {day.Volume_in_HSD_DIP2}
                  </td>
                  <td style={{ margin: "20px 10px" }}>{day.total_petrol}</td>
                  <td style={{ margin: "20px 10px" }}>{day.total_deisel}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      )}
    </div>
  )
}
Dashboard.whyDidYouRender = true
export default Dashboard
