import React from "react"
import Header from "../components/header"
import styled from "styled-components"

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

export default () => (
  <Container>
    <Header />
    <div>Hello world!</div>
  </Container>
)
