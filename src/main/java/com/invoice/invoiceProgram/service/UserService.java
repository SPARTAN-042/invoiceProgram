package com.invoice.invoiceProgram.service;

import com.invoice.invoiceProgram.model.Role;
import com.invoice.invoiceProgram.model.User;

import java.util.List;

public interface UserService {
    User saveUser(User user);
    Role saveRole(Role role);
    void addRoleToUser(String username, String roleName);
    User getUser(String username);
    List<User> getUsers();
}
