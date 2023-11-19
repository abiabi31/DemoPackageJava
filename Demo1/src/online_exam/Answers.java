package online_exam;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Scanner;

public class Answers {
public void js_Answer ()  throws Exception {
		   
	    Scanner scanner = new Scanner(System.in);
	    int score = 0; 

	    try (Connection connection = DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres?currentSchema=public","postgres","postgres")) {
	        String sql = "SELECT question, option1, option2, option3, option4, answer FROM question";
	        try (PreparedStatement statement = connection.prepareStatement(sql);
	             ResultSet resultSet = statement.executeQuery()) {

	            while (resultSet.next()) {
	                String question = resultSet.getString("question");
	                String option1 = resultSet.getString("option1");
	                String option2 = resultSet.getString("option2");
	                String option3 = resultSet.getString("option3");
	                String option4 = resultSet.getString("option4");
	                String answer = resultSet.getString("answer");

	                System.out.println("Question: " + question);
	                System.out.println("Options: " + option1 + "\n " + option2 + "\n " + option3 + "\n " + option4);
	                String userAnswer = scanner.nextLine();

	                if (answer.equalsIgnoreCase(userAnswer)) {
	                    score++;
	                    
	                } else {
	                   
	                }
	               			
	        	Connection con=DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres?currentSchema=public","postgres","postgres");
	        	PreparedStatement st=con.prepareStatement("update onlinexam set mark=? where id =?");	
	        	st.setInt(1, score);
	           st.setInt(2, 61512);
	            }
	            System.out.println("mark "+score);
	System.out.println("exam over");
	          
	        }scanner.close();
	    } catch (SQLException e) {
	        e.printStackTrace();
	    }
	}

public void html_answer() {
		  Scanner scanner = new Scanner(System.in);
		    int score = 0; 

		    try (Connection connection = DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres?currentSchema=public","postgres","postgres")) {
		        String sql = "SELECT question, option1, option2, option3, option4, answer FROM html";
		        try (PreparedStatement statement = connection.prepareStatement(sql);
		             ResultSet resultSet = statement.executeQuery()) {

		            while (resultSet.next()) {
		                String question = resultSet.getString("question");
		                String option1 = resultSet.getString("option1");
		                String option2 = resultSet.getString("option2");
		                String option3 = resultSet.getString("option3");
		                String option4 = resultSet.getString("option4");
		                String answer = resultSet.getString("answer");

		                System.out.println("Question: " + question);
		                System.out.println("Options: " + option1 + "\n" + option2 + "\n " + option3 + "\n " + option4);
		                String userAnswer = scanner.nextLine();

		                if (answer.equalsIgnoreCase(userAnswer)) {
		                    score++;
		                    
		                } else {
		                   
		                }
		               			
		        	Connection con=DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres?currentSchema=public","postgres","postgres");
		        	PreparedStatement st=con.prepareStatement("update onlinexam set mark=? where id =?");	
		        	st.setInt(1, score);
		           st.setInt(2, 61512);
		            }
		            System.out.println("mark "+score);
		System.out.println("exam over");
		          
		        }scanner.close();
		    } catch (SQLException e) {
		        e.printStackTrace();
		    }
	}
	
	
public void sql_Answer() {
		  Scanner scanner = new Scanner(System.in);
		    int score = 0; 

		    try (Connection connection = DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres?currentSchema=public","postgres","postgres")) {
		        String sql = "SELECT question, option1, option2, option3, option4, answer FROM sql";
		        try (PreparedStatement statement = connection.prepareStatement(sql);
		             ResultSet resultSet = statement.executeQuery()) {

		            while (resultSet.next()) {
		                String question = resultSet.getString("question");
		                String option1 = resultSet.getString("option1");
		                String option2 = resultSet.getString("option2");
		                String option3 = resultSet.getString("option3");
		                String option4 = resultSet.getString("option4");
		                String answer = resultSet.getString("answer");

		                System.out.println("Question: " + question);
		                System.out.println("Options: " + option1 + "\n " + option2 + "\n" + option3 + "\n" + option4);
		                String userAnswer = scanner.nextLine();

		                if (answer.equalsIgnoreCase(userAnswer)) {
		                    score++;
		                    
		                } else {
		                   
		                }
		               			
		        	Connection con=DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres?currentSchema=public","postgres","postgres");
		        	PreparedStatement st=con.prepareStatement("update onlinexam set mark=? where id =?");	
		        	st.setInt(1, score);
		           st.setInt(2, 61512);
		            }
		            System.out.println("mark "+score);
		System.out.println("exam over");
		          
		        }scanner.close();
		    } catch (SQLException e) {
		        e.printStackTrace();
		    }
	}
	
public void java_Answer() {
		  Scanner scanner = new Scanner(System.in);
		    int score = 0; 

		    try (Connection connection = DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres?currentSchema=public","postgres","postgres")) {
		        String sql = "SELECT question, option1, option2, option3, option4, answer FROM java";
		        try (PreparedStatement statement = connection.prepareStatement(sql);
		             ResultSet resultSet = statement.executeQuery()) {

		            while (resultSet.next()) {
		                String question = resultSet.getString("question");
		                String option1 = resultSet.getString("option1");
		                String option2 = resultSet.getString("option2");
		                String option3 = resultSet.getString("option3");
		                String option4 = resultSet.getString("option4");
		                String answer = resultSet.getString("answer");

		                System.out.println("Question: " + question);
		                System.out.println("Options: " + option1 + "\n " + option2 + "\n" + option3 + "\n " + option4);
		                String userAnswer = scanner.nextLine();

		                if (answer.equalsIgnoreCase(userAnswer)) {
		                    score++;
		                    
		                } else {
		                   
		                }
		               			
		        	Connection con=DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres?currentSchema=public","postgres","postgres");
		        	PreparedStatement st=con.prepareStatement("update onlinexam set mark=? where id =?");	
		        	st.setInt(1, score);
		           st.setInt(2, 61512);
		            }
		            System.out.println("mark "+score);
		System.out.println("exam over");
		          
		        }scanner.close();
		    } catch (SQLException e) {
		        e.printStackTrace();
		    }
	}
public void python_Answer() {
	  Scanner scanner = new Scanner(System.in);
	    int score = 0; 

	    try (Connection connection = DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres?currentSchema=public","postgres","postgres")) {
	        String sql = "SELECT question, option1, option2, option3, option4, answer FROM python";
	        try (PreparedStatement statement = connection.prepareStatement(sql);
	             ResultSet resultSet = statement.executeQuery()) {

	            while (resultSet.next()) {
	                String question = resultSet.getString("question");
	                String option1 = resultSet.getString("option1");
	                String option2 = resultSet.getString("option2");
	                String option3 = resultSet.getString("option3");
	                String option4 = resultSet.getString("option4");
	                String answer = resultSet.getString("answer");

	                System.out.println("Question: " + question);
	                System.out.println("Options: " + option1 + "\n " + option2 + "\n" + option3 + "\n " + option4);
	                String userAnswer = scanner.nextLine();

	                if (answer.equalsIgnoreCase(userAnswer)) {
	                    score++;
	                    
	                } else {
	                   
	                }
	               			
	        	Connection con=DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres?currentSchema=public","postgres","postgres");
	        	PreparedStatement st=con.prepareStatement("update onlinexam set mark=? where id =?");	
	        	st.setInt(1, score);
	           st.setInt(2, 61512);
	            }
	            System.out.println("mark "+score);
	System.out.println("exam over");
	          
	        }scanner.close();
	    } catch (SQLException e) {
	        e.printStackTrace();
	    }
}
	
	
}
