import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DropdownMenuButton.scss';

const DropdownMenuButton = () => {
	const navigate = useNavigate();
	const [checked, setChecked] = useState(false);

	const handleCheckboxChange = () => {
		setChecked((prevChecked) => !prevChecked);
	};

	const handleDropdown = (type) => {
		setChecked(false);
		switch (type) {
			case 'Miperfil': {
				navigate('/profile');
				return;
			}
			case 'CrearAviso': {
				navigate('/');
				return;
			}
			case 'Salir': {
				navigate('/');
				return;
			}
			default:
				return {};
		}
	};

	return (
		<div className={`mainContainer ${checked ? 'clicked' : ''}`}>
			<label htmlFor='check' className='checkbox-label'>
				<input
					type='checkbox'
					id='check'
					className='checkbox-input'
					checked={checked}
					onChange={handleCheckboxChange}
				/>
				<span className='checkbox-span'></span>
				<span className='checkbox-span'></span>
				<span className='checkbox-span'></span>
			</label>
			<AccountCircleIcon fontSize='large' />
			{checked && (
				<div className='dropdown'>
					{/* Aquí puedes poner tu contenido de dropdown */}
					<ul>
						<li onClick={() => handleDropdown('Miperfil')}>Mi perfil</li>
						<li onClick={() => handleDropdown('CrearAviso')}>Crea un aviso</li>
						<li onClick={() => handleDropdown('Salir')}>Salir de mi cuenta</li>
					</ul>
				</div>
			)}
		</div>
	);
};

export default DropdownMenuButton;
