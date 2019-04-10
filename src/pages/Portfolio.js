import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'


import SWEproject from '../assets/images/SWE_project.png'
import Cool90 from '../assets/images/90_project.png'
import RecipeNuxt from '../assets/images/recipenuxt.png'
import freeingRe from '../assets/images/freeingRe.png'
import reactProject from '../assets/images/react_project.png'
import JythonIm from '../assets/images/JythonIm.png'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


class Portfolio extends React.Component {



    render() {
        const siteTitle = "Dac Dao | Portfolio"
        const siteDescription = "Dac Dao, Portfolio of works. Software Engineer. Web developer. Atlanta, Georgia."

        return (
            <Layout>
                <Helmet>
                  <html lang="en" />
                        <title>{siteTitle}</title>
                          <html lang="en" />
                                          <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                    crossorigin="anonymous"
                  />
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main" style={{overflowX: 'hidden',
  overflowY: 'scroll'}}>

                    <section id="one">
                        <header className="major">
                            <h2>Full portfolio description wth description</h2>
                            <br></br>
                        </header>


  <div>

  <Container>
    <Row>

      {/* project 1*/}
      <Col sm>
      <Card style={{ width: '19rem' }}>
      <Card.Img variant="top" src={SWEproject} />
      <Card.Body>
        <Card.Title>Software Engineering Senior Project</Card.Title>
        <Card.Text>
          This software was built with HTML, CSS and Electron JS. This software purpose was to mimick an online shopping network that would let the user purchase items from the network.<br/>

        </Card.Text>
        <Button variant="primary" href="https://github.com/dacdao1/Electronjs-SWE-Senior-Project">Source Code</Button>
      </Card.Body>
    </Card>
    <br></br>
      </Col>

      {/* project 2*/}
      <Col sm>
      <Card style={{ width: '19rem' }}>
      <Card.Img variant="top" src={Cool90} />
      <Card.Body>
        <Card.Title>90s website</Card.Title>
        <Card.Text>
          This website was built with just HTML and CSS. There is nothing to special about the code itself, but I just wanted to create a 90's style website to practice my HTML5 and CSS3 and also try to go back in time.

        </Card.Text>
        <Button variant="primary" href="https://github.com/dacdao1/90s-cool">Source Code</Button>
      </Card.Body>
    </Card>
  <br></br>
      </Col>

    </Row>


    <Row>

      {/* project 3*/}
      <Col sm>
      <Card style={{ width: '19rem' }}>
      <Card.Img variant="top" src={RecipeNuxt} />
      <Card.Body>
        <Card.Title>Recipe website</Card.Title>
        <Card.Text>
          I learned how to use Nuxt.js (a framework for creating Vue.js applications) and also created this recipe website to demonstrate my skills with Nuxt.js and Vue.js<br/>

        </Card.Text>
        <Button variant="primary" href="https://github.com/dacdao1/recipe-by-nuxtjs">Source Code</Button>
      </Card.Body>
    </Card>
      <br></br>
      </Col>


      {/* project 4*/}
      <Col sm>
      <Card style={{ width: '19rem' }}>
      <Card.Img variant="top" src={freeingRe} />
      <Card.Body>
        <Card.Title>Freeing Return</Card.Title>
        <Card.Text>
          A mock website that I created for a startup here in Atlanta. I used HTML, CSS and JavaScript to create this website. There are also some animation within this website and it is also reponsive to the device that it is on. <br/>

        </Card.Text>
        <Button variant="primary" href="https://github.com/dacdao1/dacdao1.github.io">Source Code</Button>
      </Card.Body>
    </Card>
  <br></br>
      </Col>

    </Row>

    <Row>

      {/* project 5*/}
      <Col sm>
      <Card style={{ width: '19rem' }}>
      <Card.Img variant="top" src={reactProject} />
      <Card.Body>
        <Card.Title>Personal portfolio that was built with React.js</Card.Title>
        <Card.Text>
          I created this website around 3 years ago with the help of Daniel Hayes teaching me about React. The file itself can not be run now since it has way too much vulnerability. But I think creating my own personal website with Gatsby is a little bit better.<br/>

        </Card.Text>
        <Button variant="primary" href="https://github.com/dacdao1/react-portfolio">Source Code</Button>
      </Card.Body>
    </Card>
    <br></br>
      </Col>

      {/* project 6*/}
      <Col sm>
      <Card style={{ width: '19rem' }}>
      <Card.Img variant="top" src={JythonIm} />
      <Card.Body>
        <Card.Title>Learning Jython</Card.Title>
        <Card.Text>
          While I haven't create anything with Jython, I'm slowly learning the language on my own. I think it is a very interesting concept of having two great programming languages (Python and Java), be combine together to create a powerful software. I still learning but I will eventually create a software with Jython soon.

        </Card.Text>
        <Button variant="primary" href="https://github.com/dacdao1/Jython-SnakeCoffee">Source Code</Button>
      </Card.Body>
    </Card>
  <br></br>
      </Col>

    </Row>


  </Container>
</div>
<br/>
                        <ul className="actions">
                            <li><a href="/" className="button">Home</a></li>
                        </ul>
                    </section>




                </div>

            </Layout>
        )
    }
}

export default Portfolio
