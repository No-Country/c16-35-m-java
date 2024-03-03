import ProfesHome from '../../components/ProfesoresHome/ProfesHome';
import Hero from '../../components/Hero/Hero';
import OpinionesHome from '../../components/OpinionesHome/OpinionesHome';
import HomeDisciplinas from '../../components/HomeDisciplinas/HomeDisciplinas';
import axios from 'axios';
import { useEffect } from 'react';

function Home() {
	return (
		<main style={{ backgroundColor: '#f2f3fe' }}>
			<Hero />
			<ProfesHome />
			<OpinionesHome />
			<HomeDisciplinas />
		</main>
	);
}

export default Home;
