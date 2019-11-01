package com.intern.Internship.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.sql.Blob;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Company implements HasID<String>{
    @Id
    @Column(name = "email")
    private String ID; //email

    private String password;
    private String name;
    private String address;
    private String telephone;
    private String description;
    private String field;
    private Blob logo;

    public Company(String ID, String password, String name, String address, String telephone, String description, String field, Blob logo) {
        this.ID = ID;
        this.password = password;
        this.name = name;
        this.address = address;
        this.telephone = telephone;
        this.description = description;
        this.field = field;
        this.logo = logo;
    }

    @Override
    public String toString() {
        return "Company{" +
                "email='" + ID + '\'' +
                ", password='" + password + '\'' +
                ", name='" + name + '\'' +
                ", address='" + address + '\'' +
                ", telephone='" + telephone + '\'' +
                ", description='" + description + '\'' +
                ", field='" + field + '\'' +
                ", logo=" + logo +
                '}';
    }
}
