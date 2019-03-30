import React from "react"
import Header from "../components/header"
import styled from "styled-components"
import { graphql } from "gatsby"

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

export default ({ data }) => (
  <Container>
    <Header />
    {console.log(data)}
  </Container>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
