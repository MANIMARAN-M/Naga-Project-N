import React from 'react'

const TabFive = () => {
  const linksData = [
    {
      name: "Primary link one",
      link: "https://google.com/"
    },
    {
      name: "Primary link two",
      link: "https://google.com/"
    },
    {
      name: "Primary link three",
      link: "https://google.com/"
    },
    {
      name: "Primary link four",
      link: "https://google.com/"
    },
    {
      name: "Primary link five",
      link: "https://google.com/"
    },
    {
      name: "Primary link six",
      link: "https://google.com/"
    },
    {
      name: "Primary link seven",
      link: "https://google.com/"
    },
    {
      name: "Primary link eight",
      link: "https://google.com/"
    },
    {
      name: "Primary link nine",
      link: "https://google.com/"
    },
    {
      name: "Primary link ten",
      link: "https://google.com/"
    }
  ]
  return (
    <section>
      <div>
        <h1 className='subtitle-text mb-3'>Tab Five</h1>
      </div>
      {linksData.map((data, index) => (
        <div key={index} className='linksGroup d-flex align-items-center mb-4'>
          <div>
            <div className='linksCount'><span>{index + 1}</span></div>
          </div>
          <div>
            <div className='ms-3'><a href={data.link} target='_blank' rel="noreferrer" className="link-primary">{data.name}</a></div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default TabFive