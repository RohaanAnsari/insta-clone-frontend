import styled from 'styled-components/macro';

export const Wrapper = styled.section`
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 20px;
  justify-content: flex-start;
`;

export const Hover = styled.span`
  display: none;
  justify-content: center;
  height: 100%;
  width: 100%;
  color: white;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);

  div {
    display: flex;
    width: max-content;
    align-items: center;
    margin-left: 35px;
    p {
      color: whitesmoke;
      margin-left: 10px;
      font-size: 14px;
    }
  }

  span {
    display: flex;
    align-items: center;
    margin-right: 60px;
    p {
      color: whitesmoke;
      margin-left: 10px;
      font-size: 14px;
    }
  }
`;

export const PostContainer = styled.div`
  position: relative;
  cursor: pointer;
  width: 300px;
  min-height: max-content;
  height: 20rem;
  margin-bottom: 10px !important;
  padding-bottom: 10px !important;
  overflow: hidden;
  margin-left: 10px;
  /* background-color: red; */

  &:hover {
    filter: brightness(92%);

    ${Hover} {
      display: flex;
    }
  }
`;

export const Img = styled.div`
  width: 100%;
  height: max-content;
  max-height: 400px;
  img {
    width: 100%;
    height: 20rem;
    object-fit: cover;
  }
`;
