import React from "react";
import { Row, Col, Form } from "react-bootstrap";

const Home = () => {
  function changeBackground(e) {
    e.target.style.color = "#cc7000";
    e.target.style.fontSize = "50px";
  }
  function changeBackground1(e) {
    e.target.style.color = "black";
    e.target.style.fontSize = "40px";
  }

  return (
    <div style={{ padding: "80px" }}>
      <div className="container">
        <div className="mt-5 fw-bolder lead">
          <h1 style={{ fontSize: "50px" }}>
            Hey , I'm{" "}
            <span style={{ color: "#cc7000" }}>
              SUJIT NANGARE <i className="fas fa-hand-paper"></i>
            </span>
          </h1>
          <h1 className="lead" style={{ fontSize: "50px" }}>
            a web developer based in Pune, India. <br></br>I love building
            beautiful interfaces,
            <br></br> web apps and everything in between!
          </h1>
          <br></br>
          <span className="lead " style={{ fontSize: "30px" }}>
            Get in Touch <i className="fas fa-arrow-right"></i>
            <span
              style={{
                cursor: "pointer",
                borderBottom: "3px solid #cc7000",
                fontWeight: "400",
              }}
            >
              {" "}
              sujeetnangare@gmail.com{" "}
            </span>
          </span>
        </div>
        <Form className="my-5">
          <Row className=" lead ">
            <Col className="mt-5 lead  text-center" xs={4}>
              <span className="fw-bold" style={{ color: "#cc7000" }}>
                BACKGROUND
              </span>
            </Col>
            <Col className="mt-5 lead fs-10 " xs={8}>
              <p>
                I recently graduated from{" "}
                <strong className="fw-800"> Savitiribai Phule Pune</strong>{" "}
                University after completing Bachelor of Engineering in
                Mechanical Engineering.<br></br>
                <br></br>
                As a web developer, I enjoy bridging the gap between engineering
                and design — combining my technical knowledge with my keen eye
                for design to create a beautiful product. My goal is to always
                build applications that are scalable and efficient under the
                hood while providing engaging, pixel-perfect user experiences.
              </p>
              <p>
                <a
                  className="fw-800 btn btn-outline-dark "
                  href="https://drive.google.com/file/d/1W-_G9hQV3Lgao6_KwvFBQXVxM6iq5v4d/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Resume <i className="fas fa-arrow-right"></i>
                </a>
              </p>
            </Col>
          </Row>
        </Form>
        <Form className="my-5" style={{ cursor: "pointer" }}>
          <Row className=" lead ">
            <Col className="mt-5 lead text-center" xs={4}>
              <span className="fw-bold" style={{ color: "#cc7000" }}>
                SKILLS
              </span>
            </Col>
            <Col className="mt-5 lead fs-10 " xs={8}>
              <div>
                <Row className="py-5 ">
                  <Col xs={2}>
                    <div style={{ fontSize: "40px", marginLeft: "20px" }}>
                      <i
                        className="fab fa-html5 "
                        onMouseOver={changeBackground}
                        onMouseOut={changeBackground1}
                      ></i>
                    </div>
                  </Col>
                  <Col xs={2}>
                    <div style={{ fontSize: "40px", marginLeft: "40px" }}>
                      <i
                        className="fab fa-css3 "
                        onMouseOver={changeBackground}
                        onMouseOut={changeBackground1}
                      ></i>
                    </div>
                  </Col>
                  <Col xs={2}>
                    <div style={{ fontSize: "40px", marginLeft: "40px" }}>
                      <i
                        className="fab fa-js "
                        onMouseOver={changeBackground}
                        onMouseOut={changeBackground1}
                      ></i>
                    </div>
                  </Col>
                  <Col xs={2} style={{}}>
                    <div
                      style={{
                        fontSize: "40px",
                        marginLeft: "40px",
                      }}
                    >
                      <i
                        className="fab fa-react "
                        onMouseOver={changeBackground}
                        onMouseOut={changeBackground1}
                      ></i>
                    </div>
                  </Col>
                </Row>
              </div>
              <div>
                <Row className="py-1 ">
                  <Col xs={2}>
                    <div
                      style={{
                        fontSize: "40px",
                        marginLeft: "20px",
                      }}
                    >
                      <i
                        className="fab fa-python "
                        onMouseOver={changeBackground}
                        onMouseOut={changeBackground1}
                      ></i>
                    </div>
                  </Col>
                  <Col xs={2}>
                    <div
                      style={{
                        fontSize: "40px",
                        marginLeft: "40px",
                      }}
                    >
                      <i
                        className="fab fa-github"
                        onMouseOver={changeBackground}
                        onMouseOut={changeBackground1}
                      ></i>
                    </div>
                  </Col>
                  <Col xs={2}>
                    <div style={{ fontSize: "40px", marginLeft: "40px" }}>
                      <i
                        className="fab fa-node"
                        onMouseOver={changeBackground}
                        onMouseOut={changeBackground1}
                      ></i>
                    </div>
                  </Col>
                  <Col xs={2}>
                    <div style={{ fontSize: "40px", marginLeft: "40px" }}>
                      <i
                        className="fab fa-npm "
                        onMouseOver={changeBackground}
                        onMouseOut={changeBackground1}
                      ></i>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Form>
        <Form className="my-5">
          <Row className=" lead ">
            <Col className="mt-5 lead text-center" xs={4}>
              <span className="fw-bold" style={{ color: "#cc7000" }}>
                PROJECTS
              </span>
            </Col>
            <Col className="mt-5 lead fs-10 " xs={8}>
              <a
                className="fw-bold btn "
                href="https://github.com/sujit6060/WeatherApp"
                target="_blank"
                rel="noreferrer"
              >
                Weather App <i className="fas fa-arrow-right"></i>
              </a>
              <br></br>
              <p className="lead" style={{ fontSize: "20px" }}>
                A web app to help you to know Temperatures in your side to all
                along world.
                <span
                  style={{
                    marginTop: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                    width: "350px",
                  }}
                >
                  <span
                    className="btn btn-outline-dark btn-sm"
                    style={{ fontSize: "15px" }}
                  >
                    ReactJs
                  </span>
                  <span
                    className="btn btn-outline-dark btn-sm"
                    style={{ fontSize: "15px" }}
                  >
                    React-Bootstrap
                  </span>
                  <span
                    className="btn btn-outline-dark btn-sm"
                    style={{ fontSize: "15px" }}
                  >
                    OpenweatherApi
                  </span>
                </span>
              </p>
              <a
                className="fw-bold btn "
                href="https://github.com/sujit6060/WatchMyShow"
                target="_blank"
                rel="noreferrer"
              >
                WatchMyShow <i className="fas fa-arrow-right"></i>
              </a>
              <br></br>
              <p className="lead" style={{ fontSize: "20px" }}>
                Movie web app that shows the latest trending movies.
                <span
                  style={{
                    marginTop: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                    width: "270px",
                  }}
                >
                  <span
                    className="btn btn-outline-dark btn-sm"
                    style={{ fontSize: "15px" }}
                  >
                    ReactJs
                  </span>

                  <span
                    className="btn btn-outline-dark btn-sm"
                    style={{ fontSize: "15px" }}
                  >
                    Semantic Ui
                  </span>
                  <span
                    className="btn btn-outline-dark btn-sm"
                    style={{ fontSize: "15px" }}
                  >
                    TMDB API
                  </span>
                </span>
              </p>
              <a
                className="fw-bold btn "
                href="https://github.com/sujit6060/Trend-Shop"
                target="_blank"
                rel="noreferrer"
              >
                Trend-Shop <i className="fas fa-arrow-right"></i>
              </a>
              <br></br>
              <p className="lead" style={{ fontSize: "20px" }}>
                Ecommerce website to purchase online with cart and checkout.
                <span
                  style={{
                    marginTop: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                    width: "350px",
                  }}
                >
                  <span
                    className="btn btn-outline-dark btn-sm"
                    style={{ fontSize: "15px" }}
                  >
                    ReactJs
                  </span>
                  <span
                    className="btn btn-outline-dark btn-sm"
                    style={{ fontSize: "15px" }}
                  >
                    Redux
                  </span>
                  <span
                    className="btn btn-outline-dark btn-sm"
                    style={{ fontSize: "15px" }}
                  >
                    Material Ui
                  </span>
                  <span
                    className="btn btn-outline-dark btn-sm"
                    style={{ fontSize: "15px" }}
                  >
                    FakeShopApi
                  </span>
                </span>
              </p>
              <a
                className="fw-bold btn "
                href="https://github.com/sujit6060/BuyBookNow"
                target="_blank"
                rel="noreferrer"
              >
                BuyBookNow <i className="fas fa-arrow-right"></i>
              </a>
              <br></br>
              <p className="lead" style={{ fontSize: "20px" }}>
                ECommerce website to purchase books.
                <span
                  style={{
                    marginTop: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                    width: "200px",
                  }}
                >
                  <span
                    className="btn btn-outline-dark btn-sm"
                    style={{ fontSize: "15px" }}
                  >
                    ReactJs
                  </span>
                  <span
                    className="btn btn-outline-dark btn-sm"
                    style={{ fontSize: "15px" }}
                  >
                    React-Bootstrap
                  </span>
                </span>
              </p>
              <div style={{ marginTop: "50px" }}>
                <a
                  style={{ color: "black" }}
                  className="lead fw-bold "
                  href="https://github.com/sujit6060"
                >
                  Check my other projects on github.
                </a>
              </div>
            </Col>
          </Row>
        </Form>
      </div>
      <Form>
        <Row className=" lead mt-5 ">
          <Col className="mt-5 lead" xs={8}>
            <span className="fw-bold lead" style={{ color: "gray" }}>
              Created By
              <br></br>
              Sujit Nangare <i className="far fa-hand-peace"></i>
            </span>
          </Col>
          <Col
            className="mt-5 fs-10 "
            xs={4}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <a
              className="fw-bold "
              href="https://www.linkedin.com/in/sujit6060/"
            >
              Linkedin
            </a>
            <a className="lead fw-bold " href="https://github.com/sujit6060">
              Github
            </a>
            <a
              className="lead fw-bold "
              href="https://twitter.com/SujeetNangare"
            >
              Twitter
            </a>
            <a
              className="lead fw-bold "
              href="https://www.facebook.com/sujit.nangare.73/"
            >
              Facebook
            </a>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Home;
