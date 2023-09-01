package hirarchicalinhertance;

public class Bmw extends Audi {
public void car1() {
	System.out.println("bmw is super");
}
public static void main(String[] args) {
	Bmw bmw=new Bmw();
	bmw.car();
	bmw.car1();
}
}
