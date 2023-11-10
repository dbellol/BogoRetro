import React, { useState } from 'react';
import { Layout, Menu, Button, theme } from 'antd';
import {AiOutlineDashboard, AiOutlineShoppingCart, AiOutlineUser, AiOutlineBgColors, AiOutlinePicLeft, AiOutlinePicRight} from 'react-icons/ai';
import {SiBrandfolder} from 'react-icons/si';
import {BiCategoryAlt} from 'react-icons/bi';
import {FaClipboardList, FaBloggerB} from 'react-icons/fa';
import {ImBlog} from 'react-icons/im';
import {IoIosNotifications} from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
const { Header, Sider, Content } = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" >
          <h2 className='text-white fs-5 text-center py-3 mb-0'>
            <span className='sm-logo'>BR</span>
            <span className='lg-logo'>BogoRetro</span></h2>
        </div>
        
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['']}
          onClick={({key})=>{
            if(key==='signout'){

            }else{
              navigate(key);
            }
          }}
          items={[
            {
              key: '',
              icon: <AiOutlineDashboard className='fs-4' />,
              label: 'Tablero',
            },
            {
              key: 'customers',
              icon: <AiOutlineUser className='fs-4' />,
              label: 'Clientes',
            },
            {
              key: 'catalog',
              icon: <AiOutlineShoppingCart className='fs-4' />,
              label: 'Catálogo',
              children:[{
                key: 'product',
                icon: <AiOutlineShoppingCart className='fs-4' />,
                label: 'Añadir producto',
              },{
                key: 'product-list',
                icon: <AiOutlineShoppingCart className='fs-4' />,
                label: 'Lista de productos',
              },{
                key: 'brand',
                icon: <SiBrandfolder className='fs-4' />,
                label: 'Marcas',
              },{
                key: 'list-brand',
                icon: <SiBrandfolder className='fs-4' />,
                label: 'Lista de marcas',
              },{
                key: 'category',
                icon: <BiCategoryAlt className='fs-4' />,
                label: 'Categorías',
              },{
                key: 'list-category',
                icon: <BiCategoryAlt className='fs-4' />,
                label: 'Lista de categorías',
              },{
                key: 'color',
                icon: <AiOutlineBgColors className='fs-4' />,
                label: 'Colores',
              },{
                key: 'list-color',
                icon: <AiOutlineBgColors className='fs-4' />,
                label: 'Lista de colores',
              }
              ]
            },
            {
              key: 'orders',
              icon: <FaClipboardList className='fs-4' />,
              label: 'Pedidos',
            }, {
              key: 'blog',
              icon: <FaBloggerB className='fs-4' />,
              label: 'Blogs',
              children:[{
                  key: 'blog',
                  icon: <ImBlog className='fs-4' />,
                  label: 'Crear blog',
                },{
                  key: 'blog-list',
                  icon: <AiOutlineShoppingCart className='fs-4' />,
                  label: 'Lista de blogs',
                },{
                  key: 'blog-category',
                  icon: <ImBlog className='fs-4' />,
                  label: 'Crear categoría de blog',
                },{
                  key: 'blog-category-list',
                  icon: <AiOutlineShoppingCart className='fs-4' />,
                  label: 'Lista categorías de blog',
                },

              ]
            },{
              key: 'enquiries',
              icon: <FaClipboardList className='fs-4' />,
              label: 'Información',
            },
           
          ]}
        />
      </Sider>
      <Layout>
        <Header className='d-flex justify-content-between ps-1 pe-5'
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <AiOutlinePicRight /> : <AiOutlinePicLeft />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <div className='d-flex gap-4 align-items-center'>
            <div className='position-relative'><IoIosNotifications className='fs-4'/>
            <span className='badge bg-warning rounded-circle p-1 position-absolute '>3</span>

            </div>
            <div className='d-flex gap-3 align-items-center'>
              <div className=''>
                <img className='diana' src='https://media.licdn.com/dms/image/D4E03AQFC-FG89U8D7A/profile-displayphoto-shrink_200_200/0/1688433777020?e=1701907200&v=beta&t=mVjknZ_wf42xwhkpYCiJtQYAZSdcvGYX9LTWDsopQ7U' alt=''style={{'width': '32px', 'height': '32px'}}/>
                
              </div>
              <div className=''>
                <h5 className='mb-0'>
                  Diana Bello
                </h5>
                <p className='mb-0'>
                  dbellol@unal.edu.co
                </p>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet></Outlet>
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;