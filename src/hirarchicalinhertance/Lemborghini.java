package hirarchicalinhertance;

public class Lemborghini extends Audi {
public void car2() {
	System.out.println("lemborghni is good car");
}
public static void main(String[] args) {
	

	Lemborghini lemborghini=new Lemborghini();
	lemborghini.car();
	lemborghini.car2();
}
}
