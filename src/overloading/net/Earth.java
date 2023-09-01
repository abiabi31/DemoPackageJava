package overloading.net;


//data type//
public class Earth {
	public void tree( String name) {
		System.out.println( "my name is:"+name);
	}
	public void tree1 ( int age) {
	System.out.println( "my age is:"+age);
		
	
}
	public void tree2(double number) {
		System.out.println( "float number:"+number);
		
		
	}
	public static void main(String[] args) {
		Earth earth =new Earth();
		earth.tree("abi");
		earth.tree1(20);
		earth.tree2(22.22d);
	}

}
