package BusBooking;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.Scanner;
public class Registration   {

	    public void registration() {
	        Scanner scanner = new Scanner(System.in);

	        System.out.println(      " ");      
	        System.out.println(       " ✍✍✍ Enter your details ✍✍✍");
	        System.out.print("Username: ");
	        String username = scanner.nextLine();

	        System.out.print("Password: ");
	        String password = scanner.nextLine();
	        
	        String jdbcUrl = "jdbc:postgresql://localhost:5432/postgres?currentSchema=abish";
	        String dbUser = "postgres";
	        String dbPassword = "postgres";
	        
	        try (Connection connection = DriverManager.getConnection(jdbcUrl, dbUser, dbPassword)) {

	            String sql = "INSERT INTO login (username, password) VALUES (?, ?)";
	            try (PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
	                preparedStatement.setString(1, username);
	                preparedStatement.setString(2, password);

	                int rowsAffected = preparedStatement.executeUpdate();

	                if (rowsAffected > 0) {
	                	System.out.println("  ");
	                    System.out.println("😃😃Registration successful😃😃");
	                } else {
	                	System.out.println("  ");
	                    System.out.println("☹☹Registration failed. Please try again☹☹");
	                }
	            }
	        } catch (SQLException e) {
	            e.printStackTrace();
	            scanner.close();
	        }
	    }
	}
