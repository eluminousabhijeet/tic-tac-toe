import React, { useState } from 'react'
import Icon from './components/Icon'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card, CardBody, Container, Button, Col, Row } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'

const itemArray = new Array(25).fill("empty")

const App = () => {

    const [isCross, setIsCross] = useState(false)
    const [winMessage, setWinMessage] = useState("")

    const reloadGame = () => {
        setIsCross(false)
        setWinMessage("")
        itemArray.fill("empty", 0, 25)
    }

    const checkIsWinner = () => {
        if (!itemArray.includes("empty")) {
            setWinMessage("Match draw")
        } else {
            if (itemArray[0] === itemArray[1] &&
                itemArray[1] === itemArray[2] &&
                itemArray[2] === itemArray[3] &&
                itemArray[3] === itemArray[4] &&
                itemArray[0] !== "empty") {
                setWinMessage(`${itemArray[0]} wins`)
            } else if (itemArray[5] === itemArray[6] &&
                itemArray[6] === itemArray[7] &&
                itemArray[7] === itemArray[8] &&
                itemArray[8] === itemArray[9] &&
                itemArray[5] !== "empty") {
                setWinMessage(`${itemArray[3]} wins`)
            } else if (itemArray[10] === itemArray[11] &&
                itemArray[11] === itemArray[12] &&
                itemArray[12] === itemArray[13] &&
                itemArray[13] === itemArray[14] &&
                itemArray[10] !== "empty") {
                setWinMessage(`${itemArray[6]} wins`)
            } else if (itemArray[15] === itemArray[16] &&
                itemArray[16] === itemArray[17] &&
                itemArray[17] === itemArray[18] &&
                itemArray[18] === itemArray[19] &&
                itemArray[15] !== "empty") {
                setWinMessage(`${itemArray[6]} wins`)
            }else if (itemArray[20] === itemArray[21] &&
                itemArray[21] === itemArray[22] &&
                itemArray[22] === itemArray[23] &&
                itemArray[23] === itemArray[24] &&
                itemArray[20] !== "empty") {
                setWinMessage(`${itemArray[6]} wins`)
            }

            else if (itemArray[0] === itemArray[5] &&
                itemArray[5] === itemArray[10] &&
                itemArray[10] === itemArray[15] &&
                itemArray[15] === itemArray[20] &&
                itemArray[0] !== "empty") {
                setWinMessage(`${itemArray[0]} wins`)
            } else if (itemArray[1] === itemArray[6] &&
                itemArray[6] === itemArray[11] &&
                itemArray[11] === itemArray[16] &&
                itemArray[16] === itemArray[21] &&
                itemArray[1] !== "empty") {
                setWinMessage(`${itemArray[1]} wins`)
            } else if (itemArray[2] === itemArray[7] &&
                itemArray[7] === itemArray[12] &&
                itemArray[12] === itemArray[17] &&
                itemArray[17] === itemArray[22] &&
                itemArray[2] !== "empty") {
                setWinMessage(`${itemArray[2]} wins`)
            } else if (itemArray[3] === itemArray[8] &&
                itemArray[8] === itemArray[13] &&
                itemArray[13] === itemArray[18] &&
                itemArray[18] === itemArray[23] &&
                itemArray[3] !== "empty") {
                setWinMessage(`${itemArray[2]} wins`)
            } else if (itemArray[4] === itemArray[9] &&
                itemArray[9] === itemArray[14] &&
                itemArray[14] === itemArray[19] &&
                itemArray[19] === itemArray[24] &&
                itemArray[4] !== "empty") {
                setWinMessage(`${itemArray[2]} wins`)
            }

            else if (itemArray[0] === itemArray[6] &&
                itemArray[6] === itemArray[12] &&
                itemArray[12] === itemArray[18] &&
                itemArray[18] === itemArray[24] &&
                itemArray[0] !== "empty") {
                setWinMessage(`${itemArray[0]} wins`)
            } else if (itemArray[4] === itemArray[8] &&
                itemArray[8] === itemArray[12] &&
                itemArray[12] === itemArray[16] &&
                itemArray[16] === itemArray[20] &&
                itemArray[4] !== "empty") {
                setWinMessage(`${itemArray[2]} wins`)
            }
        }
    }

    const changeItem = itemNumber => {
        if (winMessage) {
            return toast(winMessage, { type: "success" })
        }

        if (itemArray[itemNumber] == "empty") {
            itemArray[itemNumber] = isCross ? "cross" : "circle"
            setIsCross(!isCross)
        } else {
            return toast("Already Filled", { type: "error" })
        }

        checkIsWinner()
    }

    return (
        <Container className="py-5">
            <ToastContainer position="bottom-center" />
            <Row className="justify-content-center">
                <Col md={8} lg={6}>
                    {winMessage ? (
                        <div className="my-2">
                            <h2 className="text-success text-uppercase text-center">
                                {winMessage}
                            </h2>
                            <Button
                                className="my-5"
                                color="success"
                                block
                                onClick={reloadGame}
                            >Reload Game</Button>
                        </div>
                    ) : (
                        <h2 className="text-center text-warning mb-5">
                            {isCross ? "Cross" : "Circle"} turns
                        </h2>
                    )}
                    <div className="grid">
                        {
                            itemArray.map((item, index) => {
                                return <Card color={item == "empty" ? "warning" : item == "circle" ? "primary" : "danger"} key={index} onClick={() => changeItem(index)}>
                                    <CardBody className="box">
                                        <Icon name={item} />
                                    </CardBody>
                                </Card>
                            })
                        }
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default App
