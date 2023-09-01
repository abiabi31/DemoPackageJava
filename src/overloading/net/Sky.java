package overloading.net;
// data type order//
public class Sky {

		public void flower (int number,double volu,String name ) {
			System.out.println("number is:"+number+"double:"+volu+"string name:"+name);
		}
		public void flowe1(long phone,String name,double number ) {
			System.out.println( "phone is:"+phone+"\n"+"name is:"+name+"\n"+"double is:"+number);
		   

		}
		public void flower2(String name,double d,int volu ) {
			System.out.println( "String is:"+name+"\n"+"float is:"+d+"\n"+"int is"+volu);

		} public static void main(String[] args) {
			Sky sky=new Sky();
			sky.flower(20,22.333d,"abi");
			
           sky.flowe1(2222l,"aas",333.33d);
             sky.flower2("as", 22.22,20);
		
		}

	}



