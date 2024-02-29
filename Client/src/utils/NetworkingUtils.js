import axios from 'axios';

///despues al dotenv
//*Educaflex es el nombre de Pagina :)
const Educaflex = axios.create({
	baseURL: 'https://c16-35-m-java.onrender.com/',
});

//agregar interceptors
//ej.

/* EducationIt.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["x-access-token"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

EducationIt.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      navigate("/");
      store.dispatch(logout());
    }
    return Promise.reject(error);
  }
); */

export default Educaflex;
