import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Nav } from './components/Nav/Nav';
import { reloadUser } from './redux/actions/actions';
import About from './views/About/About';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import NotFound from './views/NotFound/NotFound';
import SignUp from './views/SignUp/SignUp';
import Subject from './views/Subject/Subject';
import { UserPanel } from './views/UserPanel/UserPanel';
// import Protected from "./views/Protected/Protected";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(reloadUser()); // Carga el usuario al montar la aplicación
	}, [dispatch]);

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
