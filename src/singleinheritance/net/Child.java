package singleinheritance.net;
// single//
public class Child extends Parent {
public void hood() {
	System.out.println("abi");
}
public static void main(String[] args) {
	Child child =new Child();
	child.hood();
	child.nice();
}
}
