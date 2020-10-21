package server.models;

import javax.persistence.*;
import javax.validation.ValidationException;
import javax.validation.constraints.NotBlank;

@Entity
public class Song {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(updatable = false)
    private long id;

    @NotBlank(message = "Title darf nicht leer sein!")
    private String title;

    @NotBlank(message = "Artist muss gesetzt sein!")
    private String artist;

    @NotBlank(message = "Genre darf nicht leer sein!")
    private String genre;

    @PreUpdate
    @PrePersist
    private void validieren(){
        if (artist.equals("haha")){
            throw new ValidationException("Artist ist gebannt.");
        }
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setArtist(String artist) {
        this.artist = artist;
    }

    public void setGenre(String category) {
        this.genre = category;
    }

    public long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getArtist() {
        return artist;
    }

    public String getGenre() {
        return genre;
    }
}
