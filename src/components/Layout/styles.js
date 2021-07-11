import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  margin: 54px auto 0 auto;
  max-width: 975px;
  width: 69%;
  /* min-width: 850px; */
  display: block;
  height: max-content;
  overflow-y: scroll;
  z-index: 9999;
  padding: 15px 0 0 0;

  @media (max-width: 870px ) {
    margin: 0 auto;
  }

  &::-webkit-scrollbar {
  display: none;
  }

 -ms-overflow-style: none; 
  scrollbar-width: none;
`;

