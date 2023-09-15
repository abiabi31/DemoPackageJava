package abii;

public class Fire1 {
	//for loop//
	public void air1() {
	for(int a=0;a<10;a++) {
		if(a==5) {
			break;
		}
		System.out.println(a);
		}
	int b=0;
	do {
		b++; 
		if(b==5) {
			continue;	
		}
		System.out.println(b);
		}while(b<10);
		
	int c=0;
	while(c<5){
		c++;
		System.out.println(c);
	}
	}
	 public static void main(String[] args) {
		Fire1 fire1 =new Fire1();
		fire1.air1();
	}
}
