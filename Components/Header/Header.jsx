// import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import styles from './Header.module.css'
// import Nav from 'react-bootstrap/Nav';
// import { useSelector } from 'react-redux';
// import Link from 'next/link';

// function Header() {
    

//     return (
//         <header>
//             <Navbar className={styles.navbar}>
//                 <Container>
//                     <Navbar.Brand className={styles.brand} href="/home">TODO SET</Navbar.Brand>
//                     <Link href="/todo" className={styles.link}>Todo</Link>
//                 </Container>

//             </Navbar>
//         </header>
//     )
// }

// export default Header


import React from 'react';
import styles from './Header.module.css'
import { useHistory } from 'react-router-dom';
import { Navbar, Container, Button } from 'react-bootstrap'; // Assuming you are using react-bootstrap
import Link from 'next/link'

function Header() {
  const history = useHistory();

  const handleButtonClick = () => {
    history.push('/todo');
  };
  
  return (
    <Navbar className={styles.navbar}>
      <Container>
        <Navbar.Brand className={styles.brand}>TODO SET</Navbar.Brand>
        <div style={{ backgroundColor: 'grey', padding: '10px' }}>
      <Link href="/todo" style={{ color: 'black', textDecoration: 'none' }}>
        TODO
      </Link>
    </div>
      </Container>
    </Navbar>
  );
}

export default Header;