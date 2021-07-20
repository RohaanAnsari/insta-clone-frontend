import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  display: inline-block;

  position: fixed;
  right: 8%;
  bottom: 8%;
  cursor: pointer;
  & .MuiSvgIcon-root {
    font-size: 30px;
  }
`;

export const Container = styled.div`
  width: 350px;
  min-width: 350px;
  max-width: 350px;
  height: max-content;
  background-color: white;
  border-radius: 5px;
  padding-bottom: 3rem;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & .MuiTooltip-tooltip {
    color: red !important;
    background: white;
  }

  h2 {
    margin-top: 3rem;
    font-weight: 600;
    letter-spacing: 0.3px;
    line-height: 20px;
    color: #8e8e8e;
  }
`;

export const Label = styled.div`
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  color: #00000090;
`;

export const Box = styled.div`
  margin-top: 2rem;
  width: 100%;
  height: max-content;
  padding: 10px;
  border: 1px solid #dbdbdb;

  display: flex;
  justify-content: space-between;
`;

export const Text = styled.p`
  font-weight: 600;
  font-size: 14px;
  color: #00000095;
  margin-right: ${({ mr }) => mr || '0px'};
`;
