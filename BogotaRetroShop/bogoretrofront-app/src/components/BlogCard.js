import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
    <div className='col-3'>
        <div className='blog-card'>
            <div className='card-image' children alt="blog">
            <img src={process.env.PUBLIC_URL + '/images/blog-1.jpg'} className='img-fluid' alt="blog"/>
            </div>
            <div className='blog-content'>
                <p className='date'> 1 Oct, 2023 </p>
                    <h5 className='title'> Una hermosa mañana
                    </h5>
                    <p className='desc'>
                        Descripcion
                    </p>
                        <Link to="/" className='button'>LEER MÁS</Link>
                    
            </div>
        </div>
    </div>
  )
}

export default BlogCard