import '../App.css';
import Logo from './Assets/hoodie.png';
import CartWidget from './CartWidget'

const NavBar2 = () => {
  return(
    <div className="navBar2__fondo">
        <div className='navBar2'>
            <ul className='navBar2__list'>
                    <img className='navBar2__logo' src={Logo} alt="Logo" />
                    <li><a src="#">Hoodies</a></li>
                    <li><a src="#">News</a></li>
                    <li><a src="#">About Us</a></li>
                    <li><a src="#">Contact</a></li>
            </ul>
                    <CartWidget />
        </div>
        <div className='navBar2__nombre--div'><span className='navBar2__nombre'>Prototype</span></div>
    </div>
  );
}

export default NavBar2 