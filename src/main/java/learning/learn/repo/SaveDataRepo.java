package learning.learn.repo;

import learning.learn.entity.SaveDataEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SaveDataRepo extends JpaRepository<SaveDataEntity, Integer > {

}
