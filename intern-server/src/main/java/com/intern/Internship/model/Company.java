package com.intern.Internship.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import java.sql.Blob;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Company implements HasID<String> {
    @Id
    @Column(name = "email")
    private String ID; // email

    private String password;
    private String name;
    private String address;
    private String telephone;
    private String description;
    private String field;
    private Blob logo;
    @OneToMany(mappedBy = "company", cascade = CascadeType.ALL)
    private Set<Internship> internships;

    public Company(String ID, String password, String name, String address, String telephone, String description,
            String field, Blob logo, Internship... internships) {
        this.ID = ID;
        this.password = password;
        this.name = name;
        this.address = address;
        this.telephone = telephone;
        this.description = description;
        this.field = field;
        this.logo = logo;
        this.internships = Stream.of(internships).collect(Collectors.toSet());
        this.internships.forEach(x -> x.setCompany(this));
    }

    @Override
    public String toString() {
        return "Company{" + "email='" + ID + '\'' + ", password='" + password + '\'' + ", name='" + name + '\''
                + ", address='" + address + '\'' + ", telephone='" + telephone + '\'' + ", description='" + description
                + '\'' + ", field='" + field + '\'' + ", logo=" + logo + '}';
    }
}
