package overriding;

public class Bird2 extends Bird1 {
	@Override
	public void rate() {
		System.out.println(" rate of 50%");
	}
	public void rate1() {
		System.out.println("rate of 70%");
	}
	public void rate2() {
		System.out.println("rate of 90%");
	} 
	public static void main(String[] args) {
		Bird2 birds=new Bird2();
		birds.rate();
		birds.rate1();
		birds.rate2();
	}

}
