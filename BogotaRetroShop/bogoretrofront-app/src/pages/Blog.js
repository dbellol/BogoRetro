import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';

const Blog = () => {
  return (
    <>
        <Meta title={"Blogs"}></Meta>
        <BreadCrumb title="Blogs">
        </BreadCrumb>
        <div className='blog-wrapper home-wrapper-2 py-5'>
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
                    
                </div> 
            </div>

        </div>
    </>
  )
}

export default Blog