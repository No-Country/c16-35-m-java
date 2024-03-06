import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Nav } from './components/Nav/Nav';
import { reloadUser } from './redux/actions/actions';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import About from './views/About/About';
import Anuncio from './views/Anuncio/Anuncio';
import Calendary from './views/Calendary/Calendary';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import NotFound from './views/NotFound/NotFound';
import SignUp from './views/SignUp/SignUp';
import Subject from './views/Subject/Subject';
import TeacherPanel from './views/TeacherPanel/TeacherPanel';
import UserPanel from './views/UserPanel/UserPanel';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(reloadUser());
	}, [dispatch]);

	return (
		<>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
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
					<Route path='/crear-anuncio' element={<Anuncio />}></Route>
					<Route path={`/calendario/:id`} element={<Calendary />}></Route>
					<Route
						path={`/teacher-panel/:materia/:id`}
						element={<TeacherPanel />}
					></Route>

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
			</LocalizationProvider>
		</>
	);
}

export default App;
