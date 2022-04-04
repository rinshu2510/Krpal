import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { Typewriter } from "react-simple-typewriter";
import "./homepage.scss";
const Container = styled.div`
  height: 90vh;
  padding: 0px 75px;
  background-color: black;
  position: absolute;
  top: 20vh;
  left: 150px;
  background: transparent;
`;
const Discover = styled.div`
  width: 70vw;
  height: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  div {
    margin: 0px;
    padding: 0px;
    font-weight: 900;
    font-size: 90px;
    color: white;
    width: 900px;
    letter-spacing: 1.5px;
    b {
      font-weight: 900;
      font-size: 99px;
      background: -webkit-linear-gradient(#9602bb, #8c00ff, #6942ef);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 70px;
    }
  }
  div:nth-child(2) {
    font-size: 100px;
  }
  div:nth-child(3) {
    font-size: 90px;
  }
`;

const Start = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-top: 40px;
  height: 70px;
  width: 260px;
  padding: 15px;
  font-size: 28px;
  text-transform: uppercase;
  border-radius: 50px;
  border: none;
  background-color: #7c17a8;
  color: white;
  font-weight: 900;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  background-image: linear-gradient(
    90deg,
    #7700ff,
    #7a07e6,
    #cd28ff,
    #0059ff,
    #c300ff,
    #f82cf8
  );
  background-size: 400%;
  background-position: 0% 0%;
  position: relative;
  &:before {
    position: absolute;
    content: "";
    left: -1px;
    top: -1px;
    right: -1px;
    bottom: -1px;
    border-radius: 26px;
    background-image: linear-gradient(
      90deg,
      #7700ff,
      #7a07e6,
      #cd28ff,
      #0059ff,
      #c300ff,
      #f82cf8
    );
    background-size: 500%;
    background-position: 0% 0%;
    filter: blur(10px);
    opacity: 0;
    z-index: -1;
    transition: opacity 0.2s;
  }

  .arrow {
    height: 40px;
    width: 40px;
    stroke:white;
    font-weight:900;
  }
  &:hover {
    animation: gradientRotate 2s infinite;
    &::before {
      opacity: 1;
      animation: gradientRotate 2s infinite;
    }
    transform: scale(1.01);
    gap: 10px;
  }
  &:active {
    color: #c3c4d5;
  }

  &:focus {
    &::before {
      opacity: 1;
    }
  }
  @keyframes gradientRotate {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: 100% 100%;
    }
  }
  @keyframes scale {
    to {
      transform: translate(-50%, -50%) scale(3);
      opacity: 0;
    }
  }
`;

const Blob = styled.div`
  overflow: hidden;
  border-radius: 46% 54% 42% 58% / 58% 62% 38% 42% !important;
  animation: move 18s cubic-bezier(0.42, 0, 0.58, 1) infinite;
  transform-origin: center;
  background-color: #ef03e8;
  height: 350px;
  width: 350px;
  z-index: 2;
  transition: all 0.3s;
  filter: blur(50px);
  // box-shadow: rgba(253,22,248,1) 0px 19px 38px, rgba(253,22,248,1) 0px 15px 12px;

  @keyframes move {
    0% {
      transform: scale(1) translate(10px, -10px) rotate(0deg);
    }
    38% {
      transform: scale(0.8, 1) translate(100vw, 30vh) rotate(85deg);
    }
    40% {
      transform: scale(0.8, 1) translate(100vw, 30vh) rotate(90deg);
    }
    78% {
      transform: scale(1) translate(10vw, 30vh) rotate(175deg);
    }
    80% {
      transform: scale(1) translate(10vw, 30vh) rotate(180deg);
    }
    100% {
      transform: scale(1) translate(10px, -10px) rotate(360deg);
    }
  }
`;

const Blob2 = styled.div`
  overflow: hidden;
  border-radius: 46% 54% 42% 58% / 58% 62% 38% 42% !important;
  animation: rotate 15s cubic-bezier(0.42, 0, 0.58, 1) infinite;
  transform-origin: center;
  margin-left: 100px;

  background-color: #7c17a8;
  height: 350px;
  width: 350px;
  z-index: 2;
  transition: all 0.3s;
  filter: blur(50px);
  // box-shadow: rgba(253,22,248,1) 0px 19px 38px, rgba(253,22,248,1) 0px 15px 12px;

  @keyframes rotate {
    0% {
      transform: scale(1) translate(-10px, 10px) rotate(0deg);
    }
    38% {
      transform: scale(0.8, 1) translate(70vw, -30vh) rotate(85deg);
    }
    40% {
      transform: scale(0.8, 1) translate(70vw, -30vh) rotate(90deg);
    }
    78% {
      transform: scale(1.2) translate(10vw, -30vh) rotate(175deg);
    }
    80% {
      transform: scale(1.2) translate(10vw, -30vh) rotate(180deg);
    }
    100% {
      transform: scale(1) translate(-10px, 10px) rotate(360deg);
    }
  }
`;

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className="home_page">
      <Blob />
      <Blob2 />
      <Header></Header>
      <Container>
        <Discover>
          <div>
            Joining <b>WEB 3.0</b>
          </div>
          <div>
            taking{" "}
            <Typewriter
              words={["", "Sh"]}
              loop={Infinity}
              typeSpeed={120}
              deleteSpeed={100}
              delaySpeed={5000}
            />
            it{" "}
          </div>
          <div>To next level</div>
          <Start onClick={() => navigate("/signin")}>
            Get Started <img src="./images/arrow.svg" alt="arrow" className="arrow" />
          </Start>
        </Discover>
      </Container>
    </div>
  );
};
export default Homepage;
