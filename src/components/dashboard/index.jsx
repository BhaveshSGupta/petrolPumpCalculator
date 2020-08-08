import React from "react"
import useSWR from "swr"
import { NavLink } from "react-router-dom"
import {getCookie} from '../../utils/cookies'
const Dashboard = () => {
  const fetcher = url =>
    fetch(url, {
      headers: {
        Authorization:getCookie("accessToken").value
      },
    }).then(res => res.json())
  const { data = [], error } = useSWR(
    "/api/dashboard?limit=5&sortBy=date:desc",
    fetcher
  )

  if (error) return "An error has occurred."
  if (!data) return "Loading..."
  // if (!!data1?) setData(data1)
  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <ul>
          <li>
            <NavLink to="/dashboard" activeClassName="active">
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/daily" activeClassName="active">
              Daily
            </NavLink>
          </li>
        </ul>
      </div>
      {data.length > 0 &&
        data.map((day, index) => {
          let d = new Date(day.date)
          return <div key={index}>{d.toLocaleString("en-IN")}</div>
        })}
    </div>
  )
}

export default Dashboard
