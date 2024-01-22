import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './carousel.css';

export default function ControlledCarousel(props) {
  const [index, setIndex] = useState(0);
  const data = props.data;

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={null} >
       {data.map((slide, i) => {
        return <Carousel.Item key={i}>        
          <img className="d-block w-100" src={slide.image} alt="slider" />
          <Carousel.Caption>
            <h3>{slide.caption}</h3>
            <p>{slide.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      })}
    </Carousel>
  );
}