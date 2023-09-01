package overloadingoverloading.net;

public class Flower extends Colour {
	public static void main(String[] args) {
		Flower flower=new Flower();
		flower.red1("abi");
		flower.red2("paint",100, 22.33d);
		flower.red3(10, 11.10d, "as");
		flower.red4("karungal", 10, 100, "vivo");
		flower.red5(10,"monday" ,20, "redmi",133333L);
	}

}
