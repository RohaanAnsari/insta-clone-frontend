import React from 'react';
import { Wrapper, ImageContainer, FormContainer } from './styles';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const AuthComponents = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        height: '100vh',
        justifyContent: 'center',
      }}
    >
      <Wrapper>
        <ImageContainer>
          <img src="/images/mobiles.png" alt="mobiles" />
          <Carousel
            style={{ display: 'flex' }}
            labels={false}
            showArrows={false}
            showIndicators={false}
            showThumbs={false}
            infiniteLoop={true}
            autoFocus={false}
            autoPlay={true}
            width={282}
          >
            <div>
              <img src="/images/carousel-1.jpg" alt="carousel-1" />
            </div>
            <div>
              <img src="/images/carousel-2.jpg" alt="carousel-2" />
            </div>
            <div>
              <img src="/images/carousel-3.jpg" alt="carousel-2" />
            </div>
          </Carousel>
        </ImageContainer>
        <FormContainer>{children}</FormContainer>
      </Wrapper>
    </div>
  );
};

export default AuthComponents;
