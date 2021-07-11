import styled from 'styled-components/macro';

export const Wrapper = styled.article`
  height: max-content;
  padding: 8px 0 10px 0;
  margin: 0 auto;
  width: 72%;
  min-width: 72%;
  max-width: 935px;
  min-height: auto;
  display: flex;
  justify-content: center;
  z-index: 10;
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 618px;
  width: 454px;
  z-index: 3;
  div {
    position: absolute;
    top: 28px;
    right: 21px;
    bottom: 0px;
    height: 471.9px;
    width: 261px;
    img {
    }
  }
`;

export const FormContainer = styled.div`
  height: 92%;
  margin-top: 20px;
  width: 100%;
`;
