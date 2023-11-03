import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from '../../components/NavBar/NavBar'
import styles from './Landing.module.css'
import image from '../../Images/WhatsApp Image 2023-09-29 at 11.57-PhotoRoom (1)-modified.png'


function Landing() {
  return (
    <div className={styles.container} style={{ height: '100vh' }}> 
      <NavBar/>
      <img className={styles.image} src={image} alt="logo" />
      <h1 className={styles.nombre}>Gabriel Lossada</h1>
      <p className={styles.textSpect}>Full Stack developer | Analista de sistema | Java | JavaScript | React | Redux | Express | PostgreSQL | MySQL | Sequqlize | Nivel de Ingles: C2 Proficient</p>
      <Container>
      <Row className="justify-content-md-center">
        <Col lg="3"><a href="#" className={styles.myButton}>Sobre mi</a></Col>
        <Col lg="3"><a href="#" className={styles.myButton}>Proyectos</a></Col>
      </Row>
    </Container>
    </div>
  );
}

export default Landing;