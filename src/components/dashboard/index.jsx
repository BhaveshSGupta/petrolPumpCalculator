import React, { useState, useEffect } from "react"

const Dashboard = () => {
  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = async () => {
    fetch("/api/dashboard?limit=5", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => res.json())
      .then(res => {
        console.log({ response: res })
      })
  }

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}

export default Dashboard
