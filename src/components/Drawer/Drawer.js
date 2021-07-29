import React from 'react';
import styled from 'styled-components';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

export default function Drawer({
  children,
  open,
  onOpen,
  onClose,
  width,
  height,
}) {
  return (
    <div>
      <>
        <SwipeableDrawer
          anchor="right"
          open={open}
          onClose={onClose}
          onOpen={onOpen}
          style={{ zIndex: '99999' }}
        >
          <Wrapper width={width} height={height}>
            {children}
          </Wrapper>
        </SwipeableDrawer>
      </>
    </div>
  );
}

export const Wrapper = styled.div`
  width: ${({ width }) => width || 'inherit'};
  height: ${({ height }) => height || 'inherit'};
`;
