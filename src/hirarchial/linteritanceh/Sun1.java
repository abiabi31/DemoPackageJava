package hirarchial.linteritanceh;

public class Sun1 extends Sun {
	public void light1() {
		System.out.println("light is nice");
	}
	public static void main(String[] args) {
	Sun1 sun=new Sun1();
	sun.light();
	sun.light1();
	
	}

}
