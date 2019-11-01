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
public class Employer implements HasID<String>{
    @Id
    @Column(name = "email")
    private String ID; //email

    private String password;
    private String name;
    private String address;
    private String telephone;
    private String description;
    private Blob logo;

    public Employer(String ID, String password, String name, String address, String telephone, String description, Blob logo) {
        this.ID = ID;
        this.password = password;
        this.name = name;
        this.address = address;
        this.telephone = telephone;
        this.description = description;
        this.logo = logo;
    }

    @Override
    public String toString() {
        return "Employer{" +
                "email='" + ID + '\'' +
                ", password='" + password + '\'' +
                ", name='" + name + '\'' +
                ", address='" + address + '\'' +
                ", telephone='" + telephone + '\'' +
                ", description='" + description + '\'' +
                ", logo=" + logo +
                '}';
    }
}
