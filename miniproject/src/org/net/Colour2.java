package org.net;

import java.util.Scanner;

public class Colour2 extends Colour1{
	public void blue() {
	Scanner scanner = new Scanner(System.in) ;
	System.out.println("car");
		int a=scanner.nextInt();
		if(a<=5) {
		System.out.println("rolls royce");
		}
   else if (a>=6&& a<=15) {
		System.out.println(" lamborghini");
   }
   else if (a>=16 && a<=25) {
	   System.out.println("bmw");
   }
   else if (a>=26 && a<=35) {
	   System.out.println(" audi");
   }
   else if (a>=36 && a<=45) {
	   System.out.println(" ford");
   }
   else if (a>=46 && a<=55) {
	   System.out.println(" ferrari");
   }
   else if (a>=56 || a<=65) {
	   System.out.println("veyron");
   }
   else if (a>=66|| a<=85) {
	   System.out.println("cooper");
   }
   else if (a>=86!= a<=99) {
	   System.out.println("jaguar");
   }
   else {
	   if (a==100) {
	   System.out.println("toyota");
   }
}
}
}
