import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = (props) => {
  const{id, title, description, date, image}=props;
  return (
    <div className='blog-card'>
        <div className='card-image'>
            <img src={image ? image:'imagesblog'} className='img-fluid w-100' alt="blog" style={{ width: '200px', height: '200px', objectFit: 'contain' }}/>
        </div>
        <div className='blog-content'>
            <p className='date'> {date}</p>
            <h5 className='title'>{title}</h5>
            <p className='desc' dangerouslySetInnerHTML={{__html: (description ? description.substr(0,300) : '') + "..."}}></p>
            <Link to={"/blog/"+id} className='button'>LEER MÁS</Link>        
        </div>
    </div>
  )
}

export default BlogCard