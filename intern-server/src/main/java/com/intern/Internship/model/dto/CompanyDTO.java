package com.intern.Internship.model.dto;

import com.intern.Internship.model.HasID;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;

@Getter
@Setter
@NoArgsConstructor
@Entity
@ToString
public class CompanyDTO implements HasID<String> {
    /**
     *
     */
    private static final long serialVersionUID = 2489521016193917059L;
    @Id
    private String ID;
    private String name;
    private String address;
    private String telephone;
    private String description;
    private String field;
    private byte[] logo;

    public CompanyDTO(String ID, String name, String address, String telephone, String description, String field, byte[] logo) {
        this.ID = ID;
        this.name = name;
        this.address = address;
        this.telephone = telephone;
        this.description = description;
        this.field = field;
        this.logo = logo;
    }
}
