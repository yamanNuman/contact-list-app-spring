package org.ymnn.contactlist.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.ymnn.contactlist.entity.Contact;

public interface ContactRepository extends JpaRepository<Contact, String> {
}
