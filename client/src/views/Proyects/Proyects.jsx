import React, { Component } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from '../../components/NavBar/NavBar'
import styles from './Proyects.module.css'
import Carousel from 'react-bootstrap/Carousel';
import ReactPlayer from 'react-player'
import { Link } from "react-router-dom";

function Proyects() {
    return (
      <div className={styles.container} style={{ height: '100%' }}> 
        <NavBar/>
        {/* <h1 className={styles.title}>Mis Proyectos</h1> */}
        <p className={styles.title}>Estos son algunos de mis proytectos 😎</p>
        <Carousel>
        <Carousel.Item>
        <div>
        <Link className={styles.links} to='https://supermarketshop.vercel.app/home'>
            <h3>SupermarketShop (e-commerce)</h3>
        </Link>
        </div>
        <div className={styles.containerP}>
      <div className={styles.player}>
      <ReactPlayer
          url='https://youtu.be/Dwf0t7uz5cg'
          className='react-player'
          width='900px'
          height='600px'
        />
        </div>
        </div>
        <div className={styles.containerT}>
          <div className={styles.text}>
            <p>Tienda digital, orientada a pequeñas y medianas empresas la cual cuenta con, carrito de compras, panel de administración, registro de usuarios local y de terceros, filtros de información, etc….</p>
            <Link className={styles.links} to='https://supermarketshop.vercel.app/home'>
            <p>Link al proyecto</p>
        </Link>
        <Link className={styles.links} to='https://github.com/alemannc/Super-market-shop'>
            <p>Link repositorio Back</p>
        </Link>
        <Link className={styles.links} to='https://github.com/MatiasIvanM/Super-market-Repo-FrontEnd'>
            <p>Link repositorio Front</p>
        </Link>
            <p>Tecnologias: JavaScript, React, Redux, Express, Sequqlize, PostgreSQL y Sequelize.</p>
            <br />
            </div>
            </div>
        </Carousel.Item>
        <Carousel.Item>
        <div>
        <Link className={styles.links} to='https://github.com/glossada/personalLoans'>
            <h3>Préstamos personales y Balance</h3>
        </Link>
        </div>
        <div className={styles.containerP}>
      <div className={styles.player}>
      <ReactPlayer
          url='https://youtu.be/fizm42GEE14'
          className='react-player'
          width='900px'
          height='600px'
        />
        </div>
        </div>
        <div className={styles.containerT}>
          <div className={styles.text}>
            <p>Aplicación para administrar préstamos personales, balance y aviso de deuda</p>
            <Link className={styles.links} to='https://github.com/glossada/personalLoans'>
            <p>Link al proyecto</p>
        </Link>
            <p>Tecnologias: Java, MySQL.</p>
            <br />
            </div>
            </div>
        </Carousel.Item>
        </Carousel>
        
      </div>
    );
  }
  
  export default Proyects;