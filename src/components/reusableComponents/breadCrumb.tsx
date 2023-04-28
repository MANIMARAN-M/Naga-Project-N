import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  link: string;
  firstName: string;
  secondName: string;
}

const BreadCrumb = (props: Props) => {
  return (
    <div className='tabBC'>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to={props.link}>{props.firstName}</Link></li>
          <li className="breadcrumb-item active" aria-current="page">{props.secondName}</li>
        </ol>
      </nav>
    </div>
  )
}

export default BreadCrumb