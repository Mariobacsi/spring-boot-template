package server.models;


import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.tool.hbm2ddl.UniqueConstraintSchemaUpdateStrategy;

import javax.persistence.*;
import javax.validation.ValidationException;
import javax.validation.constraints.NotBlank;

@Entity
@Table(uniqueConstraints = {
        @UniqueConstraint(columnNames = {"title","artist"})
})
public class Song {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Version
    private long version;

    @NotBlank
    private String title;

    @NotBlank(message = "Artist muss gesetzt sein.")
    private String artist;

    @NotBlank
    private String genres;

    @Transient
    private String voting;

    @PrePersist
    @PreUpdate
    private void validieren() {
        if("haha".equals(artist)) {
                throw new ValidationException("Artist darf nicht schlecht benannt sein.");
        }
    }

    public long getETag() { return version; }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getArtist() {
        return artist;
    }

    public void setArtist(String artist) {
        this.artist = artist;
    }

    public String getGenres() {
        return genres;
    }

    public void setGenre(String genres) {
        this.genres = genres;
    }
}
