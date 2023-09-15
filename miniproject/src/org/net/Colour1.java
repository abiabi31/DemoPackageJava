package org.net;

import java.util.Scanner;

public class Colour1 extends Colour {
	public void car() {
		System.out.println("mark ender");
      	int a ;
		Scanner abi =new Scanner(System.in);
	     a  =abi.nextInt();
	    switch(a) {
		case 1:
			if( a>5) {
		     System.out.println("very very bad");
			}
			break;
		case 2:
			if(a>=6 && a<=20) {
			System.out.println(" very bad");
			}
			break;
		case 3: 
			if(a>=21&&a<=35) {
			System.out.println("fail");
			}
			break;
		case 4:   
			if(a>=36!=a<=45) {
			System.out.println("pass ");
			}
			break;
		case 5:
			if(a>=46||a<=60) {
			System.out.println("just good");
			}
			break;
		case 6:
			if(a>=60||a<=70) {
			System.out.println("good");
			}
			break;
		case 7:   
			if(a>=71||a<=80) {
			System.out.println("very good ");
			}
			break;
		case 8:
			if(a>=81||a<=90) {
			System.out.println("very very good ");
			}
			break;
		case 9: 
			if(a>=91||a<=99) {
			System.out.println("excellent ");
			}
			break;
	       default: 
			System.out.println("very excellent ");
			
	    }
	}

		
	}
	

