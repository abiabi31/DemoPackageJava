package overridingdemo.net;

public class Dark extends Moon {
	@Override
	public void yellow() {
		System.out.println("rate of 50%");
	}
	public void black() {
		System.out.println("rate of 80%");
	}
	public static void main(String[] args) {
	   
	
	Dark dark=new Dark();
dark.black();
dark.black();
dark.pink();

	}
}
