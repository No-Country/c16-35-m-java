package com.c1635mjava.Tuprofeenlinea;

import com.c1635mjava.Tuprofeenlinea.models.Calendary;
import com.c1635mjava.Tuprofeenlinea.models.Client;
import com.c1635mjava.Tuprofeenlinea.models.Reservation;
import com.c1635mjava.Tuprofeenlinea.models.Role;
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

@SpringBootApplication
public class TuprofeenlineaApplication {

	public static void main(String[] args) {
		SpringApplication.run(TuprofeenlineaApplication.class, args);
	}


//	@Bean
//	public CommandLineRunner dataLoader(ClientRepository clientRepository, PasswordEncoder passwordEncoder) {
//		return new CommandLineRunner() {
//			@Override
//			public void run(String... args) throws Exception {
//				// Crear algunos clientes de ejemplo al iniciar la aplicación
//				registerClient(clientRepository, passwordEncoder, "albert.einstein@gmail.com", "e=mc2");
//				registerClient(clientRepository, passwordEncoder, "steve.jobs@gmail.com", "thinkdifferent");
//				registerClient(clientRepository, passwordEncoder, "bill.gates@gmail.com", "microsoft");
//				registerClient(clientRepository, passwordEncoder, "stephen.hawking@gmail.com", "blackholes");
//				registerClient(clientRepository, passwordEncoder, "madam.curie@gmail.com", "radioactivity");
//			}

	@Bean
	public CommandLineRunner dataLoader(ClientRepository clientRepository, CalendaryRepository calendaryRepository, ReservationRepository reservationRepository, PasswordEncoder passwordEncoder) {
		return args -> {
			// Crear algunos clientes de ejemplo al iniciar la aplicación
			Client student10 = new Client();
			student10.setName("Estudiante 10");
			student10.setEmail("estudiante10@example.com");
			student10.setPassword(passwordEncoder.encode("password10"));
			student10.setRole(String.valueOf(Role.TEACHER));

			// Guardar el cliente en la base de datos
			Client savedStudent1 = clientRepository.save(student10);

			// Crear la ruta de carga única para el cliente
			String uploadFolderPath = "/uploads/profesor1";
			String clientUploadFolder = uploadFolderPath + "client_" + savedStudent1.getId() + "/";

			// Aquí puedes crear la carpeta en el sistema de archivos si no existe
			File clientUploadDirectory = new File(clientUploadFolder);
			if (!clientUploadDirectory.exists()) {
				clientUploadDirectory.mkdirs(); // Crear la carpeta si no existe
			}

			// Guardar la ruta de carga en el cliente para su posterior referencia
			savedStudent1.setImagePath(clientUploadFolder); // Asignar la ruta de carga al campo image_path
			clientRepository.save(savedStudent1);

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
//			calendary1.setSubject("Matemáticas");
//			calendary1.setStartDate(LocalDate.now());
//			calendary1.setEndDate(LocalDate.now().plusMonths(3));
//			calendary1.setStartHour(8);
//			calendary1.setEndHour(10);
//			calendary1.setDescriptionCurse("Curso de matemáticas básicas");
//			calendary1.setPrice(50);
//			calendary1.setTeacher(teacher1);
//			calendaryRepository.save(calendary1);
//
//			Calendary calendary2 = new Calendary();
//			calendary2.setSubject("Física");
//			calendary2.setStartDate(LocalDate.now());
//			calendary2.setEndDate(LocalDate.now().plusMonths(3));
//			calendary2.setStartHour(10);
//			calendary2.setEndHour(12);
//			calendary2.setDescriptionCurse("Curso de física avanzada");
//			calendary2.setPrice(60);
//			calendary2.setTeacher(teacher1);
//			calendaryRepository.save(calendary2);
//
			// Crear una reserva de ejemplo
//			Reservation reservation = new Reservation();
//			reservation.setDate(LocalDate.now().plusDays(2));
//			reservation.setDuration(1);
//			reservation.setStudent(student1);
//			reservation.setCalendary();
//			reservationRepository.save(reservation);
		};
	}}

