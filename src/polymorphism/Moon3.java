package polymorphism;
//data type order// over loading//
public class Moon3 extends Moon2{
		public void Black1  (float number,String name,int age ) {
			System.out.println("float :"+number+"\n"+"is a:"+name+"\n"+"int is:"+age);
		}
		public void Black2( int address,double number,String name ) {
			System.out.println(  "int is :+address"+"\n"+"double number:"+number+"\n"+"String name:"+name );
		}
		public static void main(String[] args) {
			Moon3 moon3= new Moon3();
			moon3.Black1(44.3f, "abi", 22);
			moon3.Black2(22, 22.24d, "as");
			moon3.dark1("abi");
			moon3.dark2(22);
			moon3.dark3(22.22f);
			moon3.green1("abi as", 22, 22.22f);
			moon3.green2("abi", 22,22.22d);
		}


}
