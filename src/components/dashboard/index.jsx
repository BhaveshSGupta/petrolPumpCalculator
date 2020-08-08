import React, { useState, useEffect } from "react"
import useSWR from "swr"

const Dashboard = () => {
  const fetcher = url => fetch(url).then(res => res.json())
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
      {data.length > 0 &&
        data.map((day, index) => {
          let d = new Date(day.date)
          return <div key={index}>{d.toLocaleString("en-IN")}</div>
        })}
    </div>
  )
}

export default Dashboard
