package org.net;

import java.util.Scanner;

public class Colour4 extends Colour3 {
	//overloading//
	//data type
	Scanner scanner = new Scanner(System.in) ;
		int a=scanner.nextInt();
		public void pinkpin(int number) {
			System.out.println(number+100);		
		}
	    public void pink1(String name) {
		System.out.println("String name:"+name);
	}
//data type count
    public void pink2(String name,int age,double number ) {
	System.out.println("String:"+name+"\n"+"age is:"+age+"\n"+"double number is:"+number);
}
//data type order//
    public void Pink3(int number,int number1,double volu,String name ){
	System.out.println("number is:"+(number+number1)+"\n"+"double"+volu+"\n"+"string name:"+name);
}
    public void interest(){
		System.out.println("inerest of 5%");
	}
	   public void interest1() {
	   System.out.println("inerest of 10% ");

	}
		
}



	

	

	
	

	


