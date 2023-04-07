// want to know about more, read through below link
// https://react-bootstrap.netlify.app/components/carousel/#rb-docs-content

import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

interface PropsObj {
    name: string;
    imageSrc: string;
    powerBiLink: string;
}

interface Props {
    carouselData: PropsObj[],
    imageOpenHander: (data: PropsObj) => void
}

const ControlledCarousel = ({ carouselData, imageOpenHander }: Props) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    };

    return (
        <div className='imageSlider'>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                {
                    carouselData.map((data, index) => (
                        <Carousel.Item key={index}>
                            <img
                                onClick={() => imageOpenHander(data)}
                                className="d-block w-100"
                                src={data.imageSrc}
                                alt={`First slide ${index}`}
                            />
                            <Carousel.Caption>
                            <h3>{data.name}</h3>
                            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                        </Carousel.Caption>
                        </Carousel.Item>
                    ))
                }
            </Carousel>
        </div>
    );
}

export default ControlledCarousel;