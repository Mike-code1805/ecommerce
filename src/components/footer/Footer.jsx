// import {
//   Facebook,
//   Instagram,
//   MailOutline,
//   Phone,
//   Pinterest,
//   Room,
//   Twitter,
// } from '@material-ui/icons';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import styles from './styles.module.css';
import { IconButton } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
// const Container = styled.div`
//   display: flex;
//   ${mobile({ flexDirection: 'column' })}
// `;

// const Left = styled.div`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   padding: 20px;
// `;

// const Logo = styled.h1``;

// const Desc = styled.p`
//   margin: 20px 0px;
// `;

// const SocialContainer = styled.div`
//   display: flex;
// `;

// const SocialIcon = styled.div`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   color: white;
//   background-color: #${(props) => props.color};
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-right: 20px;
// `;

// const Center = styled.div`
//   flex: 1;
//   padding: 20px;
//   ${mobile({ display: 'none' })}
// `;

// const Title = styled.h3`
//   margin-bottom: 30px;
// `;

// const List = styled.ul`
//   margin: 0;
//   padding: 0;
//   list-style: none;
//   display: flex;
//   flex-wrap: wrap;
// `;

// const ListItem = styled.li`
//   width: 50%;
//   margin-bottom: 10px;
//   cursor: pointer;
// `;

// const Right = styled.div`
//   flex: 1;
//   padding: 20px;
//   ${mobile({ backgroundColor: '#fff8f8' })}
// `;

// const ContactItem = styled.div`
//   margin-bottom: 20px;
//   display: flex;
//   align-items: center;
// `;

// const Payment = styled.img`
//   width: 50%;
// `;

export const Footer = () => {
  // const history = useHistory();

  // const gotoTeddies = () => {
  //   history.push('/products/teddies');
  // };
  // const gotoNecklaces = () => {
  //   history.push('/products/necklaces');
  // };
  // const gotoKeychains = () => {
  //   history.push('/products/keychains');
  // };
  // const gotoHome = () => {
  //   history.push('/');
  // };

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
