package com.invoice.invoiceProgram.repository;

import com.invoice.invoiceProgram.model.ERole;
import com.invoice.invoiceProgram.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}
