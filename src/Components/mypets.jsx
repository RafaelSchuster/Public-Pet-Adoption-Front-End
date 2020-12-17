import React, { useState } from 'react'
import { Card, CardDeck, Container, CardImg, CardImage, Image, Img, Button } from 'react-bootstrap';
import Modal from 'react-modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import image1 from "../images/dog.jpg"
import image2 from "../images/cat.jpg"
import image3 from "../images/giraffe.jpg"

function MyPets() {
    const [modalIsOpen1, setModalIsOpen1] = useState(false)
    const [modalIsOpen2, setModalIsOpen2] = useState(false)
    const [modalIsOpen3, setModalIsOpen3] = useState(false)

    return (
        <>
            <div>
                <h1 className="header-profile mb-5"> Your Pets</h1>
            </div>
            <Card className="status">
                <Card.Body className="head-status">You have adopted 3 Pets.</Card.Body>
            </Card>
            <Container className="my-pets">
                <CardDeck className="deck">
                    <Card className="my-card">
                        <Card.Img variant="top" src={image1} />
                        <Card.Body>
                            <Card.Title>Pet 1</Card.Title>
                            <Card.Text>
                                Pet 1
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                        <Button type="button" variant="warning" onClick={() => setModalIsOpen1(true)}>See More</Button>
                        <Modal style={
                            {
                                overlay: { backgroundImage: { image3 } },
                                content: {
                                    color: 'rgb(4, 5, 19)',
                                    top: '100px',
                                    width: '50%',
                                    height: '70%',
                                    display: 'block',
                                    marginLeft: 'auto',
                                    marginRight: 'auto'
                                }
                            }
                        }
                            isOpen={modalIsOpen1}
                            onRequestClose={() => setModalIsOpen1(false)}
                        >
                            <h1 className="text-center">More Info About Your Pet</h1>
                        </Modal>
                    </Card>
                    <Card className="my-card">
                        <Card.Img variant="top" src={image2} />
                        <Card.Body>
                            <Card.Title>Pet 2</Card.Title>
                            <Card.Text>
                                Pet 2
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                        <Button type="button" variant="warning" onClick={() => setModalIsOpen2(true)}>See More</Button>
                        <Modal style={
                            {
                                overlay: { backgroundImage: { image3 } },
                                content: {
                                    color: 'rgb(4, 5, 19)',
                                    top: '100px',
                                    width: '50%',
                                    height: '70%',
                                    display: 'block',
                                    marginLeft: 'auto',
                                    marginRight: 'auto'
                                }
                            }
                        }
                            isOpen={modalIsOpen2}
                            onRequestClose={() => setModalIsOpen2(false)}
                        >
                            <h1 className="text-center">More Info About Your Pet</h1>
                        </Modal>
                    </Card>
                    <Card className="my-card">
                        <Card.Img variant="top" src={image3} />
                        <Card.Body>
                            <Card.Title>Pet 3</Card.Title>
                            <Card.Text>
                                Pet 3
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                        <Button type="button" variant="warning" onClick={() => setModalIsOpen3(true)}>See More</Button>
                        <Modal style={
                            {
                                overlay: { backgroundImage: { image3 } },
                                content: {
                                    color: 'rgb(4, 5, 19)',
                                    top: '100px',
                                    width: '50%',
                                    height: '70%',
                                    display: 'block',
                                    marginLeft: 'auto',
                                    marginRight: 'auto'
                                }
                            }
                        }
                            isOpen={modalIsOpen3}
                            onRequestClose={() => setModalIsOpen3(false)}
                        >
                            <h1 className="text-center">More Info About Your Pet</h1>

                        </Modal>
                    </Card>
                </CardDeck>
            </Container>
        </>
    )
}

export default MyPets;