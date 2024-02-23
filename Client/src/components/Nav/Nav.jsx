import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';
import MenuIcon from './DropdownMenuButton/MenuIcon/MenuIcon';
import './Nav.scss';
//import DehazeIcon from '@mui/icons-material/Dehaze';

export const Nav = () => {
	return (
		<header>
			<nav className='nav'>
				<MenuIcon />
				<div className='logo'>
					<Link to='/'>
						<img src={Logo} alt='Logo de la aplicacion' />
					</Link>
				</div>
				<input
					type='text'
					className='searchbar'
					placeholder='¿Qué quieres aprender hoy?'
				/>
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
