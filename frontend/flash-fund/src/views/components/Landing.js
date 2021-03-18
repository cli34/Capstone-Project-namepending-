import React from "react"
import { useHistory } from "react-router-dom"
import * as ROUTES from "../../routes/routes"
import { Card, CardDeck, Container, Jumbotron } from "react-bootstrap"
import LandingNavbar from "./LandingNavbar"

const cards = [
  {
    title: "Campaign 1",
    text: "Campaign description 1",
    footer: "footer1",
    image: "/photos/apartment.jpg",
  },
  {
    title: "Campaign 2",
    text: "Campaign description 2",
    footer: "footer2",
    image: "/photos/entrance.jpg",
  },
  {
    title: "Campaign 3",
    text: "Campaign description 3",
    footer: "footer3",
    image: "/photos/front-display.jpg",
  },
]

const Landing = () => {
  const history = useHistory()
  return (
    <div>
      <LandingNavbar />
      <Container className="my-4">
        <Jumbotron className="text-center">
          <h1>Welcome to Flash Fund</h1>
        </Jumbotron>
      </Container>
      <Container>
        <CardDeck>
          {cards.map((card, index) => (
            <Card key={index}>
              <Card.Img variant="top" src={card.image} />
              <Card.Body className="text-center">
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">{card.footer}</small>
              </Card.Footer>
            </Card>
          ))}
        </CardDeck>
      </Container>
    </div>
  )
}

export default Landing
/*
        <div>Landing</div>
        <button onClick={() => history.push(ROUTES.LOGIN)}>Login</button>
        <button onClick={() => history.push(ROUTES.REGISTER)}>Register</button>
*/
