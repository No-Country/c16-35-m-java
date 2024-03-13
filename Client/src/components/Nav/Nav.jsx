import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';
import DropdownMenuButton from './DropdownMenuButton/DropdownMenuButton';
import './Nav.scss';

const registrarse = () => {
	return (
		<div>
			<div className='nav-enlaces'>
				<Link className='dar-clases' to='/'>
					Dar clases
				</Link>
				<Link className='conectarse' to='/login'>
					Conectarse
				</Link>
			</div>
		</div>
	);
};

export const Nav = () => {
	const user = useSelector((state) => state.user);

	return (
		<header>
			<nav className='nav'>
				<div className='logo'>
					<Link to='/'>
						<img src={Logo} alt='Logo de la aplicación' />
					</Link>
				</div>
				{user.email ? <DropdownMenuButton /> : registrarse()}
			</nav>
		</header>
	);
};
