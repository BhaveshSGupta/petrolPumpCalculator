import React, { useState } from "react"
import useSWR from "swr"
import { NavLink } from "react-router-dom"
import { getCookie } from "../../utils/cookies"
import { Redirect } from "react-router-dom"
const Dashboard = props => {
  const [redirect, setredirect] = useState(false)
  const fetcher = url =>
    fetch(url, {
      headers: {
        Authorization: getCookie("accessToken").value,
      },
    })
      .then(res => {
        if (!res.ok) localStorage.setItem("loggedIn", "")
        return res
      })
      .then(res => res.json())
      .catch(error => {
        error.json().then(body => {
          setredirect(true)
        })
      })
  const { data = [], error } = useSWR(
    "/api/dashboard?limit=5&sortBy=date:desc",
    fetcher
  )
  if (error) return "An error has occurred."
  if (!data) return "Loading..."
  return (
    <div>
      <h1>Dashboard</h1>
      {redirect && (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location },
          }}
        />
      )}
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
