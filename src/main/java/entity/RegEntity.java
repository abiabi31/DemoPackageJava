package entity;

import jakarta.persistence.*;

@Table(name="Register")
public class RegEntity {
    @Id
    @Column( name ="employee_id",length = 20)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @Column( name ="employee_name",length = 20)
    private String name;
    @Column( name ="employee_number",length = 20)
    private int number;

    public RegEntity(int id, String name, int number) {
        this.id = id;
        this.name = name;
        this.number = number;
    }

    public RegEntity() {
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

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    @Override
    public String toString() {
        return "RegEntity{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", number=" + number +
                '}';
    }
}
