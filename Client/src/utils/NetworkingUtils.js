import axios from "axios";

///despues al dotenv
//*EducationIt es el nombre de Pagina :)
const EducationIt = axios.create({
  baseURL: "https://localhost:8080",
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

export default EducationIt;
