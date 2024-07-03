package Controller;

import Dto.RegDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import service.RegService;
import service.RegisterService;

@RestController
@RequestMapping("/reg")

public class RegisterController {
    @Autowired
    private RegService regService;
    @PostMapping(path="/save")
    public String saveReg(@RequestBody RegDto regDto) {
String id = regService.addReg(regDto);
return id;
    }

}
