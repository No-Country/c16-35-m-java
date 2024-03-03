import { Route, Routes } from 'react-router-dom';
import { Nav } from './components/Nav/Nav';
import About from './views/About/About';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import NotFound from './views/NotFound/NotFound';
import SignUp from './views/SignUp/SignUp';
import { UserPanel } from './views/UserPanel/UserPanel';
import Subject from './views/Subject/Subject';
import Anuncio from './views/Anuncio/Anuncio';
// import AdminProfile from "./views/Admin/AdminProfile";
// import Protected from "./views/Protected/Protected";

function App() {
	return (
		<>
			<Nav />
			<Routes>
				{/* Routes for everyone */}
				<Route path='/' element={<Home />}></Route>
				<Route path='/login' element={<Login />}></Route>
				<Route path='/signup' element={<SignUp />}></Route>
				<Route path='/about' element={<About />}></Route>
				<Route path='/profile' element={<UserPanel />}></Route>
				<Route path='*' element={<NotFound />}></Route>
				<Route path={`/materia/:materia`} element={<Subject />}></Route>
				<Route path='/anuncio' element={<Anuncio />}></Route>

				{/* admin-only routes */}
				{/* <Route
          path="/adminprofile/:id"
          element={
            <Protected requiredRole={"admin"}>
              <AdminProfile />
            </Protected>
          }
        /> */}
			</Routes>
		</>
	);
}

export default App;
