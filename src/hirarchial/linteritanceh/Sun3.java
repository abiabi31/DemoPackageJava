package hirarchial.linteritanceh;

public class Sun3 extends Sun{
	public void light3() {
		System.out.println("nice of light");
	}
public static void main(String[] args) {
	Sun3 sun=new Sun3();
	sun.light();
	sun.light3();
			
}
}
