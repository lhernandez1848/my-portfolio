'use client'

import { useState } from 'react';
import styles from './carousel.module.css';
import { useSwipeable } from 'react-swipeable';

export default function Carousel(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselFrames = props.frames;

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = carouselFrames.length - 1;
    } else if (newIndex >= carouselFrames.length) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1)
  });

  return (
    <div className={styles.carousel} {...handlers}>
      <div className={styles.carouselFramesContainer} style={{ transform: `translateX(-${activeIndex * 100}%)` }} >
        {carouselFrames.map((element, index) => {
            return <div className={styles.carouselFrame} key={"carousel-frame-" + index}>{element}</div>
          })
        }
      </div>
      <div className={styles.carouselHeaderMarkers}>
        {carouselFrames.map((element, index) => {
            return <span className={styles.carouselMarker} key={"carousel-marker-" + index} onClick={() => updateIndex(index)}
              id={index === activeIndex ? styles.carouselActiveMarker : styles.carouselInactiveMarker}></span>
          })
        }
      </div>
    </div>
  )
}