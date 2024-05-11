package learning.learn.controller;

import learning.learn.entity.SaveDataEntity;
import learning.learn.service.SaveDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
//@RequestMapping("/https://reqres.in/api/unknown")
@RequestMapping("/data")
public class DemoController {


    @Autowired(required = true)
    private SaveDataService saveDataService;


    @GetMapping
    public String hello() {
        return LocalDate.now().toString();
    }

    @PostMapping("/create")
    public ResponseEntity<String> saveData(@RequestBody SaveDataEntity saveDataEntity) {
        ResponseEntity<String> responseEntity = null;
        try {
            Integer fun = saveDataService.createFun(saveDataEntity);
            responseEntity = new ResponseEntity<String>("save data " + fun + "created", HttpStatus.CREATED);
        } catch (Exception e) {
            responseEntity = new ResponseEntity<String>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
            e.printStackTrace();
        }
        return responseEntity;
    }

    @PutMapping("/updaatae/{id}")
    public ResponseEntity<String> updatedata(@PathVariable Integer id, @RequestBody SaveDataEntity saveDataEntity) {


        ResponseEntity<String> responseEntity = null;
        try {
            Boolean avail = saveDataService.isAvail(id);
            if (avail) {
                saveDataService.updateFun(saveDataEntity);
                responseEntity = new ResponseEntity<String>("Upadated successfully", HttpStatus.OK);
            } else {

                responseEntity = new ResponseEntity<String>("record '" + saveDataEntity.getId() + "' notfound", HttpStatus.BAD_REQUEST);
            }
        } catch (Exception e) {
            responseEntity = new ResponseEntity<String>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
            e.printStackTrace();
        }
        return responseEntity;
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteData(@PathVariable Integer id) {


        ResponseEntity<String> responseEntity = null;
        try {
            Boolean avail = saveDataService.isAvail(id);
            if (avail) {
                saveDataService.DeleteFun(id);
                responseEntity = new ResponseEntity<String>("Delete '" + id + "' successfully", HttpStatus.OK);
            } else {

                responseEntity = new ResponseEntity<String>(" " + id + " notfound", HttpStatus.BAD_REQUEST);
            }
        } catch (Exception e) {
            responseEntity = new ResponseEntity<String>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
            e.printStackTrace();
        }
        return responseEntity;
    }


    @GetMapping(value = "/getDataID/{id}")
    public ResponseEntity getDataById(@PathVariable Integer id) {
        ResponseEntity<String> responseEntity = null;
        SaveDataEntity oneData =null;
        try {
            Boolean avail = saveDataService.isAvail(id);
            if (avail) {
                 oneData = saveDataService.getSaveDataEntity(id);
//                responseEntity = new ResponseEntity<String>(String.valueOf(oneData), HttpStatus.OK);
            } else {

                return new ResponseEntity<String>("Record not found", HttpStatus.BAD_REQUEST);
            }
        } catch (Exception e) {
            responseEntity = new ResponseEntity<String>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
            e.printStackTrace();
        }
        return ResponseEntity.ok(oneData);
    }

    @GetMapping(value = "/getAllData")
    public ResponseEntity getDataAll() {
        ResponseEntity responseEntity = null;
        List<SaveDataEntity> allUsers = saveDataService.getAllUsers();
        if (allUsers == null || allUsers.isEmpty()) {
            String message = "No data found";
            responseEntity = new ResponseEntity<String>(message, HttpStatus.OK);
        } else {
            return responseEntity = new ResponseEntity<List<SaveDataEntity>>(allUsers, HttpStatus.OK);
        }
        return responseEntity;
    }


//    @GetMapping("/getall")
//    public List<SaveDataEntity> getAllUsers() {
//        return saveDataService.getAllUsers();
//    }


//    @Autowired
//    private SaveDataService saveDataService;

//    @GetMapping
//    public List<SaveDataEntity> getAllUsers() {
//        return saveDataService.getAllUsers();
//    }


}
