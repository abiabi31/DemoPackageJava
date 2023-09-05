package hirarchial.linteritanceh;

public class Sun2 extends Sun{
	public void light2() {
		System.out.println("light is as");
	}
public static void main(String[] args) {
	Sun2 sun=new Sun2();
	sun.light();
	sun.light2();
}
}
