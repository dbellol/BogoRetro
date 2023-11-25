import {React, useEffect} from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import BlogCard from '../components/BlogCard';
import Container from '../components/Container'
import {useDispatch, useSelector} from 'react-redux';
import { getAllblogs } from '../features/blogs/blogSlice';
import moment from 'moment';
const Blog = () => {
    const blogStatex = useSelector((state) => state.blog);
    const blogState = blogStatex?.blog?.blog || blogStatex?.blog;
    console.log(blogState);
    const dispatch = useDispatch();
    useEffect(()=>{
        getblogs() ;
    },[]);
    const getblogs=(()=>{
        dispatch(getAllblogs()) ;
    })
  return (
    <>
        <Meta title={"Blogs"}></Meta>
        <BreadCrumb title="Blogs">
        </BreadCrumb>
        <Container class1='blog-wrapper home-wrapper-2 py-5'>
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
                        {
                            Array.isArray(blogState) && blogState?.map((item,index)=>{
                                
                                return(
                                    <div className='col-6 mb-3' key={index}>
                                        <BlogCard id={item?._id} title={item?.title} description={item?.description} image={item?.image[0]?.url} date={moment(item?.createdAt).format('MMMM Do YYYY, h:mm a')}/>
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                </div> 
            </div>


        </Container>
    </>
  )
}

export default Blog