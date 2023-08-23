package org.net1;
import org.net.Car;
import org.net3.Flower;

public class Bike {
    public void bb(){
        System.out.println("ri5");
    }
    public void bb1(){
        System.out.println("ray");
    }
    public static void main(String[]args) {
        Bike bike=new Bike();
                bike.bb();
                bike.bb1();
        Flower flower=new Flower();
        flower.cc();
        flower.cc2();
        Car car= new Car();
        car.aa();
        car.aa1();
        car.aa2();
    }
}
