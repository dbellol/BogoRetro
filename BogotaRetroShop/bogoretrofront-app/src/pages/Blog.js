import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import BlogCard from '../components/BlogCard';

const Blog = () => {
  return (
    <>
        <Meta title={"Blogs"}></Meta>
        <BreadCrumb title="Blogs">
        </BreadCrumb>
        <div className='blog-wrapper home-wrapper-2 py-5'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-3'>
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>
                                Busca por categorías
                            </h3>
                            <div>
                                <ul className='ps-0'>
                                    <li>
                                        Reliquias
                                    </li>
                                    <li>
                                        Ropa
                                    </li>
                                    <li>
                                        Consolas
                                    </li>
                                    <li>
                                        Cámaras
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-9'>
                        <div className='row'>
                            <div className='col-6 mb-3'>
                                <BlogCard/>
                            </div>
                            <div className='col-6 mb-3'>
                                <BlogCard/>
                            </div>
                            <div className='col-6 mb-3'>
                                <BlogCard/>
                            </div>
                            <div className='col-6 mb-3'>
                                <BlogCard/>
                            </div>
                        </div>
                    </div> 
                </div>

            </div>
        </div>
    </>
  )
}

export default Blog