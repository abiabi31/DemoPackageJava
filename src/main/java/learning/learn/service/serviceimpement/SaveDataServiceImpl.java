package learning.learn.service.serviceimpement;

import learning.learn.entity.SaveDataEntity;
import learning.learn.repo.SaveDataRepo;
import learning.learn.service.SaveDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class SaveDataServiceImpl implements SaveDataService {

    @Autowired(required = true)
    private SaveDataRepo dataRepo;

    @Override
    @Transactional
    public Integer createFun(SaveDataEntity saveDataEntity) {
        return dataRepo.save(saveDataEntity).getId();
    }

    @Override
    public void updateFun(SaveDataEntity saveDataEntity) {
        dataRepo.save(saveDataEntity);
    }

    @Override
    public void DeleteFun(Integer id) {
dataRepo.deleteById(id);
    }

    @Override
    public SaveDataEntity getSaveDataEntity(Integer id) {
        return dataRepo.findById(id).orElse(null);
    }


    @Override
    public boolean isAvail(Integer id) {
        return dataRepo.existsById(id);
    }

    @Override
    public List<SaveDataEntity> getAllUsers() {
        return dataRepo.findAll();
    }
}

