package server.repositories;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import server.models.Song;

@RepositoryRestResource
public interface SongRepository
        extends PagingAndSortingRepository<Song, Long> {
    
}
