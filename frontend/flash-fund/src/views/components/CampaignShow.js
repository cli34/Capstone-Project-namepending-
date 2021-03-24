import React, { useState } from "react"
import {
  Button,
  Card,
  Col,
  Container,
  Image,
  Jumbotron,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap"
import { Redirect, useHistory } from "react-router"
import cards from "../../fakeData"
import UserNavbar from "../components/UserNavbar"

const fakeText =
  "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action."

const CampaignShow = (props) => {
  const [donate, setDonate] = useState(false)
  const history = useHistory()
  console.log(props)
  const { id } = props.match.params
  console.log(id)
  const card = cards.find((card) => card.id === Number(id))
  console.log(card.image)
  if (donate) {
    return <Redirect push to={`/campaign/${card.id}/donate`} />
    //history.push(`/campaign/${card.id}/donate`)
  }
  return (
    <>
      <UserNavbar />
      <Container className="py-4">
        <Card
          className="text-center m-auto"
          style={{ maxWidth: "50rem", boxShadow: "none", transform: "none" }}
        >
          <Card.Img variant="top" src={card.image} />
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text
              style={{ maxHeight: "8rem" }}
              className="overflow-auto text-left"
            >
              {fakeText}
            </Card.Text>
            <Button
              className="w-100"
              variant="primary"
              onClick={() => setDonate(true)}
            >
              Donate
            </Button>
          </Card.Body>
          <ListGroup className="list-group-flush text-left">
            <ListGroupItem>user</ListGroupItem>
          </ListGroup>
          <Card.Footer className="text-muted">footer</Card.Footer>
        </Card>
      </Container>
    </>
  )
}

export default CampaignShow
