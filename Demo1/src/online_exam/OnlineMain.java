package online_exam;

import java.util.Scanner;

public class OnlineMain {

	public static void main(String[] args) throws Exception {

		Scanner scanner=new Scanner(System.in);
		System.out.println("1 is register,2 is Login");
		int num=scanner.nextInt();
	
		if(num==1) {
			Register rg=new Register();
			rg.creatMethod();
		}
		else if(num==2) {
			LoginPage lg=new LoginPage();
			lg.loginMain();
		}
		
		
		
		
		
		scanner.close();
	}

}

