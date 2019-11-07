package com.intern.Internship.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Feedback implements HasID<String>{
    /**
     *
     */
    private static final long serialVersionUID = -3534054198190203549L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String ID;

    private String description;
    private Boolean anonymous;
    private int rating;

    @ManyToOne
    @JoinColumn
    private Internship internship;

    public Feedback(String description,Boolean anonymous,int rating,Internship internship){
        this.description=description;
        this.anonymous=anonymous;
        this.rating=rating;
        this.internship = internship;        
    }

    @Override
    public String toString() {
        return "Feedback{" +
                "ID='" + ID + '\'' +
                ", description='" + description + '\'' +
                ", anonymous=" + anonymous +
                ", rating=" + rating +
                ", internship=" + internship.getID() +
                '}';
    }
}
