import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from '../../components/NavBar/NavBar'
import styles from './Bio.module.css'
import { DiGithubBadge } from 'react-icons/di';
import { FaLinkedin } from "react-icons/fa"
import { HiMail } from "react-icons/hi";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";


function Bio() {
  return (
    <div className={styles.container} style={{ height: '100%' }}> 
      <NavBar/>
      <div className={styles.containerP}>
      <div className={styles.player}>
      <ReactPlayer
          url='https://youtu.be/7g75xDGU-kQ'
          className='react-player'
          width='100%'
          height='400px'
        />
        </div>
        </div>
        <div className={styles.containerT}>
          <div className={styles.text}>
        <h4>¿Quién soy?</h4>
        <p>Soy un Desarrollador Full Stack y Analista en Sistemas, respaldado por una sólida formación académica y una destacada trayectoria profesional. Mi pasión por la tecnología y la programación me ha llevado a desempeñar roles diversos, brindando soluciones eficientes y confiables en el área informática del Círculo Odontológico de Reconquista, donde gestioné servidores, bases de datos y redes de manera efectiva.</p>
        <h4>¿Por qué yo?</h4>
        <p>Mi experiencia en desarrollo de software, mi mentalidad orientada a resultados, adaptabilidad, trabajo en equipo y habilidades comunicacionales junto con mi eficiente gestión del tiempo y recursos me permiten contribuir de manera significativa a cualquier equipo de desarrollo. Mi enfoque se centra en el desarrollo Front-end/Back-end, destacándome especialmente en el Back-end, y cuento con amplios conocimientos en metodologías ágiles como Scrum, GIT, estructuras de datos, algoritmos, y una variedad de frameworks como React, Redux, Express, y Sequelize.</p>
        <h4>Experiencia</h4>
        <p>He participado en el desarrollo de un e-commerce de alta complejidad, utilizando tecnologías punteras como JavaScript, React, Redux, Express, SQL y Sequelize. Además, tengo experiencia en la creación de aplicaciones de escritorio en entornos cliente-servidor, utilizando Java y MySQL.</p>
        <h4>Nivel de Inglés</h4>
        <p>Cuento con un nivel de Inglés C2 Proficiente, lo que me permite comunicarme de manera fluida y efectiva en un entorno profesional. Link: https://www.efset.org/cert/KeZwRB</p>
        <h4>Si quieres saber más de mí, ¡no dudes en contactarme!</h4>
        <IconContext.Provider value={{ size:'60px'  }}>
          <div className={styles.icons}>
          <Link className={styles.links} to='https://github.com/glossada'>   
        <DiGithubBadge/>
        </Link>
        <Link className={styles.links} to='https://www.linkedin.com/in/glossada/'>   
        <FaLinkedin/>
        </Link>
        <Link className={styles.links} to='mailto:gabriellossada@gmail.com'>
        <HiMail/>
        </Link>
        </div>
        </IconContext.Provider>
        </div>
        </div>
    </div>
  );
}

export default Bio;