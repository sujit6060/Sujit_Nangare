import React from "react";
import { Row, Col, Form } from "react-bootstrap";

const Home = () => {
  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div className="container">
        <div className="fw-bolder lead">
          <h1 style={{ fontSize: "50px" }}>
            Hey, I'm{" "}
            <span style={{ color: "#cc7000" }}>
              SUJIT NANGARE <i className="fas fa-hand-paper"></i>
            </span>
          </h1>
          <h1 className="lead" style={{ fontSize: "50px" }}>
            a Software Engineer based in Pune, India. <br />I love building
            beautiful interfaces,
            <br /> web apps and everything in between!
          </h1>
          <br />
          <span className="lead" style={{ fontSize: "30px" }}>
            Get in Touch <i className="fas fa-arrow-right"></i>&nbsp;
            <span
              style={{
                cursor: "pointer",
                borderBottom: "3px solid #cc7000",
                fontWeight: "400",
                textDecoration: "none", // Remove the default underline
              }}
            >
              <a
                href="mailto:sujeetnangare@gmail.com"
                style={{ color: "inherit", textDecoration: "none" }} // Set color and remove underline
              >
                SujeetNangare@gmail.com
              </a>
            </span>
          </span>
        </div>
        <Form className="my-5">
          <Row className="lead">
            <Col className="lead text-center" xs={12} md={4}>
              <span className="fw-bold" style={{ color: "#cc7000" }}>
                BACKGROUND
              </span>
            </Col>
            <Col className="mt-5 lead fs-10" xs={12} md={8}>
              <p>
                I recently graduated from{" "}
                <strong className="fw-800"> Savitiribai Phule Pune</strong>{" "}
                University after completing a Bachelor of Engineering in
                Mechanical Engineering.
                <br />
                <br />
                As a Software Engineer, I enjoy bridging the gap between
                engineering and design — combining my technical knowledge with
                my keen eye for design to create a beautiful product. My goal is
                to always build applications that are scalable and efficient
                under the hood while providing engaging, pixel-perfect user
                experiences.
              </p>
              <p>
                <a
                  className="fw-800 btn btn-outline-dark"
                  href="https://drive.google.com/file/d/1DrDyRvmcmllM12STaQYiuslt1Ao4Fneq/view?usp=sharing"
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
          <Row className="lead">
            <Col className="mt-5 lead text-center" xs={12} md={4}>
              <span className="fw-bold" style={{ color: "#cc7000" }}>
                SKILLS
              </span>
            </Col>
            <Col className="lead fs-10" xs={12} md={8}>
              <div>
                <Row className="py-3">
                  <Col xs={3}>
                    <div style={{ fontSize: "40px", marginLeft: "20px" }}>
                      <img
                        src="https://img.icons8.com/color/50/000000/html-5--v1.png"
                        alt="html5"
                      />
                    </div>
                  </Col>
                  <Col xs={3}>
                    <div style={{ fontSize: "40px", marginLeft: "20px" }}>
                      <img
                        src="https://img.icons8.com/color/48/000000/css3.png"
                        alt="css3"
                      />
                    </div>
                  </Col>
                  <Col xs={3}>
                    <div style={{ fontSize: "40px", marginLeft: "20px" }}>
                      <img
                        src="https://img.icons8.com/color/javascript"
                        alt="js"
                      />
                    </div>
                  </Col>
                  <Col xs={3}>
                    <div
                      style={{
                        fontSize: "40px",
                        marginLeft: "20px",
                      }}
                    >
                      <img
                        src="https://img.icons8.com/office/48/000000/react.png"
                        alt="reactjs"
                      />
                    </div>
                  </Col>
                </Row>
              </div>
              <div>
                <Row className="py-3 ">
                  <Col xs={3}>
                    <div
                      style={{
                        fontSize: "40px",
                        marginLeft: "20px",
                      }}
                    >
                      <img
                        src="https://img.icons8.com/ios/48/000000/redux.png"
                        alt="redux"
                      />
                    </div>
                  </Col>
                  <Col xs={3}>
                    <div
                      style={{
                        fontSize: "40px",
                        marginLeft: "20px",
                      }}
                    >
                      <img
                        src="https://img.icons8.com/fluency/50/000000/node-js.png"
                        alt="nodejs"
                      />
                    </div>
                  </Col>
                  <Col xs={3}>
                    <div style={{ fontSize: "40px", marginLeft: "20px" }}>
                      <img
                        src="https://img.icons8.com/color/48/000000/mongodb.png"
                        alt="mongoDb"
                      />
                    </div>
                  </Col>
                  <Col xs={3}>
                    <div style={{ fontSize: "40px", marginLeft: "20px" }}>
                      <img
                        src="https://img.icons8.com/color/48/000000/npm.png"
                        alt="npm"
                      />
                    </div>
                  </Col>
                </Row>
              </div>
              <div>
                <Row className="py-3 ">
                  <Col xs={3}>
                    <div
                      style={{
                        fontSize: "40px",
                        marginLeft: "20px",
                      }}
                    >
                      <img
                        src="https://img.icons8.com/color/jenkins"
                        alt="jenkins"
                      />
                    </div>
                  </Col>
                  <Col xs={3}>
                    <div
                      style={{
                        fontSize: "40px",
                        marginLeft: "20px",
                      }}
                    >
                      <img
                        src="https://img.icons8.com/color/salesforce"
                        alt="salesforce"
                      />
                    </div>
                  </Col>
                  <Col xs={3}>
                    <div style={{ fontSize: "40px", marginLeft: "20px" }}>
                      <img
                        src="https://img.icons8.com/color/mysql"
                        alt="mysql"
                      />
                    </div>
                  </Col>
                  <Col xs={3}>
                    <div style={{ fontSize: "40px", marginLeft: "20px" }}>
                      <img
                        src="https://img.icons8.com/color/typescript"
                        alt="typescript"
                      />
                    </div>
                  </Col>
                </Row>
              </div>
              <div>
                <Row className="py-3 ">
                  <Col xs={3}>
                    <div
                      style={{
                        fontSize: "40px",
                        marginLeft: "20px",
                      }}
                    >
                      <img
                        src="https://img.icons8.com/material/48/000000/amazon-web-services.png"
                        alt="aws"
                      />
                    </div>
                  </Col>
                  <Col xs={3}>
                    <div
                      style={{
                        fontSize: "40px",
                        marginLeft: "20px",
                      }}
                    >
                      <img
                        src="https://img.icons8.com/color/48/000000/amazon-s3.png"
                        alt="aws-S3"
                      />
                    </div>
                  </Col>
                  <Col xs={3}>
                    <div style={{ fontSize: "40px", marginLeft: "20px" }}>
                      <img
                        src="https://img.icons8.com/fluency/48/000000/github.png"
                        alt="git"
                      />
                    </div>
                  </Col>
                  <Col xs={3}>
                    <div style={{ fontSize: "40px", marginLeft: "20px" }}>
                      <img
                        src="https://img.icons8.com/color/48/000000/firebase.png"
                        alt="firebase"
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Form>
        <Form className="my-5">
          <Row className="lead">
            <Col className="mt-5 lead text-center" xs={12} md={4}>
              <span className="fw-bold" style={{ color: "#cc7000" }}>
                PROJECTS
              </span>
            </Col>
            <Col className="mt-5 lead fs-10" xs={12} md={8}>
              <a
                className="fw-bold btn mt-3 "
                href="https://github.com/sujit6060/WatchMyShow"
                target="_blank"
                rel="noreferrer"
              >
                WatchMyShow <i className="fas fa-arrow-right"></i>
              </a>
              <br></br>
              <p className="lead" style={{ fontSize: "18px" }}>
                Movie web app that shows the latest trending movies.
                <span
                  style={{
                    marginTop: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                    width: "230px",
                  }}
                >
                  <span
                    className="btn btn-outline-dark btn-sm"
                    style={{ fontSize: "12px" }}
                  >
                    ReactJs
                  </span>

                  <span
                    className="btn btn-outline-dark btn-sm"
                    style={{ fontSize: "12px" }}
                  >
                    Semantic Ui
                  </span>
                  <span
                    className="btn btn-outline-dark btn-sm"
                    style={{ fontSize: "12px" }}
                  >
                    TMDB API
                  </span>
                </span>
              </p>
              <a
                className="fw-bold btn "
                href="https://github.com/sujit6060/Crypto_World"
                target="_blank"
                rel="noreferrer"
              >
                Crypto_World <i className="fas fa-arrow-right"></i>
              </a>
              <br></br>
              <p className="lead" style={{ fontSize: "18px" }}>
                A web app to help you to know CryptoCurrency market
                price,trending coins in world with graphical representation.
                <span
                  style={{
                    marginTop: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                    width: "280px",
                  }}
                >
                  <span
                    className="btn btn-outline-dark btn-sm"
                    style={{ fontSize: "12px" }}
                  >
                    ReactJs
                  </span>
                  <span
                    className="btn btn-outline-dark btn-sm"
                    style={{ fontSize: "12px" }}
                  >
                    Material-Ui
                  </span>
                  <span
                    className="btn btn-outline-dark btn-sm"
                    style={{ fontSize: "12px" }}
                  >
                    CryptoCurrency Api
                  </span>
                </span>
              </p>
              <a
                className="fw-bold btn "
                href="https://github.com/sujit6060/Memories_App"
                target="_blank"
                rel="noreferrer"
              >
                Memories App <i className="fas fa-arrow-right"></i>
              </a>
              <br></br>
              <p className="lead" style={{ fontSize: "18px" }}>
                Mern stack web app to creating a memories with like option.
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
                    style={{ fontSize: "12px" }}
                  >
                    ReactJs
                  </span>
                  <span
                    className="btn btn-outline-dark btn-sm"
                    style={{ fontSize: "12px" }}
                  >
                    Material-ui
                  </span>
                  <span
                    className="btn btn-outline-dark btn-sm"
                    style={{ fontSize: "12px" }}
                  >
                    Nodejs
                  </span>
                  <span
                    className="btn btn-outline-dark btn-sm"
                    style={{ fontSize: "12px" }}
                  >
                    ExpressJs
                  </span>
                  <span
                    className="btn btn-outline-dark btn-sm"
                    style={{ fontSize: "12px" }}
                  >
                    MongoDb
                  </span>
                </span>
              </p>
              <a
                className="fw-bold btn "
                href="https://github.com/sujit6060/WeatherApp"
                target="_blank"
                rel="noreferrer"
              >
                Weather App <i className="fas fa-arrow-right"></i>
              </a>
              <br></br>
              <p className="lead" style={{ fontSize: "18px" }}>
                A web app to help you to know Temperatures in your side to all
                along world.
                <span
                  style={{
                    marginTop: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                    width: "280px",
                  }}
                >
                  <span
                    className="btn btn-outline-dark btn-sm"
                    style={{ fontSize: "12px" }}
                  >
                    ReactJs
                  </span>
                  <span
                    className="btn btn-outline-dark btn-sm"
                    style={{ fontSize: "12px" }}
                  >
                    React-Bootstrap
                  </span>
                  <span
                    className="btn btn-outline-dark btn-sm"
                    style={{ fontSize: "12px" }}
                  >
                    OpenweatherApi
                  </span>
                </span>
              </p>
              <a
                className="fw-bold btn  mt-3"
                href="https://github.com/sujit6060/Trend-Shop"
                target="_blank"
                rel="noreferrer"
              >
                Trend-Shop <i className="fas fa-arrow-right"></i>
              </a>
              <br></br>
              <p className="lead" style={{ fontSize: "18px" }}>
                Ecommerce website to purchase online with cart and checkout.
                <span
                  style={{
                    marginTop: "20px",
                    display: "flex",
                    justifyContent: "space-between",
                    width: "300px",
                  }}
                >
                  <span
                    className="btn btn-outline-dark btn-sm"
                    style={{ fontSize: "12px" }}
                  >
                    ReactJs
                  </span>
                  <span
                    className="btn btn-outline-dark btn-sm"
                    style={{ fontSize: "12px" }}
                  >
                    Redux
                  </span>
                  <span
                    className="btn btn-outline-dark btn-sm"
                    style={{ fontSize: "12px" }}
                  >
                    Material Ui
                  </span>
                  <span
                    className="btn btn-outline-dark btn-sm"
                    style={{ fontSize: "12px" }}
                  >
                    FakeShopApi
                  </span>
                </span>
              </p>

              <div style={{ marginTop: "50px" }}>
                <a
                  style={{ color: "black" }}
                  className="lead fw-bold "
                  target="_blank"
                  rel="noreferrer"
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
        <Row className="lead mt-5">
          <Col className="mt-5 lead" xs={12} md={8}>
            <span className="fw-bold lead" style={{ color: "gray" }}>
              Created By
              <br />
              Sujit Nangare <i className="far fa-hand-peace"></i>
            </span>
          </Col>
          <Col
            className="mt-5 fs-10"
            xs={12}
            md={4}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <a
              className="fw-bold"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/sujit6060/"
            >
              Linkedin
            </a>
            <a
              className="lead fw-bold"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/sujit6060"
            >
              Github
            </a>
            <a
              className="lead fw-bold"
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/SujeetNangare"
            >
              Twitter
            </a>
            <a
              className="lead fw-bold"
              target="_blank"
              rel="noreferrer"
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
