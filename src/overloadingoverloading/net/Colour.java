package overloadingoverloading.net;
//data types,count,order
public class Colour {

		public void red1( String name) {
			System.out.println( "my name is:"+name);
		}
		public void red2(String name,int rate,double point ) {
			System.out.println("string name:"+name+"\n"+"my age is:"+rate+"double:"+point);
		}
		public void red3 (int number,double volu,String name ) {
			System.out.println("number is:"+number+"double:"+volu+"string name:"+name);
		}
		public void  red4(String name,int address,int amount,String phone ) {
			System.out.println("this is a:"+name+"\n"+"address is:"+address+"\n"+"amount is:"+amount+"\n"+ "phone name:"+phone );
		}
		public void red5( int date,String name,int id,String phone,long point ) {
		 	System.out.println("date is:"+date+"\n"+"he is:"+name+"\n"+"phone name is :"+phone+"\n"+"long numer is:"+point);
		}
		
}

