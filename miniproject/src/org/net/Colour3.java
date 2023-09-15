package org.net;

public class Colour3 extends Colour2 {
//for loop//
	public void green() {
		int a=0;
	while(a<10) {
    System.out.println(a);
    a++;
	}
	}
	public void green1() {
	int b=0;
		do {
			System.out.println(b);
			b++;
		}while(b<20);
	 }
	public void green2() {
		for(int c=0;c<10;c++) {
			if (c==3){
			break;			
				}
			System.out.println(c);
			}
			for(int d=0;d<10;d++) {
			if (d==5) {
				continue;	
			}
			System.out.println(d);
			}
	}
}
