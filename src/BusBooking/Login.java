package BusBooking;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Scanner;

public class Login {
    public void login () {
        Scanner scanner = new Scanner(System.in);
        System.out.println("  ");
        System.out.println("✍✍✍");
        System.out.println("Enter your username:");
        String username = scanner.nextLine();

        System.out.println("Enter your password:");
        String password = scanner.nextLine();

        if (validateUser(username, password)) {
        	System.out.println("  ");
            System.out.println("😃😃Login successful!😃😃");
        } else {
        	System.out.println("  ");
            System.out.println("☹☹Invalid username or password☹☹");
        }
       
    }
    private static boolean validateUser(String username, String password) {  	  
        String jdbcUrl = "jdbc:postgresql://localhost:5432/postgres?currentSchema=abish";
        String dbUser = "postgres";
        String dbPassword = "postgres";
        
        try (Connection connection = DriverManager.getConnection(jdbcUrl, dbUser, dbPassword)) {
            String sql = "SELECT * FROM login WHERE username = ? AND password = ?";
            
            
            ////////
            String sq = "INSERT INTO final (username) VALUES (?)";
            try (PreparedStatement preparedStatement = connection.prepareStatement(sq)) {
                preparedStatement.setString(1, username);
                int rowsAffected = preparedStatement.executeUpdate();
                
            ////////    
                
            try (PreparedStatement statement = connection.prepareStatement(sql)) {
                statement.setString(1, username);
                statement.setString(2, password);

                try (ResultSet resultSet = statement.executeQuery()) {
                    return resultSet.next();
                }
            }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return false;
    }

    }
	


