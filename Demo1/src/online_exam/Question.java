package online_exam;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Scanner;

public class Question {
public void question() throws Exception  {
	Scanner scanner=new Scanner(System.in);
	System.out.println(" welcom to exam!!!");
	System.out.println("select the exam: 1,javaScript"+"\n"+" 2,html"+"\n"+" 3,sql"+"\n"+" 4,java"+"\n"+" 5,python");
	int num=scanner.nextInt();
	if(num==1) {
		Answers qt=new Answers();
		qt.js_Answer();
		
	}
	else if(num==2) {
		Answers html=new Answers();
		html.html_answer();
		
	}
	else if(num==3) {
		Answers sql=new Answers();
		sql.sql_Answer();
	}
	else if(num==4) {
		Answers java=new Answers();
		java.java_Answer();
	}
	else if(num==5) {
		Answers python=new Answers();
		python.python_Answer();
}


}
}
