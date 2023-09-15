package abii;

import java.util.Scanner;
public class Fire3 {
         //data type//
     	Scanner scanner = new Scanner(System.in);
		int a=scanner.nextInt();
		public void water (int number) {
			System.out.println(number+100);		
		}
	    public void water1 (String name) {
		System.out.println("String name:"+name);
	}
//data type count
    public void water2(String name,int age,double number ) {
	System.out.println("String:"+name+"\n"+"age is:"+age+"\n"+" Hight is:"+number);
    }
//data type order//
    public void water3(int number,double volu,String name ){
	System.out.println("number is:"+number+"\n"+"double"+volu+"\n"+"string name:"+name);
	
}// overriding//
    public void interest(){
		System.out.println("inerest of 5%");
	}
	   public void interest1() {
	   System.out.println("inerest of 10% ");

	}
	   
}	
  
