package conditionalstatement2;

import java.util.Scanner;

public class Conditional5 {
	public static void main(String[] args) {
		
		Scanner scanner = new Scanner(System.in) ;
		System.out.println("Enter tha mark ");
			int a=scanner.nextInt();
			if(a<=5) {
			System.out.println("very  very bad");
			}
	   else if (a>=6 && a<=20) {
			System.out.println(" very bad");
	   }
	   else if (a>=21 && a<=35) {
		   System.out.println(" fail");
	   }
	   else if (a<=36 && a<=45) {
		   System.out.println(" average");
	   }
	   else if (a>=46 && a<=60) {
		   System.out.println("good ok");
	   }
	   else if (a>=61 && a<=75) {
		   System.out.println(" good");
	   }
	   else if (a>=76 || a<=85) {
		   System.out.println(" very good");
	   }
	   
	   else if (a<=86!= a<=99 ) {
		   System.out.println(" very very good");
	   }
	   else if (a==100) {
		   System.out.println("excellent");
		   }
	   }
	
}