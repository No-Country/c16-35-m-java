import ProfesHome from '../../components/ProfesoresHome/ProfesHome';
import Hero from '../../components/Hero/Hero';
import OpinionesHome from '../../components/OpinionesHome/OpinionesHome';
import HomeDisciplinas from '../../components/HomeDisciplinas/HomeDisciplinas';

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
