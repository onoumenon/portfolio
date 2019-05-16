import React from 'react'
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
} from 'reactstrap'

const About = props => {
  return (
    <CardDeck className="container" id="about">
      <Card
        className="card20"
        body
        style={{
          backgroundColor: '#16192c',
          color: '#a4ffd2',
        }}
      >
        <CardImg top className="skills" src="/pencil.png" alt="Design" />
        <CardBody>
          <CardTitle>
            <h3>Design</h3>
          </CardTitle>
          <CardText />
          <CardSubtitle>
            <h5>TOOLBOX</h5>
          </CardSubtitle>
          <CardText>
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
      <Card
        className="card20"
        body
        style={{
          backgroundColor: '#16192c',
          color: '#a4ffd2',
        }}
      >
        <CardImg top className="skills" src="laptop.png" alt="Dev" />
        <CardBody>
          <CardTitle>
            <h3>Dev</h3>
          </CardTitle>
          <CardSubtitle>
            <h5>TOOLBOX</h5>
          </CardSubtitle>
          <CardText>
            JavaScript (ES6)
            <br />
            HTML5, CSS (with a touch of SASS)
            <br />
            React
            <br />
            React Native
            <br />
            MongoDB (No SQL)
            <br />
            Mongoose
            <br />
            PostgresDB (Relational DB)
            <br />
            Sequelize
            <br />
            Express
            <br />
            Node.js
            <br />
            Jest
            <br />
            Travis
            <br />
            Circle CI
          </CardText>
        </CardBody>
      </Card>
      <Card
        className="card20"
        body
        style={{
          backgroundColor: '#16192c',
          color: '#a4ffd2',
        }}
      >
        <CardImg top className="skills" src="smiley.png" alt="Others" />
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
            Continous Integration
            <br />
            Pair programming
            <br />
            Computer Science Basics
            <br />
            (via Harvard CS50)
            <br />
            <br />
          </CardText>
        </CardBody>
      </Card>
    </CardDeck>
  )
}

export default About
