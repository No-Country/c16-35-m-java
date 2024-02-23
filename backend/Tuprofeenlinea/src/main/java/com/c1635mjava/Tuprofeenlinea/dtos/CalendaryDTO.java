package com.c1635mjava.Tuprofeenlinea.dtos;

import java.time.LocalDate;

public class CalendaryDTO {
    private Long id;
    private String subject;
    private LocalDate startDate;
    private LocalDate endDate;
    private int startHour;
    private int endHour;
    private String descriptionCurse;
    private int price;
    private Long teacherId;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }

    public int getStartHour() {
        return startHour;
    }

    public void setStartHour(int startHour) {
        this.startHour = startHour;
    }

    public int getEndHour() {
        return endHour;
    }

    public void setEndHour(int endHour) {
        this.endHour = endHour;
    }

    public String getDescriptionCurse() {
        return descriptionCurse;
    }

    public void setDescriptionCurse(String descriptionCurse) {
        this.descriptionCurse = descriptionCurse;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public Long getTeacherId() {
        return teacherId;
    }

    public void setTeacherId(Long teacherId) {
        this.teacherId = teacherId;
    }
// Constructor, getters y setters
}
