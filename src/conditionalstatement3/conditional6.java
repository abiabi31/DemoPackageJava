package conditionalstatement3;

import java.util.Scanner;

public class conditional6 {
public static void main(String[] args) {
	Scanner scanner = new Scanner(System.in) ;
	System.out.println("age culculate");
		int a=scanner.nextInt();
		if(a<=15) {
		System.out.println("small boy");
		}
   else if (a>=16 && a<=25) {
		System.out.println(" young men");
   }
   else if (a>=26 && a<=35) {
	   System.out.println(" men");
   }
   else if (a>=36 && a<=50) {
	   System.out.println("uncle");
   }
   else if (a>=51&& a<=75) {
	   System.out.println("old men");
   }
   else if (a>=76 && a<=100) {
	   System.out.println("grand father");
   }

}

}

