package overloading.net;
//data count
public class Nature {
	public void sea(String name,int number,double volu ) {
		System.out.println("string name:"+name+"\n"+"number is:"+number+"double:"+volu);
	}
	public void sea1(String name,double number,long phone ) {
		System.out.println("name is:"+name+"\n"+"double is:"+number+"\n"+"phone is:"+phone);
	   

	}
	public void sea2(String name,float number,int volu ) {
		System.out.println( "String is:"+name+"\n"+"float is:"+number+"\n"+"int is"+volu);

	} public static void main(String[] args) {
		Nature nature=new Nature();
		nature.sea("abi", 200, 33.2220d);
		nature.sea1("as", 23.30, 24440L);
		nature.sea2("abi as", 22.2f, 244);
	}

}
