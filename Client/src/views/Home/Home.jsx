import ProfesHome from "../../components/ProfesoresHome/ProfesHome";
import Hero from "../../components/Hero/Hero";
import OpinionesHome from "../../components/OpinionesHome/OpinionesHome";

function Home() {
  return (
    <main style={{backgroundColor:"#f2f3fe"}}>
      <Hero />
      <ProfesHome />
      <OpinionesHome />
    </main>
  );
}

export default Home;
