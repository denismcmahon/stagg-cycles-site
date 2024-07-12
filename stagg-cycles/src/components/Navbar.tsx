import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar: React.FC = () => {
    return (
        <nav className={styles.navbar}>
            <Link href='/'>Home</Link>
            <Link href='/products'>Products</Link>
            <Link href='/brands'>Brands</Link>
            <Link href='/cycle-to-work'>Cycle to Work Scheme</Link>
            <Link href='/bikes'>Bikes</Link>
            <Link href='/about'>About Us</Link>
        </nav>
    );
}

export default Navbar;