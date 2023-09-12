package org.net;

import org.net1.Colour1;

//if else
public class Car extends Colour1 {
public void green() {
	int a=40;
	if(a<30) {
		System.out.println("nature is green");
	}
	else  if (a<50){
			System.out.println("green of nature");
		}
	else {
			System.out.println("nice of world");
		}
//Logical Operators//
	int x=10,y=20;
	System.out.println((x>y && y<x));
	System.out.println((x|y));
	System.out.println((x>y!=x>y));
	}
//switch//

	public void green1() {
		int number =2; 
		switch(number) {
		case 1:
			System.out.println("number is one ");
			break;
		case 2:
			System.out.println( "number is two");
			break;
			default:
				System .out.println ("number is ten");
		}
		
	}
	//for loop//
	
	public void green2() {
		for(int a=0;a<10;a++) {
			if (a==3){
			break;
					
				}
			System.out.println(a);
			}
		
			for(int b=0;b<10;b++) {
			if (b==5) {
				continue;
				
			}
			System.out.println(b);
			}
			int c = 0;
			while(c<=10) {
				System.out.println(c);
				c++;
			}
			int d=20;
			do {
				System.out.println(d);
				d++;
			}while(d<30);
			}
	
	//arrays//
	public void green3() {
		int[][] b= {{10,20,30},{40,50,60}};
		System.out.println(b[1][2]);
		
	}
		
	}
	
	
	
