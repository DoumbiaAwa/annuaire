package com.group7.tp_budget.model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="notification")
public class Notification {
     @Id
      @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id_N;
    
}
