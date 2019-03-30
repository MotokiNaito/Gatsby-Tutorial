import React from "react"
import { Link } from "gatsby"

export default () => (
  <header>
    <h1>This is a header.</h1>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </header>
)
