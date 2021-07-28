import React from 'react';
import './styles.css';
import styled from 'styled-components';

const Loader = ({ top, left, right }) => {
  return (
    <>
      <Position top={top} left={left} right={right}>
        <div className="blockG" id="rotateG_01"></div>
        <div className="blockG" id="rotateG_02"></div>
        <div className="blockG" id="rotateG_03"></div>
        <div className="blockG" id="rotateG_04"></div>
        <div className="blockG" id="rotateG_05"></div>
        <div className="blockG" id="rotateG_06"></div>
        <div className="blockG" id="rotateG_07"></div>
        <div className="blockG" id="rotateG_08"></div>
      </Position>
    </>
  );
};

export default Loader;

export const Position = styled.div`
  position: relative;
  top: ${({ top }) => top || '0%'};
  left: ${({ left }) => left || '-8rem'};
  right: ${({ right }) => right || '0px'};
  width: ${({ width }) => width || '50px'};
  height: ${({ height }) => height || '60px'};
  margin: 15px auto;
`;
