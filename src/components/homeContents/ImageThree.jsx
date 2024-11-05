import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container, ArticleItem, Block1, Block2, BlockBox, ImageBox, Image, Section, Title1, SubTitle1, Reporter1, Copy, SectionBox, Dot, BackgroundImage, Overlay } from "../StyledComponents";
import VerticalLine from "./VerticalLine";
import HorizontalLine from "./HorizontalLine";

const Mobile = styled.div` 
    display: none;
    @media screen and (max-width: 600px) {
      display: block;
    }
`;

const PC = styled.div` 
    display: block;
    @media screen and (max-width: 600px) {
      display: none;
    }
`;

const ImageThree = ({ sectionId, sectionName, imageArticles, articles }) => {

  return (
    <Container>
      <ArticleItem>
        <Link to={"/section/" + sectionId + "?page=1"}>
          <SectionBox>
            <Section>{sectionName}</Section>
          </SectionBox>
        </Link>
        <BlockBox>
          {imageArticles.map((article, index) => (
            <Block1>
               <Link to={"/article/" + article.articleId} key={index}>
               
              <Title1>{article.title}</Title1>
              <SubTitle1>{article.subtitle}</SubTitle1>
              <ImageBox>

                <BackgroundImage src={process.env.REACT_APP_BACK_URL + "/image?path=" + article.mainImage} />
                <Overlay />
                <Image src={process.env.REACT_APP_BACK_URL + "/image?path=" + article.mainImage}></Image>

              </ImageBox>
              {/* <Copy>{article.copy}</Copy> */}
              </Link>
            </Block1>
          ))}

        </BlockBox>
      </ArticleItem>
    </Container>
  );
};

export default ImageThree;