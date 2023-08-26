package multilevel;

public class Dog extends Bird {
    public void food(){
        System.out.println("a food");

    }
    public static void main(String[]args){
        Dog dog=new Dog();
        dog.big();
         dog.banana();
        dog.fly();
        dog.milk();
        dog.food();
    }
}
