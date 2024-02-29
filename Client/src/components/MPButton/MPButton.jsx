import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import axios from 'axios';
import { useState } from 'react';

const MPButton = () => {
	const [preferenceId, setpreferenceId] = useState(null);

	const createPreference = async () => {
		try {
			//"/create_preference"
			const response = await axios.post(
				'http://localhost:3001/MercadoPago/create_preference',
				{
					title: 'Clase',
					quantity: 1,
					price: 100,
				},
			);

			const { id } = response.data;
			return id;
		} catch (error) {
			console.log(error);
		}
	};

	const handleBuy = async () => {
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
			<button onClick={handleBuy}></button>
			{preferenceId && (
				<Wallet initialization={{ preferenceId: preferenceId }} />
			)}
		</div>
	);
};

export default MPButton;
