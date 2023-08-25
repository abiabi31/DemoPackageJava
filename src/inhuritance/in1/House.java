package inhuritance.in1;

public class House extends Sky {
    public void nice(){
        System.out.println("a nice");
    }
    public static void main(String[]args){
        House house=new House();
        house.blue();
        house.nice();
        house.green();
        house.lenova();
    }
}
