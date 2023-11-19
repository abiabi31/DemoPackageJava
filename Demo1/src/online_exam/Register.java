package online_exam;

import java.util.Scanner;
import java.sql.*;
//import java.sql.DriverManager;
//import java.sql.PreparedStatement;
//import java.sql.SQLException;
//import java.sql.Statement;
//import java.util.Scanner;
//import 	java.sql.Connection;


public class Register {


public void creatMethod() throws ClassNotFoundException {
	Scanner scanner=new Scanner(System.in);
	System.out.println("name:");
	String name=scanner.nextLine();
	System.out.println("id:");
	int id=scanner.nextInt();
	scanner.nextLine();
	String address;
  System.out.println("address:");
  address=scanner.nextLine();

  System.out.println("mobile:");
  String mobile=scanner.nextLine();
    System.out.println("email :");
    String email=scanner.nextLine();
  
    System.out.println("username:");
    String username=scanner.nextLine();
    System.out.println("password:");
    String password=scanner.nextLine();
    
   // System.out.println("complete");
	try {
		
		
			Class.forName("org.postgresql.Driver");
		
		
			
	Connection con=DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres?currentSchema=public","postgres","postgres");
	String sql="insert into exam values(?,?,?,?,?,?,?)";
	
	PreparedStatement st=con.prepareStatement(sql);	
	
   st.setString(1, name);
   st.setInt(2, id);
   st.setString(3, address);
	st.setString(4, mobile);
	st.setString(5, email);
	st.setString(6, username);
	st.setString(7, password);
	
	st.executeUpdate();
	System.out.println("insert complete.");
	LoginPage lp=new LoginPage();
	lp.login();
	
	}
	catch(SQLException e) {
		e.printStackTrace();
		
	}
	
	
	
	
}
}


