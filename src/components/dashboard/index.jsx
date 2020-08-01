import React, { useState, useEffect } from "react"
const Dashboard = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = async () => {
    fetch("/api/dashboard?limit=5&sortBy=date:desc", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => res.json())
      .then(res => {
        setData(res)
      })
  }

  return (
    <div>
      <h1>Dashboard</h1>
      {data.length > 0 &&
        data.map((day, index) => {
          let d = new Date(day.date)
          return <div key={index}>{d.toLocaleString('en-IN')}</div>
        })}
    </div>
  )
}

export default Dashboard
