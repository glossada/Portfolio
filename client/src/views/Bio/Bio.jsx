import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from '../../components/NavBar/NavBar'
import styles from './Bio.module.css'
import image from '../../Images/WhatsApp Image 2023-09-29 at 11.57-PhotoRoom (1)-modified.png'


function Bio() {
  return (
    <div className={styles.container} style={{ height: '100vh' }}> 
      <NavBar/>
     
    </div>
  );
}

export default Bio;