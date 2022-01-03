import styles from "./header.module.css"
import { Navbar, Container, Nav } from 'react-bootstrap'
import Link from 'next/link'
import { useRouter } from "next/router";



export default function Header() {

    const router = useRouter();
    return (
        <Navbar expand="lg" className={styles.navHeader}>
            <Container fluid className={styles.header}>
                <Link href='/'>
                <a className={styles.headerLogo}> 
                    <img src="./images/logo.png" alt="logo photographe" className={styles.headerImg}></img>
                </a>
                </Link> 
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className={styles.headerMenu}>
                            <Link href='/gallery'>
                                <a className={router.pathname == "/gallery" ? "active" : ""}> 
                                    Galerie
                                </a>
                            </Link>  
                            <Link href='/pricing'>
                                <a className={router.pathname == "/pricing" ? "active" : ""}> 
                                    {`Tarifs / Prestations`}
                                </a>
                            </Link>  
                            <Link href='/contact'>
                                <a className={router.pathname == "/contact" ? "active" : ""}> 
                                    Contact
                                </a>
                            </Link>       
                        </Nav>
                </Navbar.Collapse>  
            </Container>
        </Navbar>

    )
  }