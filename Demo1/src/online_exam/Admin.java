package online_exam;

import java.util.Scanner;

public class Admin {
		public void option() {
			System.out.println("1,student details . 2,qustion edit");
			Scanner scanner=new Scanner(System.in);
			int num=scanner.nextInt();
			
			if(num==1) {
				System.out.println("im student");
			}
			else if(num==2) {
				Admin am=new Admin();
				am.edit_qustion();
			}			
		}	
public void edit_qustion() {
	Scanner scanner=new Scanner(System.in);
	System.out.println("edit the qustion=1.javaScript, 2.html, 3.sql, 4.java, 5.paython");
	int num1=scanner.nextInt();
	
	if(num1==1) {
		AllQuestion jq=new AllQuestion();
		jq.javaScript();
	}else if(num1==2) {
		AllQuestion html=new AllQuestion();
		html.html();
	}
	else if(num1==3) {
		AllQuestion sql=new AllQuestion();
		sql.sql();
	}
	else if(num1==4) {
		AllQuestion java=new AllQuestion();
		java.java();
	}
	else if(num1==5) {
		AllQuestion python=new AllQuestion();
		python.python();
	}
	else {
		System.err.println("error");
	}
}
	
	
	
		
}
