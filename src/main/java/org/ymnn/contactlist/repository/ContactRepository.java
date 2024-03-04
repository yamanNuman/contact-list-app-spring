package org.ymnn.contactlist.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.ymnn.contactlist.entity.Contact;

import java.util.Optional;

public interface ContactRepository extends JpaRepository<Contact, String> {
    Optional<Contact> findById(String id);
}
