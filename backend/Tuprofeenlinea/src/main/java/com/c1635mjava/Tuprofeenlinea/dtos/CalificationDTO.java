package com.c1635mjava.Tuprofeenlinea.dtos;

public class CalificationDTO {
    private Long id;
    private int clarity;
    private int punctuality;
    private int preparation;
    private String comment;
    private Long reservationId;

    // Constructor, getters y setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getClarity() {
        return clarity;
    }

    public void setClarity(int clarity) {
        this.clarity = clarity;
    }

    public int getPunctuality() {
        return punctuality;
    }

    public void setPunctuality(int punctuality) {
        this.punctuality = punctuality;
    }

    public int getPreparation() {
        return preparation;
    }

    public void setPreparation(int preparation) {
        this.preparation = preparation;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public Long getReservationId() {
        return reservationId;
    }

    public void setReservationId(Long reservationId) {
        this.reservationId = reservationId;
    }
}
