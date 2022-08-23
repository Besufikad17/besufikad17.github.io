import i1 from './components/assets/img/logos/Python_96px.png';
import i2 from './components/assets/img/logos/Java_96px.png';
import i3 from './components/assets/img/logos/Nodejs_96px.png';
import i4 from './components/assets/img/logos/Adobe Illustrator_96px.png';
import i5 from './components/assets/img/logos/icons8-react-96.png';
import i6 from './components/assets/img/logos/mongo.png';
import './components/assets/css/style.css';
import Avatar from 'react-avatar';
import Footer from "./components/Footer";
import Card from "./components/Card";
import React, { useState } from "react";

import { Container, Row, Col } from 'reactstrap';

function App() {
    const p = [{
        name: "",
        detail: ["Hi there! I'm a fullstack developer and illustrator based in Ethiopia learning in Adama Science and Technology University working on open-source projects. Currently I am working on open-source projects and avaliable for job. I started programming starting from high school. My goal is to create products and services that solve community problems and contribute with others to contribute to open source projects."],
        type: 1
    }];

    const projects = [
        {
            name: "PPM",
            detail: ["UI based desktop app for installing, removing and updating python packages"],
            type: 1,
            url: "https://github.com/Besufikad17/PPM"
        },
        {
            name: "Terminator",
            detail: ["CLI based python application for removing worms and unwanted files"],
            type: 1,
            url: "https://github.com/Besufikad17/Terminator"
        },
        {
            name: "ChemistryTool",
            detail: ["A module that solves chemistry related problems interms of algoritihms"],
            type: 1,
            url: "https://github.com/Besufikad17/ChemistryTool"
        },
        {
            name: "CalanderFx",
            detail: ["" +
                "CalanderFx is javaFx app which is based on Ethiopic calander system"],
            type: 1,
            url: "https://github.com/Besufikad17/CalanderFx"
        }
    ]

    const org = [
        {
            name: "Github",
            detail: ["Contributed in open-source projects.", "Co-developed Abushakir-java"],
            type: 0,
        },
        {
            name: "Chewatacon",
            detail: ["Participant in 2021 D5 game jam.", "Co-developed digitalAcheda and Hagre"],
            type: 0,
        },
        {
            name: "Icog-Labs",
            detail: ["Participant in 2019 Solve-IT competition.", "Co-developed ecobox"],
            type: 0,
        }
    ]
    const [data, setData] = useState({ email: "", name: "", message: "" })


    const submit = e => {
        e.preventDefault();
        console.log(data)
        alert("sucessfully sent")
    }
    return (
        <div className="App">

            <div className='Header'>
                <p style={{
                    fontSize: "36px",
                    fontFamily: "consolas",
                    fontWeight: "bold",
                    color: "white",
                    marginBottom: "0px",
                    marginTop: "140px",
                    marginLeft: "100px"
                }}>Besufikad Micheal</p>
                <p style={{ fontSize: "20px", fontFamily: "consolas", color: "white", marginLeft: "100px" }}>Fullstack
                    Developer || Illustrator || Student</p>
            </div>

            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <Card name={p[0].name} type={p[0].type} detail={p[0].detail} />
                    </ul>
                </div>
            </div>

            <div style={{
                width: "auto",
                height: "350px",
                marigin: "10px",
                padding: "10px",
                textAlign: "center",
                backgroundColor: "#323232"
            }}
                id="experience"
            >
                <p style={{ fontSize: "46px", fontFamily: "consolas", color: "white" }}>Skills</p>

                <p style={{ fontSize: "26px", fontFamily: "consolas", color: "white" }}>Things
                    I've picked up over the years</p>

                <div className="box">
                    <Avatar src={i1} alt="python" round={true} size={64} />
                    <Avatar src={i2} alt="java" round={true} size={64} />
                    <Avatar src={i3} alt="node" round={true} size={64} />
                    <Avatar src={i4} alt="illustato" round={true} size={64} />
                    <Avatar src={i5} alt="illustato" round={true} size={64} />
                    <Avatar src={i6} alt="illustato" round={true} size={64} />
                </div>
            </div>

            <div style={{
                width: "auto",
                marigin: "10px",
                padding: "10px",
                textAlign: "center",
                backgroundColor: "white"
            }}
                id="experience"
            >
                <p style={{ fontSize: "46px", fontFamily: "consolas" }}>Experience</p>
                <p style={{ fontSize: "26px", fontFamily: "consolas" }}>Places and people I've worked with</p>
            </div>

            <Container>
                <Row>
                    <Col>
                        <Card name={org[0].name} type={org[0].type} detail={org[0].detail} />
                    </Col><br />
                    <Col>
                        <Card name={org[1].name} type={org[1].type} detail={org[1].detail} />
                    </Col><br />
                    <Col>

                        <Card name={org[2].name} type={org[2].type} detail={org[2].detail} />
                    </Col><br />
                </Row>
            </Container>

            <div style={{
                width: "auto",
                marigin: "20px",
                padding: "50px",
                textAlign: "center",
                backgroundColor: "#16251F"
            }}>
                <p style={{ fontSize: "46px", fontFamily: "consolas", color: "white" }}>Projects</p>
                <p style={{ fontSize: "26px", fontFamily: "consolas", color: "white" }}>List
                    of open-source projects I have been working on</p>
            </div>


            <Container>
                <Row>
                    <Col
                        className="bg-light border"
                        sm={{
                            offset: 1,
                            size: 'auto'
                        }}
                    >
                        <Card name={projects[0].name} type={projects[0].type} url={projects[0].url}
                            detail={projects[0].detail} />
                    </Col><br />
                    <Col
                        className="bg-light border"
                        sm={{
                            offset: 1,
                            size: 'auto'
                        }}
                    >
                        <Card name={projects[1].name} type={projects[1].type} url={projects[1].url}
                            detail={projects[1].detail} />
                    </Col><br />
                </Row>
                <Row>
                    <Col
                        className="bg-light border"
                        sm={{
                            offset: 1,
                            size: 'auto'
                        }}
                    >
                        <Card name={projects[2].name} type={projects[2].type} url={projects[2].url}
                            detail={projects[2].detail} />
                    </Col><br />

                    <Col
                        className="bg-light border"
                        sm={{
                            offset: 1,
                            size: 'auto'
                        }}
                    >
                        <Card name={projects[3].name} type={projects[3].type} url={projects[3].url}
                            detail={projects[3].detail} />
                    </Col><br />

                </Row>
            </Container>


            <div style={{
                width: "auto",
                marigin: "20px",
                padding: "50px",
                textAlign: "center",
                backgroundColor: "#2e2e2e"
            }}>
                <p style={{ fontSize: "46px", fontFamily: "consolas", color: "white" }}>Let's grab a cup!</p>
                <p style={{ fontSize: "26px", fontFamily: "consolas", color: "white" }}>Available to chat about design,
                    people, and things.</p>
            </div>
            <div className="container">
                <div className="body">
                    <div className="form">
                        <div className="form-group">
                            <input type="text" value={data.subject}
                                onChange={e => setData({ ...data, name: e.target.value })} placeholder="name" />
                        </div>
                        <div className="form-group">
                            <input type="text" value={data.email}
                                onChange={e => setData({ ...data, email: e.target.value })} placeholder="email" />
                        </div>
                        <div className="form-group">
                            <textarea value={data.message} onChange={e => setData({ ...data, message: e.target.value })}
                                placeholder="message" />
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button type="submit" className="btn" value="submit" onClick={submit}>
                        Submit
                    </button>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default App;
