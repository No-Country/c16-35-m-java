import './MenuIcon.scss'; // Estilos CSS

const MenuIcon = () => {
	return (
		<label htmlFor='check' className='checkbox-label'>
			<input type='checkbox' id='check' className='checkbox-input' />
			<span className='checkbox-span'></span>
			<span className='checkbox-span'></span>
			<span className='checkbox-span'></span>
		</label>
	);
};

export default MenuIcon;
