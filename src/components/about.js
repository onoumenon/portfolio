import React from 'react'
import {
  UncontrolledPopover,
  PopoverBody,
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardSubtitle,
  CardBody,
} from 'reactstrap'
import Zoom from 'react-reveal/Zoom'

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
              <img
                src="/images/html.png"
                className="skillIcon"
                alt="html5"
                id="ht"
              />
              <UncontrolledPopover
                trigger="focus hover"
                placement="top"
                target="ht"
              >
                <PopoverBody>HTML</PopoverBody>
              </UncontrolledPopover>
              <img
                src="/images/js.png"
                className="skillIcon"
                alt="js"
                id="js"
              />
              <UncontrolledPopover
                trigger="focus hover"
                placement="top"
                target="js"
              >
                <PopoverBody>JavaScript ES6</PopoverBody>
              </UncontrolledPopover>
              <img
                src="/images/css.png"
                className="skillIcon"
                alt="css"
                id="css"
              />
              <UncontrolledPopover
                trigger="focus hover"
                placement="top"
                target="css"
              >
                <PopoverBody>CSS</PopoverBody>
              </UncontrolledPopover>
              <br />
              <img
                src="/images/expo.png"
                className="skillIcon"
                alt="expo"
                id="expo"
              />
              <UncontrolledPopover
                trigger="focus hover"
                placement="top"
                target="expo"
              >
                <PopoverBody>React Native Expo</PopoverBody>
              </UncontrolledPopover>
              <img
                src="/images/react.png"
                className="skillIcon"
                alt="react"
                id="react"
              />
              <UncontrolledPopover
                trigger="focus hover"
                placement="top"
                target="react"
              >
                <PopoverBody>React</PopoverBody>
              </UncontrolledPopover>
              <img
                src="/images/jest.png"
                className="skillIcon"
                alt="jest"
                id="jest"
              />
              <UncontrolledPopover
                trigger="focus hover"
                placement="top"
                target="jest"
              >
                <PopoverBody>Jest</PopoverBody>
              </UncontrolledPopover>
              <br />
              <img
                src="/images/node.png"
                className="skillIcon"
                alt="node"
                id="node"
              />
              <UncontrolledPopover
                trigger="focus hover"
                placement="top"
                target="node"
              >
                <PopoverBody>Node</PopoverBody>
              </UncontrolledPopover>
              <img
                src="/images/express.png"
                className="skillIcon"
                alt="express"
                id="express"
              />
              <UncontrolledPopover
                trigger="focus hover"
                placement="top"
                target="express"
              >
                <PopoverBody>Express</PopoverBody>
              </UncontrolledPopover>
              <img
                src="/images/circleci.png"
                className="skillIcon"
                alt="circleci"
                id="circleci"
              />
              <UncontrolledPopover
                trigger="focus hover"
                placement="top"
                target="circleci"
              >
                <PopoverBody>CircleCI</PopoverBody>
              </UncontrolledPopover>
              <br />
              <img
                src="/images/sql.png"
                className="skillIcon"
                alt="sql"
                id="sql"
              />
              <UncontrolledPopover
                trigger="focus hover"
                placement="top"
                target="sql"
              >
                <PopoverBody>SQL</PopoverBody>
              </UncontrolledPopover>
              <img
                src="/images/postgres.png"
                className="skillIcon"
                alt="postgres"
                id="postgres"
              />
              <UncontrolledPopover
                trigger="focus hover"
                placement="top"
                target="postgres"
              >
                <PopoverBody>PostgreSQL</PopoverBody>
              </UncontrolledPopover>
              <img
                src="/images/mongodb.png"
                className="skillIcon"
                alt="mongodb"
                id="mongodb"
              />
              <UncontrolledPopover
                trigger="focus hover"
                placement="top"
                target="mongodb"
              >
                <PopoverBody>MongoDB</PopoverBody>
              </UncontrolledPopover>
            </CardText>
          </CardBody>
        </Card>
        <Card className="card20" body>
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
              <h5>PRACTICES</h5>
            </CardSubtitle>
            <CardText>
              <img
                src="/images/tdd.png"
                className="skillIcon"
                alt="tdd"
                id="tdd"
              />
              <UncontrolledPopover
                trigger="focus hover"
                placement="top"
                target="tdd"
              >
                <PopoverBody>TDD</PopoverBody>
              </UncontrolledPopover>
              <img
                src="/images/ci.png"
                className="skillIcon"
                alt="ci"
                id="ci"
              />
              <UncontrolledPopover
                trigger="focus hover"
                placement="top"
                target="ci"
              >
                <PopoverBody>Continuous Integration</PopoverBody>
              </UncontrolledPopover>
              <br />
              <img
                src="/images/agile.png"
                className="skillIcon"
                alt="agile"
                id="agile"
              />
              <UncontrolledPopover
                trigger="focus hover"
                placement="top"
                target="agile"
              >
                <PopoverBody>Agile</PopoverBody>
              </UncontrolledPopover>
              <img
                src="/images/pp.png"
                className="skillIcon"
                alt="pp"
                id="pp"
              />
              <UncontrolledPopover
                trigger="focus hover"
                placement="top"
                target="pp"
              >
                <PopoverBody>Pair Programming</PopoverBody>
              </UncontrolledPopover>
            </CardText>
          </CardBody>
        </Card>
        <Card className="card20" body>
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
              <img
                src="/images/xd.png"
                className="skillIcon"
                alt="xd"
                id="xd"
              />
              <UncontrolledPopover
                trigger="focus hover"
                placement="top"
                target="xd"
              >
                <PopoverBody>Adobe XD</PopoverBody>
              </UncontrolledPopover>
              <img
                src="/images/ps.png"
                className="skillIcon"
                alt="ps"
                id="ps"
              />
              <UncontrolledPopover
                trigger="focus hover"
                placement="top"
                target="ps"
              >
                <PopoverBody>Adobe Photoshop</PopoverBody>
              </UncontrolledPopover>
              <br />
              <img
                src="/images/ai.png"
                className="skillIcon"
                alt="ai"
                id="ai"
              />
              <UncontrolledPopover
                trigger="focus hover"
                placement="top"
                target="ai"
              >
                <PopoverBody>Adobe Illustrator</PopoverBody>
              </UncontrolledPopover>
              <img
                src="/images/in.png"
                className="skillIcon"
                alt="in"
                id="in"
              />
              <UncontrolledPopover
                trigger="focus hover"
                placement="top"
                target="in"
              >
                <PopoverBody>InVision</PopoverBody>
              </UncontrolledPopover>
            </CardText>
          </CardBody>
        </Card>
      </Zoom>
    </CardGroup>
  )
}

export default About
