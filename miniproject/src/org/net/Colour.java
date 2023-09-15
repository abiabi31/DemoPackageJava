 package org.net;
//array//
public class Colour {
	//single//
public void red() {
	int[] a=new int[5];
	
	   a[0]=10;
	   a[1]=20;
	   a[2]=30;
	   a[3]=40;
	   a[4]=50;
	
	System.out.println(a[4]);	
}
//multiple//
public void red1() {
	int[][] a=new int[5][5];
	
     	a[0][0]=10;
	    a[0][1]=20;
	    a[0][2]=30;
	    a[0][3]=40;
	    a[0][4]=50;
	
	System.out.println(a[0][2]);
}
}
