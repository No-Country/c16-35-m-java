import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postReserva } from '../../redux/actions/actions';
import './MPButton.scss';

const MPButton = ({ children, title, price, post, quantity = 1 }) => {
	const dispatch = useDispatch();
	const [preferenceId, setpreferenceId] = useState(null);
	const [disabled, setDisabled] = useState(false);
	const createPreference = async () => {
		try {
			//"/create_preference"
			console.log(price);
			const response = await axios.post(
				'http://localhost:3003/MercadoPago/create_preference',
				{
					title: title,
					quantity: quantity,
					price: price,
				},
			);

			const { id } = response.data;
			return id;
		} catch (error) {
			console.log(error);
		}
	};

	const handleBuy = async (post) => {
		setDisabled(true);
		dispatch(postReserva(post));
		const id = await createPreference();
		if (id) {
			setpreferenceId(id);
		}
	};
	initMercadoPago('TEST-361d8a02-0cbf-4000-826d-a5487d4333d5'),
		{
			locale: 'es-AR',
		};
	return (
		<div>
			<button
				className='btn-reservar'
				hidden={disabled}
				onClick={() => handleBuy(post)}
			>
				{children}
			</button>
			{preferenceId && (
				<Wallet initialization={{ preferenceId: preferenceId }} />
			)}
		</div>
	);
};

export default MPButton;
