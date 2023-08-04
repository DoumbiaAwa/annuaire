package com.group7.tp_budget.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.group7.tp_budget.model.Notification;

public interface NotificationRepository  extends JpaRepository<Notification,Integer>{
    
    
}
