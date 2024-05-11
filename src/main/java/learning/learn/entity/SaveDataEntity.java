package learning.learn.entity;

import jakarta.persistence.*;
import jdk.jfr.DataAmount;


@Entity
@DataAmount
@Table(name = "learn")

public class SaveDataEntity {
    @Id
    @Column(length = 25)
    @GeneratedValue
    private int id;
    @Column(length = 25)

    private String name;
    @Column(length = 25)
    private String age;
    @Column(length = 25)
    private String email;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }


}
