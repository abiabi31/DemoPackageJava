package Add;

public class Add2 extends Add1 {
	int g=50;
	int h=e+g;
	public void fire3() {
		System.out.println(h);
}
	public static void main(String[] args) {
	System.out.println("Ender");
	Add2 abi=new Add2();
	abi.fire();
	abi.fire1();
	abi.fire3();
}
}