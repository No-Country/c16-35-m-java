package com.c1635mjava.Tuprofeenlinea;

import com.c1635mjava.Tuprofeenlinea.models.*;
import com.c1635mjava.Tuprofeenlinea.repository.CalendaryRepository;
import com.c1635mjava.Tuprofeenlinea.repository.ClientRepository;
import com.c1635mjava.Tuprofeenlinea.repository.ReservationRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.io.File;
import java.time.LocalDate;
import java.time.LocalDateTime;

@SpringBootApplication
public class TuprofeenlineaApplication {

	public static void main(String[] args) {
		SpringApplication.run(TuprofeenlineaApplication.class, args);
	}
	@Bean
	public CommandLineRunner dataLoader(ClientRepository clientRepository, CalendaryRepository calendaryRepository, ReservationRepository reservationRepository, PasswordEncoder passwordEncoder) {
		return args -> {
//			// Crear algunos clientes de ejemplo al iniciar la aplicación
//			Client student50 = new Client();
//			student50.setName("ProfeHard");
//			student50.setEmail("ProfeHard@gmail.com");
//			student50.setPassword(passwordEncoder.encode("ProfeHard1"));
//			student50.setRole(String.valueOf(Role.TEACHER));
//
//			clientRepository.save(student50);
//
//			// Guardar el cliente en la base de datos
//			Client savedStudent50 = clientRepository.save(student50);
//
//			// Crear la ruta de carga única para el cliente
//			String uploadFolderPath = "/uploads/profesor1";
//			String clientUploadFolder = uploadFolderPath + "client_" + savedStudent50.getId() + "/";
//
//			// Aquí puedes crear la carpeta en el sistema de archivos si no existe
//			File clientUploadDirectory = new File(clientUploadFolder);
//			if (!clientUploadDirectory.exists()) {
//				clientUploadDirectory.mkdirs(); // Crear la carpeta si no existe
//			}
//
//			// Guardar la ruta de carga en el cliente para su posterior referencia
//			savedStudent50.setImagePath(clientUploadFolder); // Asignar la ruta de carga al campo image_path
//			clientRepository.save(savedStudent50);
//
//			Client teacher1 = new Client();
//			teacher1.setName("Profesor 1");
//			teacher1.setEmail("profesor1@example.com");
//			teacher1.setPassword(passwordEncoder.encode("password1"));
//			teacher1.setRole(String.valueOf(Role.TEACHER));
//			clientRepository.save(teacher1);
//
//			// Crear algunos calendarios de ejemplo
//			Calendary calendary1 = new Calendary();
//			calendary1.setSubject("matematica");
//			calendary1.setStartDate(LocalDate.now());
//			calendary1.setEndDate(LocalDate.now().plusMonths(3));
//			calendary1.setStartHour(8);
//			calendary1.setEndHour(10);
//			calendary1.setDescriptionCurse("Curso de matemáticas básicas");
//			calendary1.setPrice(50);
//			calendary1.setTeacher(teacher1);
//
//			calendaryRepository.save(calendary1);
//
//			Calendary calendary2 = new Calendary();
//			calendary2.setSubject("fisica");
//			calendary2.setStartDate(LocalDate.now());
//			calendary2.setEndDate(LocalDate.now().plusMonths(3));
//			calendary2.setStartHour(10);
//			calendary2.setEndHour(12);
//			calendary2.setDescriptionCurse("Curso de física avanzada");
//			calendary2.setPrice(60);
//			calendary2.setTeacher(student50);
//			calendaryRepository.save(calendary2);
//
//			// Crear una reserva de ejemplo
//			Reservation reservation = new Reservation();
//			reservation.setDateAndHour(LocalDateTime.now().plusDays(2));
//			reservation.setStudent(student50);
//			reservation.setCalendary(calendary1);
//			reservationRepository.save(reservation);
//
//			// Obtener la fecha actual
//			LocalDate currentDate = LocalDate.now();
//			Reservation finishedReservation = new Reservation();
//			finishedReservation.setDateAndHour(currentDate.minusWeeks(1).atStartOfDay()); // Fecha pasada
//			finishedReservation.setStudent(student50); // Cliente que realizó la reserva
//			finishedReservation.setCalendary(calendary1); // Calendario asociado a la reserva
//			reservationRepository.save(finishedReservation);
//




			// Profesores de matemáticas
			Client mathTeacher1 = new Client();
			mathTeacher1.setName("Maria Jose");
			mathTeacher1.setLastname("Jose");
			mathTeacher1.setEmail("mariajose@gmail.com");
			mathTeacher1.setPassword(passwordEncoder.encode("password1"));
			mathTeacher1.setRole(String.valueOf(Role.TEACHER));
			mathTeacher1.setDescriptionTeacher("Profesora de matemática de todos lo niveles. Ingreso a escuelas secundarias y universidades. \n" +
					"  Enseño métodos eficaces con clases dinámicas y pizarra digital.");
			mathTeacher1.setDescriptionBiography("Me llamo Maria Jose, tengo 36 años, soy de Rosario, Santa Fe. Me recibi de Ingeniera en Sistemas en el año 2015.\n" +
					"   Me encanta enseñar y poder brindar mi experiencia adquirida.\n" +
					"   Trato de transmitir confianza, que el estudiante quede satisfecho en su aprendizaje.");
			mathTeacher1.setImagePath("https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
			clientRepository.save(mathTeacher1);

			Calendary mathCalendary1 = new Calendary();
			mathCalendary1.setSubject("matematica");
			mathCalendary1.setStartDate(LocalDate.now());
			mathCalendary1.setEndDate(LocalDate.now().plusMonths(3));
			mathCalendary1.setStartHour(8);
			mathCalendary1.setEndHour(18);
			mathCalendary1.setDescriptionCurse("Mis clases se adaptan al ritmo de aprendizaje de cada estudiante, enfocándome en reforzar conceptos clave y proporcionar ejemplos prácticos. Utilizo métodos didácticos, ejercicios y recursos digitales para hacer que el aprendizaje sea efectivo y atractivo. Tengo experiencia en la industria y en la enseñanza, con horarios flexibles.");
			mathCalendary1.setPrice(5500);
			mathCalendary1.setTeacher(mathTeacher1);
			calendaryRepository.save(mathCalendary1);


			Client mathTeacher2 = new Client();
			mathTeacher2.setName("Pedro");
			mathTeacher2.setLastname("Martinez");
			mathTeacher2.setEmail("pedromatinez@gmail.com");
			mathTeacher2.setPassword(passwordEncoder.encode("password2"));
			mathTeacher2.setRole(String.valueOf(Role.TEACHER));
			mathTeacher2.setDescriptionTeacher("Ingeniero Quimico ofrece clases de Matematica, Fisica, Quimica a estudiantes primarios, secundarios y universitarios.");
			mathTeacher2.setDescriptionBiography("Mi nombre es Pedro Martinez y soy Ingeniero Quimico, graduado en la Universidad Nacional de Cordoba.\n" +
					"   Vivo en Nueva Córdoba pero soy proveniente de General Levalle, un pueblo al sur de Córdoba.");
			mathTeacher2.setImagePath("https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
			clientRepository.save(mathTeacher2);

			Calendary mathCalendary2 = new Calendary();
			mathCalendary2.setSubject("matematica");
			mathCalendary2.setStartDate(LocalDate.now());
			mathCalendary2.setEndDate(LocalDate.now().plusMonths(3));
			mathCalendary2.setStartHour(10);
			mathCalendary2.setEndHour(16);
			mathCalendary2.setDescriptionCurse("Mi principal objetivo es que el alumno termine la clase con los objetivos, propuestos antes de esta, alcanzados. \n" +
					"Para eso me gusta tomar una metodología de clases en la cual busco que el alumno pueda ir entendiendo de principio a fin los temas abordados.");
			mathCalendary2.setPrice(6000);
			mathCalendary2.setTeacher(mathTeacher2); // Asignar el profesor correspondiente
			calendaryRepository.save(mathCalendary2);

			Client mathTeacher3 = new Client();
			mathTeacher3.setName("Pilar");
		    mathTeacher3.setLastname("Sosa");
			mathTeacher3.setEmail("pilarsosa@gmail.com");
			mathTeacher3.setPassword(passwordEncoder.encode("password3"));
			mathTeacher3.setRole(String.valueOf(Role.TEACHER));
			mathTeacher3.setDescriptionTeacher("Tengo más de 10 años de experiencia como profesora particular, me especializo en ciencias exactas. \n" +
					"   Brindando un abordaje simple y divertido a las materias que a veces son un poco complicadas.  ");
			mathTeacher3.setDescriptionBiography("Son todos bienvenidos a traerme sus consultas dudas, yo las resolveré; voy a ir guiándolos a el mejor método de aprendizaje a través de la psicología\n" +
					"  y conocimientos básicos a la hora de estudiar en cualquier asignatura, saludos Pilar.");
			mathTeacher3.setImagePath("https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
			clientRepository.save(mathTeacher3);

			Calendary mathCalendary3 = new Calendary();
			mathCalendary3.setSubject("matematica");
			mathCalendary3.setStartDate(LocalDate.now());
			mathCalendary3.setEndDate(LocalDate.now().plusMonths(3));
			mathCalendary3.setStartHour(10);
			mathCalendary3.setEndHour(20);
			mathCalendary3.setDescriptionCurse("Mis clases seran virtuales, enseño primaria y secundaria en todas las asignaturas.\n" +
					"Mi enseñanza se trata de que aprendan de la mejor manera posible, fácilmente que aprendan a razonar por si solos, y enseñar con mucha pasión.");
			mathCalendary3.setPrice(6000);
			mathCalendary3.setTeacher(mathTeacher3);
			calendaryRepository.save(mathCalendary3);

			Client mathTeacher4 = new Client();
			mathTeacher4.setName("Lucía");
			mathTeacher4.setEmail("lucia@example.com");
			mathTeacher4.setPassword(passwordEncoder.encode("password4"));
			mathTeacher4.setRole(String.valueOf(Role.TEACHER));
			mathTeacher4.setDescriptionTeacher("");
			mathTeacher4.setDescriptionBiography("");
			clientRepository.save(mathTeacher4);

			Calendary mathCalendary4 = new Calendary();
			mathCalendary4.setSubject("matematica");
			mathCalendary4.setStartDate(LocalDate.now());
			mathCalendary4.setEndDate(LocalDate.now().plusMonths(3));
			mathCalendary4.setStartHour(06);
			mathCalendary4.setEndHour(12);
			mathCalendary4.setDescriptionCurse("Curso de matemáticas avanzadas");
			mathCalendary4.setPrice(7000);
			mathCalendary4.setTeacher(mathTeacher4);
			calendaryRepository.save(mathCalendary4);


			Client mathTeacher5 = new Client();
			mathTeacher5.setName("Matías");
			mathTeacher5.setEmail("matias@example.com");
			mathTeacher5.setPassword(passwordEncoder.encode("password5"));
			mathTeacher5.setRole(String.valueOf(Role.TEACHER));
			mathTeacher5.setDescriptionTeacher("");
			mathTeacher5.setDescriptionBiography("");
			clientRepository.save(mathTeacher5);

			Calendary mathCalendary5 = new Calendary();
			mathCalendary5.setSubject("matematica");
			mathCalendary5.setStartDate(LocalDate.now());
			mathCalendary5.setEndDate(LocalDate.now().plusMonths(3));
			mathCalendary5.setStartHour(20);
			mathCalendary5.setEndHour(24);
			mathCalendary5.setDescriptionCurse("Curso de matemáticas avanzadas");
			mathCalendary5.setPrice(5000);
			mathCalendary5.setTeacher(mathTeacher5);
			calendaryRepository.save(mathCalendary5);


			Client mathTeacher6 = new Client();
			mathTeacher6.setName("Nicolás");
			mathTeacher6.setEmail("nicolas@example.com");
			mathTeacher6.setPassword(passwordEncoder.encode("password6"));
			mathTeacher6.setRole(String.valueOf(Role.TEACHER));
			mathTeacher6.setDescriptionTeacher("");
			mathTeacher6.setDescriptionBiography("");
			clientRepository.save(mathTeacher6);

			Calendary mathCalendary6 = new Calendary();
			mathCalendary6.setSubject("matematica");
			mathCalendary6.setStartDate(LocalDate.now());
			mathCalendary6.setEndDate(LocalDate.now().plusMonths(3));
			mathCalendary6.setStartHour(10);
			mathCalendary6.setEndHour(18);
			mathCalendary6.setDescriptionCurse("Curso de matemáticas avanzadas");
			mathCalendary6.setPrice(5000);
			mathCalendary6.setTeacher(mathTeacher6);
			calendaryRepository.save(mathCalendary6);

// Profesores de inglés

			Client englishTeacher1 = new Client();
			englishTeacher1.setName("Mariela");
			englishTeacher1.setLastname("Jardin");
			englishTeacher1.setEmail("marielajardin@gmail.com");
			englishTeacher1.setPassword(passwordEncoder.encode("password7"));
			englishTeacher1.setRole(String.valueOf(Role.TEACHER));
			englishTeacher1.setDescriptionTeacher("Domina el Inglés Empresarial y de Comunicación con una Experta Traductora");
			englishTeacher1.setDescriptionBiography("Mi nombre es Mariela y soy profesora de inglés freelance. Me apasiona compartir mis conocimientos del idioma, así como también aprender algo diferente de cada estudiante.");
			englishTeacher1.setImagePath("https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
			clientRepository.save(englishTeacher1);

			Calendary englishCalendary1 = new Calendary();
			englishCalendary1.setSubject("ingles");
			englishCalendary1.setStartDate(LocalDate.now());
			englishCalendary1.setEndDate(LocalDate.now().plusMonths(3));
			englishCalendary1.setStartHour(10);
			englishCalendary1.setEndHour(18);
			englishCalendary1.setDescriptionCurse("Mi método de enseñanza está basado en la práctica del idioma. Destaco la importancia del uso del inglés en la comunicación empresarial y cotidiana. Parto de la práctica y la importancia de la comunicación como factor fundamental en mis clases");
			englishCalendary1.setPrice(7000);
			englishCalendary1.setTeacher(englishTeacher1);
			calendaryRepository.save(englishCalendary1);


			Client englishTeacher2 = new Client();
			englishTeacher2.setName("Jorge");
			englishTeacher2.setLastname("Araya");
			englishTeacher2.setEmail("jorgearaya@gmail.com");
			englishTeacher2.setPassword(passwordEncoder.encode("password8"));
			englishTeacher2.setRole(String.valueOf(Role.TEACHER));
			englishTeacher2.setDescriptionTeacher("Sumérgete en el Inglés con Clases Adaptadas a tus Necesidades y Preferencias");
			englishTeacher2.setDescriptionBiography("Poseo experiencia en todos los niveles con niños, jóvenes y adultos. En todos estos años he enseñado tanto en forma privada, en distintos institutos y también he dado clases online a través de plataformas virtuales. Ofrezco clases de iniciación en el idioma, donde puedes aprender inglés desde cero, así como clases de conversación y profundización en fluidez, pronunciación y vocabulario.");
			englishTeacher2.setImagePath("https://images.unsplash.com/photo-1622626426572-c268eb006092?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
			clientRepository.save(englishTeacher2);

			Calendary englishCalendary2 = new Calendary();
			englishCalendary2.setSubject("ingles");
			englishCalendary2.setStartDate(LocalDate.now());
			englishCalendary2.setEndDate(LocalDate.now().plusMonths(3));
			englishCalendary2.setStartHour(8);
			englishCalendary2.setEndHour(12);
			englishCalendary2.setDescriptionCurse("Aprenderás con clases que se ajusten a ti, a tu ritmo y sin salir de tu casa. Te enseñaré inglés de forma efectiva, dinámica y fácil, haciendo que el aprendizaje sea rápido y divertido. El idioma inglés no es difícil de aprender si se explica adecuadamente, y la constancia es la clave del éxito. Además, trabajaremos en la comprensión de lecturas, audios y videos reconocidos por Cambridge.");
			englishCalendary2.setPrice(8000);
			englishCalendary2.setTeacher(englishTeacher2);
			calendaryRepository.save(englishCalendary2);


			Client englishTeacher3 = new Client();
			englishTeacher3.setName("Valeria");
			englishTeacher3.setLastname("Monserrat");
			englishTeacher3.setEmail("valeriamonserrat@gmail.com");
			englishTeacher3.setPassword(passwordEncoder.encode("password9"));
			englishTeacher3.setRole(String.valueOf(Role.TEACHER));
			englishTeacher3.setDescriptionTeacher("Aprende Inglés de Manera Dinámica y Divertida con un Tutor Bilingüe");
			englishTeacher3.setDescriptionBiography("Soy estudiante y tengo contacto directo con el idioma desde los 6 años. Doy clases particulares a niños, adolescentes y adultos. Soy experta en pronunciación británica, pero también hablo inglés americano.");
			englishTeacher3.setImagePath("https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
			clientRepository.save(englishTeacher3);

			Calendary englishCalendary3 = new Calendary();
			englishCalendary3.setSubject("ingles");
			englishCalendary3.setStartDate(LocalDate.now());
			englishCalendary3.setEndDate(LocalDate.now().plusMonths(3));
			englishCalendary3.setStartHour(18);
			englishCalendary3.setEndHour(24);
			englishCalendary3.setDescriptionCurse("En nuestras clases online, tú eliges cómo serán tus clases, ya que son adaptadas a tus necesidades. Puedes programarlas las veces que quieras.");
			englishCalendary3.setPrice(10000);
			englishCalendary3.setTeacher(englishTeacher3);
			calendaryRepository.save(englishCalendary3);



			Client englishTeacher4 = new Client();
			englishTeacher4.setName("Florencia");
			englishTeacher4.setEmail("florencia@example.com");
			englishTeacher4.setPassword(passwordEncoder.encode("password10"));
			englishTeacher4.setRole(String.valueOf(Role.TEACHER));
			englishTeacher4.setDescriptionTeacher("");
			englishTeacher4.setDescriptionBiography("");
			clientRepository.save(englishTeacher4);


			Calendary englishCalendary4 = new Calendary();
			englishCalendary4.setSubject("ingles");
			englishCalendary4.setStartDate(LocalDate.now());
			englishCalendary4.setEndDate(LocalDate.now().plusMonths(3));
			englishCalendary4.setStartHour(6);
			englishCalendary4.setEndHour(12);
			englishCalendary4.setDescriptionCurse("Curso de inglés básico");
			englishCalendary4.setPrice(6000);
			englishCalendary4.setTeacher(englishTeacher4);
			calendaryRepository.save(englishCalendary4);


			Client englishTeacher5 = new Client();
			englishTeacher5.setName("Maximiliano");
			englishTeacher5.setEmail("maximiliano@example.com");
			englishTeacher5.setPassword(passwordEncoder.encode("password11"));
			englishTeacher5.setRole(String.valueOf(Role.TEACHER));
            englishTeacher5.setDescriptionTeacher("");
	        englishTeacher5.setDescriptionBiography("");
			clientRepository.save(englishTeacher5);

			Calendary englishCalendary5 = new Calendary();
			englishCalendary5.setSubject("ingles");
			englishCalendary5.setStartDate(LocalDate.now());
			englishCalendary5.setEndDate(LocalDate.now().plusMonths(3));
			englishCalendary5.setStartHour(6);
			englishCalendary5.setEndHour(10);
			englishCalendary5.setDescriptionCurse("Curso de inglés básico");
			englishCalendary5.setPrice(6000);
			englishCalendary5.setTeacher(englishTeacher5);
			calendaryRepository.save(englishCalendary5);

			Client englishTeacher6 = new Client();
			englishTeacher6.setName("Valentina");
			englishTeacher6.setEmail("valentina@example.com");
			englishTeacher6.setPassword(passwordEncoder.encode("password12"));
			englishTeacher6.setRole(String.valueOf(Role.TEACHER));
			englishTeacher6.setDescriptionTeacher("");
			englishTeacher6.setDescriptionBiography("");
			clientRepository.save(englishTeacher6);


			Calendary englishCalendary6 = new Calendary();
			englishCalendary6.setSubject("ingles");
			englishCalendary6.setStartDate(LocalDate.now());
			englishCalendary6.setEndDate(LocalDate.now().plusMonths(3));
			englishCalendary6.setStartHour(18);
			englishCalendary6.setEndHour(22);
			englishCalendary6.setDescriptionCurse("Curso de inglés básico");
			englishCalendary6.setPrice(6000);
			englishCalendary6.setTeacher(englishTeacher6);
			calendaryRepository.save(englishCalendary6);






			// Profesores de guitarra

			Client guitarTeacher1 = new Client();
			guitarTeacher1.setName("Justo");
			guitarTeacher1.setLastname("Marengo");
			guitarTeacher1.setEmail("justomarengo@gmail.com");
			guitarTeacher1.setPassword(passwordEncoder.encode("password13"));
			guitarTeacher1.setRole(String.valueOf(Role.TEACHER));
			guitarTeacher1.setDescriptionTeacher("Explora la Guitarra con un Maestro Egresado de la Escuela de Música");
			guitarTeacher1.setDescriptionBiography("Soy maestro egresado de la Escuela de música 'Juan Pedro Esnaola', con especialidad en guitarra. He estudiado durante 7 años, 6 de ellos con la profesora Silvia Fernández. Además, he tomado clases particulares desde los 11 años con varios profesores destacados en el campo de la música.");
			guitarTeacher1.setImagePath("https://images.unsplash.com/photo-1671776616894-27b0ae001fcc?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
			clientRepository.save(guitarTeacher1);

			Calendary guitarCalendary1 = new Calendary();
			guitarCalendary1.setSubject("guitarra");
			guitarCalendary1.setStartDate(LocalDate.now());
			guitarCalendary1.setEndDate(LocalDate.now().plusMonths(3));
			guitarCalendary1.setStartHour(6);
			guitarCalendary1.setEndHour(18);
			guitarCalendary1.setDescriptionCurse("Ofrezco la primera clase sin cargo para que tengas la oportunidad de consultarme y conocernos. Mi método de enseñanza no es lineal; adapto las herramientas según tus intereses, ya sea aprender desde cero, mejorar la técnica, armar tus canciones, o profundizar en la teoría musical. Toco y escucho una amplia variedad de géneros musicales, y enseño tanto guitarra criolla, acústica como eléctrica.");
			guitarCalendary1.setPrice(7000);
			guitarCalendary1.setTeacher(guitarTeacher1);
			calendaryRepository.save(guitarCalendary1);


			Client guitarTeacher2 = new Client();
			guitarTeacher2.setName("Cecilia");
			guitarTeacher2.setLastname("Gutierrez");
			guitarTeacher2.setEmail("ceciliagutierrez@gmail.com");
			guitarTeacher2.setPassword(passwordEncoder.encode("password14"));
			guitarTeacher2.setRole(String.valueOf(Role.TEACHER));
			guitarTeacher2.setDescriptionTeacher("Descubre el Arte de la Guitarra con una Cantautora y Compositora Experimentada");
			guitarTeacher2.setDescriptionBiography("Soy guitarrista, compositora y cantautora con diez años de experiencia en enseñanza de guitarra. En 2017 presenté mi primer disco solista y en 2021 publiqué mi segundo álbum. Además, formo parte de un grupo de boleros tradicionales. Estudié en el Conservatorio Manuel de Falla y con músicos populares locales.");
			guitarTeacher2.setImagePath("https://images.unsplash.com/photo-1670449515077-9e680cf6ac8c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
			clientRepository.save(guitarTeacher2);

			Calendary guitarCalendary2 = new Calendary();
			guitarCalendary2.setSubject("guitarra");
			guitarCalendary2.setStartDate(LocalDate.now());
			guitarCalendary2.setEndDate(LocalDate.now().plusMonths(3));
			guitarCalendary2.setStartHour(6);
			guitarCalendary2.setEndHour(18);
			guitarCalendary2.setDescriptionCurse("Mis clases son personalizadas, adaptadas a tus intereses musicales y nivel de habilidad. El objetivo es aprender a tocar mediante la práctica, poniendo énfasis en la escucha y la creatividad. Acepto estudiantes de todos los niveles y ofrezco clases presenciales o por videollamada.");
			guitarCalendary2.setPrice(8000);
			guitarCalendary2.setTeacher(guitarTeacher2);
			calendaryRepository.save(guitarCalendary2);


			Client guitarTeacher3 = new Client();
			guitarTeacher3.setName("Oscar");
			guitarTeacher3.setLastname("Castellar");
			guitarTeacher3.setEmail("oscarcastellar@gmail.com");
			guitarTeacher3.setPassword(passwordEncoder.encode("password15"));
			guitarTeacher3.setRole(String.valueOf(Role.TEACHER));
			guitarTeacher3.setDescriptionTeacher("Desata tu Pasión por la Música con un Profesor Apasionado y Experimentado en Guitarra");
			guitarTeacher3.setDescriptionBiography("Hago música desde muy pequeño, y mi primer instrumento fue la guitarra. A lo largo de mis años he tocado y estudiado muchos géneros y estilos diferentes que me han enriquecido. Me especializo en Guitarra Eléctrica, Guitarra Acústica y Bajo Eléctrico. Desde hace más de diez años comparto lo que he aprendido, creciendo como músico en cada clase que doy. Creo que enseñar música es compartir un conocimiento destinado a circular, fomentando un diálogo con mis alumnos en el que ellos también proponen caminos. En resumen, creo que el buen enseñar es permitirse aprender en el día a día.");
			guitarTeacher3.setImagePath("https://images.unsplash.com/photo-1480700014161-b404b4503a4c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
			clientRepository.save(guitarTeacher3);


			Calendary guitarCalendary3 = new Calendary();
			guitarCalendary3.setSubject("guitarra");
			guitarCalendary3.setStartDate(LocalDate.now());
			guitarCalendary3.setEndDate(LocalDate.now().plusMonths(3));
			guitarCalendary3.setStartHour(20);
			guitarCalendary3.setEndHour(24);
			guitarCalendary3.setDescriptionCurse("¡Hola! Siempre has querido aprender música o perfeccionarte con el bajo, estoy aquí para ayudarte. En mis clases, exploraremos una variedad de géneros musicales como Rock, Pop, Blues, Jazz, entre otros. También abordaremos el lenguaje musical, la armonía, el entrenamiento rítmico, la improvisación y técnicas de interpretación. Mis clases están disponibles para todos los niveles: inicial, medio y avanzado. Lo que me define es mi pasión por ayudar a las personas a hacer música. ¡Contáctame para comenzar!");
			guitarCalendary3.setPrice(8000);
			guitarCalendary3.setTeacher(guitarTeacher3);
			calendaryRepository.save(guitarCalendary3);



			Client guitarTeacher4 = new Client();
			guitarTeacher4.setName("Laura");
			guitarTeacher4.setEmail("laura@example.com");
			guitarTeacher4.setPassword(passwordEncoder.encode("password16"));
			guitarTeacher4.setRole(String.valueOf(Role.TEACHER));
			guitarTeacher4.setDescriptionTeacher("");
			guitarTeacher4.setDescriptionBiography("");
			clientRepository.save(guitarTeacher4);


			Calendary guitarCalendary4 = new Calendary();
			guitarCalendary4.setSubject("guitarra");
			guitarCalendary4.setStartDate(LocalDate.now());
			guitarCalendary4.setEndDate(LocalDate.now().plusMonths(3));
			guitarCalendary4.setStartHour(6);
			guitarCalendary4.setEndHour(14);
			guitarCalendary4.setDescriptionCurse("Curso de guitarra avanzada");
			guitarCalendary4.setPrice(8000);
			guitarCalendary4.setTeacher(guitarTeacher4);
			calendaryRepository.save(guitarCalendary4);



			Client guitarTeacher5 = new Client();
			guitarTeacher5.setName("Santiago");
			guitarTeacher5.setEmail("santiago@example.com");
			guitarTeacher5.setPassword(passwordEncoder.encode("password17"));
			guitarTeacher5.setRole(String.valueOf(Role.TEACHER));
			guitarTeacher5.setDescriptionTeacher("");
            guitarTeacher5.setDescriptionBiography("");
			clientRepository.save(guitarTeacher5);

			Calendary guitarCalendary5 = new Calendary();
			guitarCalendary5.setSubject("guitarra");
			guitarCalendary5.setStartDate(LocalDate.now());
			guitarCalendary5.setEndDate(LocalDate.now().plusMonths(3));
			guitarCalendary5.setStartHour(16);
			guitarCalendary5.setEndHour(18);
			guitarCalendary5.setDescriptionCurse("Curso de guitarra avanzada");
			guitarCalendary5.setPrice(6000);
			guitarCalendary5.setTeacher(guitarTeacher5);
			calendaryRepository.save(guitarCalendary5);


			Client guitarTeacher6 = new Client();
			guitarTeacher6.setName("Ana");
			guitarTeacher6.setEmail("ana@example.com");
			guitarTeacher6.setPassword(passwordEncoder.encode("password18"));
			guitarTeacher6.setRole(String.valueOf(Role.TEACHER));
			guitarTeacher6.setDescriptionTeacher("");
			guitarTeacher6.setDescriptionBiography("");
			clientRepository.save(guitarTeacher6);


			Calendary guitarCalendary6 = new Calendary();
			guitarCalendary6.setSubject("guitarra");
			guitarCalendary6.setStartDate(LocalDate.now());
			guitarCalendary6.setEndDate(LocalDate.now().plusMonths(3));
			guitarCalendary6.setStartHour(16);
			guitarCalendary6.setEndHour(24);
			guitarCalendary6.setDescriptionCurse("Curso de guitarra avanzada");
			guitarCalendary6.setPrice(5000);
			guitarCalendary6.setTeacher(guitarTeacher6);
			calendaryRepository.save(guitarCalendary6);

		};
	}
}