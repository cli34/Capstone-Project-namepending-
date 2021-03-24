import React from "react"
import { Container } from "react-bootstrap"
import CampaignList from "./CampaignList"

import cards from "../../fakeData"
const Pending = () => {
  return (
    <Container className="my-4">
      <CampaignList cards={cards} pending={true} />
    </Container>
  )
}

export default Pending
