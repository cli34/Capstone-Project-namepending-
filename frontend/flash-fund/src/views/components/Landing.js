import React from "react"
import { useHistory } from "react-router-dom"
import * as ROUTES from "../../routes/routes"
import { Card, CardDeck, Col, Container, Jumbotron, Row } from "react-bootstrap"
import LandingNavbar from "./LandingNavbar"
import CampaignList from "./CampaignList"

import cards from "../../fakeData"
const Landing = () => {
  const history = useHistory()
  return (
    <div>
      <LandingNavbar />
      <Container className="my-4">
        <Jumbotron className="text-center">
          <h1>Welcome to Flash Fund</h1>
        </Jumbotron>
        <h1 className="text-center">Top Campaigns</h1>
      </Container>
      <CampaignList cards={cards} />
    </div>
  )
}

export default Landing
/*
        <div>Landing</div>
        <button onClick={() => history.push(ROUTES.LOGIN)}>Login</button>
        <button onClick={() => history.push(ROUTES.REGISTER)}>Register</button>
*/
