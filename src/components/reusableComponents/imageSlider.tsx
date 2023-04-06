// want to know about more, read through below link
// https://react-bootstrap.netlify.app/components/carousel/#rb-docs-content

import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export interface Props {
    carouselData: Root2[]
}

export interface Root2 {
    id: string
    author: string
    width: number
    height: number
    url: string
    download_url: string
}

const ControlledCarousel = ({ carouselData }: Props) => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    };

    return (
        <div className='imageSlider'>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                {
                    carouselData.map((data, index) => (
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={data.download_url}
                                alt={`First slide ${index}`}
                            />
                            {/* <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption> */}
                        </Carousel.Item>
                    ))
                }
            </Carousel>
        </div>
    );
}

export default ControlledCarousel;