
package online_exam;


	import java.util.Scanner;
	import java.sql.Connection;
	import java.sql.DriverManager;
	import java.sql.PreparedStatement;
	import java.sql.ResultSet;
	import java.util.Scanner;
	
	
	
	public class LoginPage {
		public void loginMain() throws Exception {
			 Scanner scanner = new Scanner(System.in);
			System.out.println("1 is login. 2 is admin");
			int num=scanner.nextInt();
			if(num==1) {
				LoginPage lg=new LoginPage();
				lg.login();
			}
			else if(num==2) {
				System.out.println("password");
				int nuu=scanner.nextInt();
				if(nuu==9087) {
					Admin ad=new Admin();
					ad.option();
				}
				else {
					System.err.println("sry wrong");
				}
			}
			
			
		}
		
		    public void login() {
		  
				
			
		        Scanner scanner = new Scanner(System.in);

		        System.out.println("Enter your username:");
		        String enteredUsername = scanner.next();

		        System.out.println("Enter your password:");
		        String enteredPassword = scanner.next();

		        try {
		        	Class.forName("org.postgresql.Driver");
		      		 Connection con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres?currentSchema=public","postgres","postgres");
		      		 

		            String query = "SELECT * FROM  exam where username = ? AND password= ?";
		            try (PreparedStatement preparedStatement = con.prepareStatement(query)) {
		                preparedStatement.setString(1, enteredUsername);
		                preparedStatement.setString(2, enteredPassword);

		                ResultSet resultSet = preparedStatement.executeQuery();

		                if (resultSet.next()) {
		                    System.out.println("Login successful! Welcome, " + enteredUsername + "!");
		                    Question qn=new Question();
		                    qn.question();
		                } else {
		                    System.out.println("Invalid username or password. Login failed.");
		                }
		            }

		            con.close();
		        } catch (Exception e) {
		            e.printStackTrace();
		        } }
		}