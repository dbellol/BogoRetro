import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import {HiOutlineArrowLeft} from 'react-icons/hi';
import { Link } from 'react-router-dom';

function SingleBlog() {
  return (
    <>
        <Meta title={"Dynamic Blog Name"}></Meta>
        <BreadCrumb title="Dynamic Blog Name">
        </BreadCrumb>
        <div className='blog-wrapper home-wrapper-2 py-5'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12'>
                    <div className='single-blog-card'>
                            <Link to='/blogs' className='a d-flex align-items-center gap-10'><HiOutlineArrowLeft className='fs-4'></HiOutlineArrowLeft>Volver a blogs</Link>
                            <h3 className='title'> Una hermosa mañana </h3>
                            <img src={process.env.PUBLIC_URL + '/images/blog-1.jpg'} className='img-fluid w-100 my-4' alt="blog"/>
                            <p>Descripcion</p> 
                    </div>
                    </div>
                    
                </div>

            </div>

        </div>
    </>
  )
}

export default SingleBlog