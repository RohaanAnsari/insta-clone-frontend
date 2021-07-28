import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  margin: 54px auto 0 auto;
  max-width: 975px;
  width: 69%;
  display: block;
  height: max-content;
  overflow-y: scroll;
  overflow-x: hidden;
  z-index: 9999;
  padding: 15px 0 0 0;
  position: relative;

  @media (max-width: 1400px) {
    min-width: 975px;
    min-width: ${({ oneFour }) => oneFour || '975px'};
  }

  @media (max-width: 1000px) {
    min-width: 600px;
    min-width: ${({ one }) => one || '600px'};
  }

  @media (max-width: 870px) {
    margin: 0 auto;
  }

  @media (max-width: 500px) {
    min-width: 500px;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;
