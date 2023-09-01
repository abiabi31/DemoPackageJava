package hirarchicalinhertance;

public class Sift extends Audi {
public void car3() {
	System.out.println("sift is nice");
}
public static void main(String[] args) {
	Sift sift=new Sift();
	sift.car();
	sift.car3();
}
}
