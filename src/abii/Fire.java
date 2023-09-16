package abii;

import java.util.Scanner;

public class Fire {
	public void air() {
		int a;
		Scanner abi =new Scanner(System.in);
		System.out.println("Enter to Cars");
		a =abi.nextInt();
	if(a<=10) {
		System.out.println("rolls Roys");
	}
	else if(a>=11 && a<=20) {
		System.out.println("Bmw");	
	}
	else if(a<=21 || a<=30) {
		System.out.println("BENZ");		
	}
	else if(a>=31 != a>=40) {
		System.out.println("AUDI");	
	}
	else if(a>=41 && a<=50) {
		System.out.println("TOYATA");		
	}
	else if(a<=51 || a<=60) {
		System.out.println("FERRARI");	
	}
	else if(a>=61 && a<=70) {
		System.out.println("FORD");	
	}
	else if(a>=71 && a<=80) {
		System.out.println("SIFT");		
	}
	else if(a>=81 && a<=99) {
		System.out.println("NOVA");	
	}
	else {
		System.out.println("LAMBORGHINI");
			
	}
	}
}