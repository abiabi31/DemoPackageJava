package singleinteritance;

public class Yellow  extends Red{
	public void yellow1() {
		System.out.println("yellow of yellow");
		
	}
	public static void main(String[] args) {
		Yellow yellow=new Yellow();
		yellow.red1();
		yellow.yellow1();
		
	}

}
