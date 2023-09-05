package abstraction;

public class Darkyellow extends Darkblack {
@Override
public void red() {
	System.out.println("red is bueaty");
}
public void red1() {
	System.out.println("red is nice");
	
}
public void red2() {
	System.out.println("red is colur");
}
@Override
	public void yellow1() {
		System.out.println("yellow1 is nice");
	}
public void yellow() {
	System.out.println("yellow is beauty");
}
	public static void main(String[] args) {
		Darkyellow darkyellow= new Darkyellow();
		darkyellow.red();
		darkyellow.red1();
		darkyellow.red2();
		darkyellow.yellow();
		darkyellow.yellow1();
	}
}

	


	
