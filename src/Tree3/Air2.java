package Tree3;

public class Air2 extends Air1 {
	public Air2( int k) {
		 this("abi");
		 System.out.println(k);
	 }
	 public Air2(String l ) {
		this("abi",22,33.22d,22l);
		 System.out.println( "This is "+l);
	 }
	 public Air2 (String m,int n,Double o,long p) {
		 this("abi",22,123l,22.22d,'a');
		 System.out.println("name is:"+"  "+m+"number is:"+n+"   "+"  d is :"+o+" "+p);
	 } public Air2(String q,int r,long s,double t,char u) {
		 super("abi");
		 System.out.println("this is :"+q+" "+"number:"+r+" "+"long number is :"+s+" "+"double is:"+t+"  "+"letter:"+u);
	 }
	 
	 
public static void main(String[] args) {
	Air2 air2=new Air2("default" );
}
   }

