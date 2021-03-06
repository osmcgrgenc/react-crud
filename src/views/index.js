import React from "react";
// nodejs library that concatenates classes

// reactstrap components
import { Button, Card, CardBody, Container, Row, Col } from "reactstrap";

// core components
import Navbar from "../components/Navbars/DemoNavbar.js";
import CardsFooter from "../components/Footers/CardsFooter.js";

class Landing extends React.Component {
  state = {
    posts: {},
  };

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => this.setState({ posts: json }));
  }
  render() {
    return (
      <>
        <Navbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0"></div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="12">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5 ct-content">
                          <ol>
                            {this.state.posts && this.state.posts.length > 0 ? (
                              this.state.posts.map((element) => {
                                return (
                                  <li
                                    className="list-title"
                                    
                                  >
                                    {element.title}{" "}
                                    <div>
                                      <Button
                                        className="btn-neutral btn-icon"
                                        color="default"
                                        href="#"
                                      >
                                        D??zenle
                                      </Button>
                                      <Button
                                        className="btn-neutral btn-icon"
                                        color="default"
                                        href="#"
                                      >
                                        Sil
                                      </Button>
                                      <Button
                                        className="btn-neutral btn-icon"
                                        color="default"
                                        href="#"
                                      >
                                        G??r??nt??le
                                      </Button>
                                    </div>
                                  </li>
                                );
                              })
                            ) : (
                              <li style={{listStyleType:'none'}}>No post data</li>
                            )}
                          </ol>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Landing;
