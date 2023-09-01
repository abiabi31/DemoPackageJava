package overridingnet;

public class Car extends Bus {
	public void bmw() {
		System.out.println("interest of 30%");
	}
	@Override
	public void  ktm1() {
		System.out.println("interest of 40%");
		
	}public void ktm2() {
		System.out.println("interest of 50%");
	} 
	public static void main(String[]args) {
		Car car =new Car();
		car.bmw();
		car.ktm();
		car.ktm1();
		car.ktm2();
		car.tss();
	}

}
