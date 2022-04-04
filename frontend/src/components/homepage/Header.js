import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Navigation = styled.div`
  cursor: pointer;
  height: 10vh;
  width: 100vw;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: flex-start;
  padding: 0px 10px;
  position: absolute;
  top:0px;
  left:0px;
  background:transparent;
`;
const Logo = styled.div`
  height: 45px;
  width: 54px;
  margin-top: 2px;
  img {
    height: 100%;
    width: 100%;
  }
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 900;
  margin-bottom: 2px;
`;
const Title = styled.span`
  font-size: 30px;
  letter-spacing: 2px;
`;
const Subtitle = styled.span`
  font-size: 10px;
  letter-spacing: 1px;
`;

const Header = () => {
  const Navigate = useNavigate();
  return (
    <Navigation onClick={() => Navigate("/")}>
      <Logo>
        <img src="/images/krapal.png" alt="logo"></img>
      </Logo>

      <Description>
        <Title>K R P A L</Title>
        <Subtitle>WHERE YOU'RE IN CONTROL</Subtitle>
      </Description>
    </Navigation>
  );
};
export default Header;
