import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import styles from './styles.module.css';
import { IconButton } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1>ECOMMERCE APP</h1>
        <p className={styles.desc}>
          En diseño, parte final de la plantilla en la que suele situarse la
          información legal y las opciones para actualizar el perfil o darse de
          baja de la lista.
        </p>
        <div className={styles.socialContainer}>
          <div className={styles.icon}>
            <IconButton
              size='large'
              color='primary'
              // href='https://www.facebook.com/miguelenrique.sacaaccostupa/'
            >
              <FacebookOutlinedIcon fontSize='inherit' />
            </IconButton>
          </div>
          <div className={styles.icon}>
            <IconButton
              size='medium'
              color='secondary'
              // href='https://www.facebook.com/miguelenrique.sacaaccostupa/'
            >
              <InstagramIcon fontSize='inherit' />
            </IconButton>
          </div>
          <div className={styles.icon}>
            <IconButton
              size='medium'
              color='primary'
              // href='https://www.facebook.com/miguelenrique.sacaaccostupa/'
            >
              <TwitterIcon fontSize='inherit' />
            </IconButton>
          </div>
          <div className={styles.icon}>
            <IconButton
              size='medium'
              color='secondary'
              // href='https://www.facebook.com/miguelenrique.sacaaccostupa/'
            >
              <PinterestIcon fontSize='inherit' />
            </IconButton>
          </div>
        </div>
      </div>
      <div className={styles.center}>
        <h3 className={styles.title}>ENLACES DIRECTOS:</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>Home</li>
          <li className={styles.listItem}>Productos</li>
          <li className={styles.listItem}>Acerca de</li>
        </ul>
      </div>
      <div className={styles.right}>
        <h3 className={styles.title}>CONTACTO:</h3>
        <div className={styles.contactItem}>
          <LocationOnIcon style={{ marginRight: '10px' }} /> Cusco - Cusco -
          Perú 82001
        </div>
        <div className={styles.contactItem}>
          <LocalPhoneIcon style={{ marginRight: '10px' }} /> +51 982 786 881
        </div>
        <div className={styles.contactItem}>
          <MailOutlineIcon style={{ marginRight: '10px' }} />
          miguelenrique1805@gmail.com
        </div>
        <img alt='' src='https://i.ibb.co/Qfvn4z6/payment.png' />
      </div>
    </div>
  );
};
