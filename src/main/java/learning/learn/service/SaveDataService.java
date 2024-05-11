package learning.learn.service;

import learning.learn.entity.SaveDataEntity;
import learning.learn.repo.SaveDataRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public interface SaveDataService {
//        @Autowired
//    public SaveDataRepo saveDataRepo;
    public Integer createFun(SaveDataEntity saveDataEntity);
    public void updateFun(SaveDataEntity saveDataEntity);
    public void DeleteFun(Integer id);
    public SaveDataEntity getSaveDataEntity(Integer id);
    public boolean isAvail(Integer id);
    public List<SaveDataEntity> getAllUsers();

//    @Autowired
//    private SaveDataRepo saveDataRepo;
//    public List<SaveDataEntity> getAllUsers() {
//        return saveDataRepo.findAll();
//    }
//
//    public Optional<SaveDataEntity> getUserById(Long id) {
//        return saveDataRepo.findById(id);
//    }

}
