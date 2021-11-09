import React from 'react'
import { Carousel } from 'react-bootstrap'

import carouselImg1 from '../../assets/images/carousel1.jpg'
import carouselImg2 from '../../assets/images/carousel2.jpg'
import carouselImg3 from '../../assets/images/carousel3.jpg'

import './styles.scss'

const HomeCarousel = () => {
  return (
    <section className='home-carousel'>
      <Carousel>
        <Carousel.Item className='home-carousel__item' interval={1000}>
          <img
            className='home-carousel__item-img'
            src={carouselImg1}
            alt='Carousel Img1'
          />
          <Carousel.Caption>
            <h5>台灣好景點</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='home-carousel__item-img'
            src={carouselImg2}
            alt='Carousel Img3'
          />
          <Carousel.Caption>
            <h5>熱門打卡美食</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='home-carousel__item-img'
            src={carouselImg3}
            alt='Carousel Img3'
          />
          <Carousel.Caption>
            <h5>口碑優質飯店</h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  )
}

export default HomeCarousel
