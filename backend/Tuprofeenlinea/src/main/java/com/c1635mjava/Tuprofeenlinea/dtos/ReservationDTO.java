package com.c1635mjava.Tuprofeenlinea.dtos;

import java.time.LocalDate;

public class ReservationDTO {
    private LocalDate date;
    private int duration;
    private Long studentId;
    private Long teacherId;

    // Constructor, getters y setters

    public ReservationDTO() {
    }

    public ReservationDTO(LocalDate date, int duration, Long studentId, Long teacherId) {
        this.date = date;
        this.duration = duration;
        this.studentId = studentId;
        this.teacherId = teacherId;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public Long getStudentId() {
        return studentId;
    }

    public void setStudentId(Long studentId) {
        this.studentId = studentId;
    }


}