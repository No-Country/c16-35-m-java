package com.c1635mjava.Tuprofeenlinea;

import com.c1635mjava.Tuprofeenlinea.models.Client;
import com.c1635mjava.Tuprofeenlinea.repository.ClientRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;

import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
public class TuprofeenlineaApplication {


	public static void main(String[] args) {
		SpringApplication.run(TuprofeenlineaApplication.class, args);
	}


	@Bean
	public CommandLineRunner dataLoader(ClientRepository clientRepository, PasswordEncoder passwordEncoder) {
		return new CommandLineRunner() {
			@Override
			public void run(String... args) throws Exception {
				// Crear algunos clientes de ejemplo al iniciar la aplicación
				registerClient(clientRepository, passwordEncoder, "albert.einstein@gmail.com", "e=mc2");
				registerClient(clientRepository, passwordEncoder, "steve.jobs@gmail.com", "thinkdifferent");
				registerClient(clientRepository, passwordEncoder, "bill.gates@gmail.com", "microsoft");
				registerClient(clientRepository, passwordEncoder, "stephen.hawking@gmail.com", "blackholes");
				registerClient(clientRepository, passwordEncoder, "madam.curie@gmail.com", "radioactivity");
			}

			private void registerClient(ClientRepository clientRepository, PasswordEncoder passwordEncoder, String email, String password) {
				Client client = new Client();
				client.setEmail(email);
				client.setPassword(passwordEncoder.encode(password));
				clientRepository.save(client);
			}
		};

	}
}