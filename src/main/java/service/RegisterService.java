package service;

import Dto.RegDto;
import Repo.RegRepo;
import entity.RegEntity;
import org.springframework.beans.factory.annotation.Autowired;


public class RegisterService implements RegService {
    @Autowired
    private RegRepo regRepo;
    @Override
    public String addReg(RegDto regDto) {
      RegEntity regEntity =new RegEntity();
        regDto.getName();
        regDto.getNumber();
        regRepo.save(regEntity);
        return regEntity.getName();
    }
}
