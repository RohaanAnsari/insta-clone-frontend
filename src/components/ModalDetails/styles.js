import styled from 'styled-components/macro';

export const Details = styled.div`
  width: 400px;
  height: max-content;
  background-color: #ffffff;
  border-radius: 12px;

  &:focus-visible,
  &:focus {
    outline: none;
  }
`;

export const DetailsContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 15px 10px;
  width: 100%;
  transition: background-color 0.5s linear;
  cursor: pointer;

  &:hover {
    background-color: #00000010;

    span {
      &:hover {
        font-weight: 800;
      }
    }
  }

  &:focus-visible {
    outline: none;
  }

  &:focus {
    outline: none;
  }

  p,
  span {
    width: 100%;
    text-align: center;
    font-size: 14px;
    line-height: 18px;
    font-weight: 600;
  }

  span {
    color: #ed4956;
  }
`;
