package online_exam;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Scanner;

public class AllQuestion {

public void javaScript() {
	        Scanner scanner = new Scanner(System.in);
	        Connection con = null;
	        try {
	            Class.forName("org.postgresql.Driver");
	            con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres?currentSchema=public", "postgres", "postgres");

	            for (int i = 1; i <=10; i++) {
	                System.out.println("Enter the question ?");
	                String question = scanner.nextLine();
	                System.out.println("Enter the option1");
	                String option1 = scanner.nextLine();
	                System.out.println("Enter the option2");
	                String option2 = scanner.nextLine();
	                System.out.println("Enter the option3");
	                String option3 = scanner.nextLine();
	                System.out.println("Enter the option4");
	                String option4 = scanner.nextLine();
	                System.out.println("Answer");
	                String answer = scanner.nextLine();

	                String sql = "INSERT INTO question VALUES(?, ?, ?, ?, ?, ?)";
	                try (PreparedStatement st = con.prepareStatement(sql)) {
	                    st.setString(1, question);
	                    st.setString(2, option1);
	                    st.setString(3, option2);
	                    st.setString(4, option3);
	                    st.setString(5, option4);
	                    st.setString(6, answer);

	                    st.executeUpdate();
	                    System.out.println("Insert complete.");
	                } catch (SQLException e) {
	                    System.out.println("SQL Error: " + e.getMessage());
	                    e.printStackTrace();
	                }
	            }
	        } catch (ClassNotFoundException | SQLException e) {
	            System.out.println("Error: " + e.getMessage());
	            e.printStackTrace();
	        }
	    }
		
public void html() {
			
			 Scanner scanner = new Scanner(System.in);
		        Connection con = null;
		        try {
		            Class.forName("org.postgresql.Driver");
		            con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres?currentSchema=public", "postgres", "postgres");

		            for (int i = 1; i <=10; i++) {
		                System.out.println("Enter the question ?");
		                String question = scanner.nextLine();
		                System.out.println("Enter the option1");
		                String option1 = scanner.nextLine();
		                System.out.println("Enter the option2");
		                String option2 = scanner.nextLine();
		                System.out.println("Enter the option3");
		                String option3 = scanner.nextLine();
		                System.out.println("Enter the option4");
		                String option4 = scanner.nextLine();
		                System.out.println("Answer");
		                String answer = scanner.nextLine();

		                String sql = "INSERT INTO html VALUES(?, ?, ?, ?, ?, ?)";
		                try (PreparedStatement st = con.prepareStatement(sql)) {
		                    st.setString(1, question);
		                    st.setString(2, option1);
		                    st.setString(3, option2);
		                    st.setString(4, option3);
		                    st.setString(5, option4);
		                    st.setString(6, answer);

		                    st.executeUpdate();
		                    System.out.println("Insert complete.");
		                } catch (SQLException e) {
		                    System.out.println("SQL Error: " + e.getMessage());
		                    e.printStackTrace();
		                }
		            }
		        } catch (ClassNotFoundException | SQLException e) {
		            System.out.println("Error: " + e.getMessage());
		            e.printStackTrace();
		        }
		    }
public void sql() {

	

	 Scanner scanner = new Scanner(System.in);
       Connection con = null;
       try {
           Class.forName("org.postgresql.Driver");
           con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres?currentSchema=public", "postgres", "postgres");

           for (int i = 1; i <=10; i++) {
               System.out.println("Enter the question ?");
               String question = scanner.nextLine();
               System.out.println("Enter the option1");
               String option1 = scanner.nextLine();
               System.out.println("Enter the option2");
               String option2 = scanner.nextLine();
               System.out.println("Enter the option3");
               String option3 = scanner.nextLine();
               System.out.println("Enter the option4");
               String option4 = scanner.nextLine();
               System.out.println("Answer");
               String answer = scanner.nextLine();

               String sql = "INSERT INTO sql VALUES(?, ?, ?, ?, ?, ?)";
               try (PreparedStatement st = con.prepareStatement(sql)) {
                   st.setString(1, question);
                   st.setString(2, option1);
                   st.setString(3, option2);
                   st.setString(4, option3);
                   st.setString(5, option4);
                   st.setString(6, answer);

                   st.executeUpdate();
                   System.out.println("Insert complete.");
               } catch (SQLException e) {
                   System.out.println("SQL Error: " + e.getMessage());
                   e.printStackTrace();
               }
           }
       } catch (ClassNotFoundException | SQLException e) {
           System.out.println("Error: " + e.getMessage());
           e.printStackTrace();
       }
   }
			
public void java() {

	

	 Scanner scanner = new Scanner(System.in);
       Connection con = null;
       try {
           Class.forName("org.postgresql.Driver");
           con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres?currentSchema=public", "postgres", "postgres");

           for (int i = 1; i <=10; i++) {
               System.out.println("Enter the question ?");
               String question = scanner.nextLine();
               System.out.println("Enter the option1");
               String option1 = scanner.nextLine();
               System.out.println("Enter the option2");
               String option2 = scanner.nextLine();
               System.out.println("Enter the option3");
               String option3 = scanner.nextLine();
               System.out.println("Enter the option4");
               String option4 = scanner.nextLine();
               System.out.println("Answer");
               String answer = scanner.nextLine();

               String sql = "INSERT INTO java VALUES(?, ?, ?, ?, ?, ?)";
               try (PreparedStatement st = con.prepareStatement(sql)) {
                   st.setString(1, question);
                   st.setString(2, option1);
                   st.setString(3, option2);
                   st.setString(4, option3);
                   st.setString(5, option4);
                   st.setString(6, answer);

                   st.executeUpdate();
                   System.out.println("Insert complete.");
               } catch (SQLException e) {
                   System.out.println("SQL Error: " + e.getMessage());
                   e.printStackTrace();
               }
           }
       } catch (ClassNotFoundException | SQLException e) {
           System.out.println("Error: " + e.getMessage());
           e.printStackTrace();
       }
   }
	
public void python () {
	  Scanner scanner = new Scanner(System.in);
       Connection con = null;
       try {
           Class.forName("org.postgresql.Driver");
           con = DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres?currentSchema=public", "postgres", "postgres");

           for (int i = 1; i <=10; i++) {
               System.out.println("Enter the question ?");
               String question = scanner.nextLine();
               System.out.println("Enter the option1");
               String option1 = scanner.nextLine();
               System.out.println("Enter the option2");
               String option2 = scanner.nextLine();
               System.out.println("Enter the option3");
               String option3 = scanner.nextLine();
               System.out.println("Enter the option4");
               String option4 = scanner.nextLine();
               System.out.println("Answer");
               String answer = scanner.nextLine();

               String sql = "INSERT INTO python  VALUES(?, ?, ?, ?, ?, ?)";
               try (PreparedStatement st = con.prepareStatement(sql)) {
                   st.setString(1, question);
                   st.setString(2, option1);
                   st.setString(3, option2);
                   st.setString(4, option3);
                   st.setString(5, option4);
                   st.setString(6, answer);

                   st.executeUpdate();
                   System.out.println("Insert complete.");
               } catch (SQLException e) {
                   System.out.println("SQL Error: " + e.getMessage());
                   e.printStackTrace();
               }
           }
       } catch (ClassNotFoundException | SQLException e) {
           System.out.println("Error: " + e.getMessage());
           e.printStackTrace();
       }
   }

			
		}
		
		
	


