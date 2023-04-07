import React, { useState, useEffect } from 'react'
import ControlledCarousel from '../../reusableComponents/imageSlider';
import ImageOne from "../../../assets/images/sliderImags/image-one.jpg";
import ImageTwo from "../../../assets/images/sliderImags/1-5000x3333.jpg";
import ImageThree from "../../../assets/images/sliderImags/4-5000x3333.jpg";
import ImageFour from "../../../assets/images/sliderImags/6-5000x3333.jpg";

export const carouselData = [
  {
    name: "Slider Image open one",
    imageSrc: ImageOne,
    powerBiLink: "https://getbootstrap.com/",
  },
  {
    name: "Slider Image open two",
    imageSrc: ImageTwo,
    powerBiLink: "https://getbootstrap.com/",
  },
  {
    name: "Slider Image open three",
    imageSrc: ImageThree,
    powerBiLink: "https://getbootstrap.com/",
  },
  {
    name: "Slider Image open four",
    imageSrc: ImageFour,
    powerBiLink: "https://getbootstrap.com/",
  },
]

const TabOne = () => {
  const [currentImage, setCurrentImage] = useState<typeof linksData[0]>({} as typeof linksData[0]);
  const [isImageScreeActive, setIsImageScreenActive] = useState(false);
  const linksData = [
    {
      name: "Primary link one",
      imageSrc: ImageOne,
      powerBiLink: "https://getbootstrap.com/",
    },
    {
      name: "Primary link two",
      imageSrc: ImageTwo,
      powerBiLink: "https://google.com/",
    },
    {
      name: "Primary link three",
      imageSrc: ImageOne,
      powerBiLink: "https://google.com/",
    },
    {
      name: "Primary link four",
      imageSrc: ImageOne,
      powerBiLink: "https://google.com/",
    },
    {
      name: "Primary link five",
      imageSrc: ImageOne,
      powerBiLink: "https://google.com/",
    },
    {
      name: "Primary link six",
      imageSrc: ImageOne,
      powerBiLink: "https://google.com/",
    },
    {
      name: "Primary link seven",
      imageSrc: ImageOne,
      powerBiLink: "https://google.com/",
    },
    {
      name: "Primary link eight",
      imageSrc: ImageOne,
      powerBiLink: "https://google.com/",
    },
    {
      name: "Primary link nine",
      imageSrc: ImageOne,
      powerBiLink: "https://google.com/",
    },
    {
      name: "Primary link ten",
      imageSrc: ImageOne,
      powerBiLink: "https://google.com/",
    },
    {
      name: "Primary link eleven",
      imageSrc: ImageOne,
      powerBiLink: "https://google.com/",
    }
  ]


  // useEffect(() => {
  //   console.log("Tabe one");
  //   fetch('https://jsonplaceholder.typicode.com/todos/1')
  //     .then(response => response.json())
  //     .then(json => console.log(json))
  // }, [])

  const imageOpenHander = (imageData: typeof linksData[0]) => {
    setCurrentImage(imageData);
    setIsImageScreenActive(true);
  }

  const handleBack = () => {
    setCurrentImage({} as typeof linksData[0])
    setIsImageScreenActive(false)
  }

  return (
    <section>
      <div className='tabBC'>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><button onClick={handleBack}>Tab One</button></li>
            {currentImage.name && <li className="breadcrumb-item active" aria-current="page">{currentImage.name}</li>}
          </ol>
        </nav>
      </div>
      {!isImageScreeActive ? <>
        <div className='d-flex flex-wrap'>
          {linksData.map((data, index) => (
            <div key={index}>
              <div className='linksGroup d-flex align-items-center mb-4' style={{ minWidth: "200px" }}>
                <div>
                  <div className='linksCount'><span>{index + 1}</span></div>
                </div>
                <div>
                  <div className='ms-3'><button className="link-primary" onClick={() => imageOpenHander(data)}>{data.name}</button></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <ControlledCarousel carouselData={carouselData} imageOpenHander={imageOpenHander} />
      </> :
        <div className='tabInnerView'>
          <div className='TIVImage'>
            {/* <img src={currentImage.imageSrc} className='img-fluid' /> */}
          </div>
          <div className='TIVIframe'>
            <iframe src={currentImage.powerBiLink} ></iframe>
          </div>
        </div>
      }
    </section>
  )
}

export default TabOne