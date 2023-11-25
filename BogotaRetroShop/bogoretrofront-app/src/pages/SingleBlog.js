import {React, useEffect} from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import {HiOutlineArrowLeft} from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';
import Container from '../components/Container'
import {useDispatch, useSelector} from 'react-redux';
import { getABlog } from '../features/blogs/blogSlice';

function SingleBlog() {
  const blogState = useSelector((state) => state?.blog?.singleBlog?.updated);
  /*const blogState = blogStatex?.blog?.singleBlog || blogStatex?.blog;*/
  console.log(blogState);
  const location = useLocation();
  const getBlogId = location.pathname.split('/')[2];
  const dispatch = useDispatch();
  useEffect(()=>{
      getblog() ;
  },[]);
  const getblog=(()=>{
      dispatch(getABlog(getBlogId)) ;
  });
  return (
    <>
        <Meta title={blogState?.title}></Meta>
        <BreadCrumb title={blogState?.title}>
        </BreadCrumb>
        <Container class1='blog-wrapper home-wrapper-2 py-5'>

          <div className='row'>
            <div className='col-12'>
              <div className='single-blog-card'>
                      <Link to='/blogs' className='a d-flex align-items-center gap-10'><HiOutlineArrowLeft className='fs-4'></HiOutlineArrowLeft>Volver a blogs</Link>
                      <h3 className='title'> {blogState?.title}</h3>
                      <img src={blogState?.image[0].url ? blogState?.image[0].url: "blog"} className='img-fluid w-100 my-4' alt="blog"/>
                      <p className='desc' dangerouslySetInnerHTML={{__html: blogState?.description}}></p>
              </div>
            </div>
          </div>
        </Container>
    </>
  )
}

export default SingleBlog