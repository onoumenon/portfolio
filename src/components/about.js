import React from 'react'
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardSubtitle,
  CardBody,
} from 'reactstrap'
import { devTools, devPractices, designTools } from '../services/skillsServices'
import Zoom from 'react-reveal/Zoom'
import styles from './article-preview.module.css'

const About = props => {
  return (
    <CardGroup className="container" id="about">
      <Zoom>
        <Card className="card20" body>
          <CardImg top className="skills" src="images/laptop.png" alt="Dev" />
          <CardBody>
            <CardTitle>
              <h3>Dev</h3>
            </CardTitle>
            <CardSubtitle>
              <h5>TOOLBOX</h5>
            </CardSubtitle>
            <CardText>
              <img src="/images/html.png" className="skillIcon" alt="html5" />
              <img src="/images/js.png" className="skillIcon" alt="js" />
              <img src="/images/css.png" className="skillIcon" alt="css" />
              <br />
              <img src="/images/expo.png" className="skillIcon" alt="expo" />
              <img src="/images/react.png" className="skillIcon" alt="react" />
              <img src="/images/jest.png" className="skillIcon" alt="jest" />
              <br />
              <img src="/images/node.png" className="skillIcon" alt="node" />
              <img
                src="/images/express.png"
                className="skillIcon"
                alt="express"
              />
              <img
                src="/images/circleci.png"
                className="skillIcon"
                alt="circleci"
              />
              <br />
              <img src="/images/sql.png" className="skillIcon" alt="sql" />
              <img
                src="/images/postgres.png"
                className="skillIcon"
                alt="postgres"
              />
              <img
                src="/images/mongodb.png"
                className="skillIcon"
                alt="mongodb"
              />
              <img
                src="/images/cypress.png"
                className="skillIcon"
                alt="cypress"
              />
              <br />
            </CardText>
            {devTools.map(tool => (
              <p className={styles.tag} key={tool}>
                {tool}
              </p>
            ))}
          </CardBody>
        </Card>

        <Card className="card20" body id="devpractices">
          <CardImg
            top
            className="skills"
            src="images/smiley.png"
            alt="Others"
          />
          <CardBody>
            <CardTitle>
              <h3>Dev</h3>
            </CardTitle>
            <CardSubtitle>
              <h5>PRACTICE</h5>
            </CardSubtitle>
            <CardText>
              <img src="/images/tdd.png" className="skillIcon" alt="tdd" />
              <img src="/images/ci.png" className="skillIcon" alt="ci" />
              <br />
              <img src="/images/agile.png" className="skillIcon" alt="agile" />
              <img src="/images/pp.png" className="skillIcon" alt="pp" />
              <br />
            </CardText>
            {devPractices.map(tool => (
              <p className={styles.tag} key={tool}>
                {tool}
              </p>
            ))}
          </CardBody>
        </Card>

        <Card className="card20" body id="designtools">
          <CardImg
            top
            className="skills"
            src="images/pencil.png"
            alt="Design"
          />
          <CardBody>
            <CardTitle>
              <h3>Design</h3>
            </CardTitle>
            <CardText />
            <CardSubtitle>
              <h5>TOOLBOX</h5>
            </CardSubtitle>
            <CardText>
              <img src="/images/xd.png" className="skillIcon" alt="xd" />
              <img src="/images/ps.png" className="skillIcon" alt="ps" />
              <br />
              <img src="/images/ai.png" className="skillIcon" alt="ai" />
              <img src="/images/in.png" className="skillIcon" alt="in" />
              <br />
            </CardText>
            {designTools.map(tool => (
              <p className={styles.tag} key={tool}>
                {tool}
              </p>
            ))}
          </CardBody>
        </Card>
      </Zoom>
    </CardGroup>
  )
}

export default About
