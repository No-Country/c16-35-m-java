import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';
import MPButton from '../MPButton/MPButton';
import DropdownMenuButton from './DropdownMenuButton/DropdownMenuButton';
import './Nav.scss';

const registrarse = () => {
	return (
		<div>
			<div className='nav-enlaces'>
				<Link className='dar-clases' to='/about'>
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
				<MPButton />
				<div className='logo'>
					<Link to='/'>
						<img src={Logo} alt='Logo de la aplicación' />
					</Link>
				</div>
				<input
					type='text'
					className='searchbar'
					placeholder='¿Qué quieres aprender hoy?'
				/>
				{user.email ? <DropdownMenuButton /> : registrarse()}
			</nav>
		</header>
	);
};
