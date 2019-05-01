import React from 'react'
import {
  Card,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
} from 'reactstrap'

const About = props => {
  return (
    <CardDeck className="container" id="about">
      <Card className="card20" body outline color="grey">
        <img
          src="https://i.imgur.com/dVoFpzQ.png"
          alt="Design"
          className="skills"
        />
        <CardBody>
          <CardTitle>
            <h3>Design</h3>
          </CardTitle>
          <CardText />
          <CardSubtitle>
            <h5>TOOLS</h5>
          </CardSubtitle>
          <CardText>
            Figma
            <br />
            Invision
            <br />
            Photoshop
            <br />
            Illustrator
            <br />
            Adode XD
            <br />
          </CardText>
        </CardBody>
      </Card>
      <Card className="card20" body outline color="grey">
        <img
          src="https://i.imgur.com/Q23f1p2.png"
          alt="Development"
          className="skills"
        />
        <CardBody>
          <CardTitle>
            <h3>Dev</h3>
          </CardTitle>
          <CardSubtitle>
            <h5>TOOLS</h5>
          </CardSubtitle>
          <CardText>
            JavaScript (ES6)
            <br />
            HTML + CSS
            <br />
            React
            <br />
            React Native
            <br />
            MongoDB (No SQL)
            <br />
            with Mongoose
            <br />
            PostgresDB (Relational DB)
            <br /> Sequelize
            <br />
            Express
            <br />
            Node.js
            <br />
            Jest
            <br />
          </CardText>
        </CardBody>
      </Card>
      <Card className="card20" body outline color="grey">
        <img
          src="https://i.imgur.com/RR4aICr.png"
          alt="Others"
          className="skills"
        />
        <CardBody>
          <CardTitle>
            <h3>Others</h3>
          </CardTitle>
          <CardSubtitle>
            <h5>SKILLS</h5>
          </CardSubtitle>
          <CardText>
            Test-driven development
            <br />
            Agile Methodology
            <br />
            React, React Native
            <br />
            Pair programming <br />
            Express
            <br />
            Node
            <br />
          </CardText>
        </CardBody>
      </Card>
    </CardDeck>
  )
}

export default About
