package abstraction.partially;

public class Birds extends Animals {
@Override
	public  void Monkey() {
		System.out.println("monker is eat banana");
	}


	public void Zebra() {
		System.out.println("zebra is line of bady");
	}

	public void Cat() {
		System.out.println("cat is milk");
		
	}
	@Override
	public void  lion() {
		System.out.println("loin is raja");
	}
	public void tiger() {
		System.out.println(" tiger  og tiger ");
	}
	public static void main(String[] args) {
		Birds birds =new Birds();
		birds.dog();
		birds.lion();
		birds.tiger();
		birds.Monkey();
		birds.Zebra();
		birds.Cat();
	}

}
