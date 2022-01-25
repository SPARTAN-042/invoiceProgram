package com.invoice.invoiceProgram;

import com.ulisesbocchio.jasyptspringboot.annotation.EnableEncryptableProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:4200")
@SpringBootApplication
@EnableEncryptableProperties
public class InvoiceProgramApplication {



	public static void main(String[] args) {
		SpringApplication.run(InvoiceProgramApplication.class, args);
	}

}
