import { Link } from "react-router-dom";
import styled from "styled-components";
import { BoxContainer } from "./StyledComponents";



const Content = styled.div`
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center; 
    @media screen and (max-width: 600px) {
      height: 90px;
    }
`;
const TitleImg = styled.img`
    width: 380px;
    @media screen and (max-width: 600px) {
      width: 230px;
    }
`;
const TodayDate = styled.div`
    text-align: center;
    width: 320px;
    margin-top: 15px;
    font-weight: 200;
    @media screen and (max-width: 600px) {
      display: none;
    }
    
`;

const Title = () => {
  return (
    <BoxContainer>
      <Content>
      <Link to={"/"}><TitleImg src="/images/title.png"></TitleImg></Link>
      <TodayDate>Tuesday, May 7, 2024</TodayDate>
    </Content>

    </BoxContainer>
  );
};

export default Title;
