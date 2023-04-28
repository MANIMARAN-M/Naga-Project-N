import React from 'react'
import { Link } from 'react-router-dom'

const TabTwo = () => {
  const linksData = [
    {
      name: "Primary link one",
      link: "list-view"
    },
    {
      name: "Primary link two",
      link: "update-view"
    },
    // {
    //   name: "Primary link three",
    //   link: "https://google.com/"
    // },
    // {
    //   name: "Primary link four",
    //   link: "https://google.com/"
    // },
    // {
    //   name: "Primary link five",
    //   link: "https://google.com/"
    // },
    // {
    //   name: "Primary link six",
    //   link: "https://google.com/"
    // },
    // {
    //   name: "Primary link seven",
    //   link: "https://google.com/"
    // },
    // {
    //   name: "Primary link eight",
    //   link: "https://google.com/"
    // },
    // {
    //   name: "Primary link nine",
    //   link: "https://google.com/"
    // }
  ]
  return (
    <section>
      <div>
        <h1 className='subtitle-text mb-3'>Tab Two</h1>
      </div>
      {linksData.map((data, index) => (
        <div key={index} className='linksGroup d-flex align-items-center mb-4'>
          <div>
            <div className='linksCount'><span>{index + 1}</span></div>
          </div>
          <div>
            <div className='ms-3'><Link to={data.link} className="link-primary">{data.name}</Link></div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default TabTwo