import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';
import './Nav.scss';

export const Nav = () => {
	return (
		<header>
			<nav className='nav'>
				<div className='logo'>
					<Link to='/'>
						<img src={Logo} alt='Logo de la aplicacion' />
					</Link>
				</div>
				<div className='nav-enlaces'>
					<Link className='dar-clases' to='/about'>
						Dar clases
					</Link>
					<Link className='conectarse' to='/login'>
						Conectarse
					</Link>
				</div>
			</nav>
		</header>
	);
};
