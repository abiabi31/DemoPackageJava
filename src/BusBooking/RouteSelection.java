package BusBooking;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Scanner;

public class RouteSelection{
	    public void route(){
	        try {
	            Connection connection = DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres?currentSchema=abish","postgres","postgres");
	            // Display available buses
	            displayAvailableplaces(connection);

	            Scanner scanner = new Scanner(System.in);
	   
	            System.out.print(" 🗺🗺 Selet  The Place 🗺🗺  : ");
	            int selectedid = scanner.nextInt();

	            if (isPlaceAvailable(connection, selectedid, null)) {
	                bookPlace(connection, selectedid);
	                System.out.println("😃😃 Place Selected Successfully 😃😃");
	            } else {
	                System.out.println("☹☹ Sorry!!! Place Not Available ☹☹");
	            }
	            
	            connection.close();

	        } catch (SQLException e) {
	            e.printStackTrace();
	        }
	    }
    
	    private static void displayAvailableplaces(Connection connection) throws SQLException {
	        String query = "SELECT * FROM place";
	        PreparedStatement preparedStatement = connection.prepareStatement(query);
	        ResultSet resultSet = preparedStatement.executeQuery();
	         System.out.println("");
	        System.out.println("            🗺🗺 Available Place 🗺🗺:");
	        System.out.println("");
	        System.out.println("id\torigin\t\t\t destination\tclock");

	        while (resultSet.next()) {
	            int id = resultSet.getInt("id");
	            String origin = resultSet.getString("origin");
	            String destination = resultSet.getString("destination");
	            String clock = resultSet.getString("clock");
	            
	            System.out.println(id + "\t" + origin + "\t\t" + destination + "\t\t" + clock);
	        }

	        System.out.println();
	        resultSet.close();
	        preparedStatement.close();
	    }

	    private static boolean isPlaceAvailable(Connection connection, int id,String origin ) throws SQLException {
	        String query = "SELECT availableplace FROM place WHERE id = ?";
	        String sq = "INSERT INTO final (username) VALUES (?)";
	        PreparedStatement preparedStatement = connection.prepareStatement(query);
	        preparedStatement.setInt(1, id);
	       
	        ResultSet resultSet = preparedStatement.executeQuery();

	        
             PreparedStatement preparedStatemen = connection.prepareStatement(sq);
             preparedStatemen.setString(1, origin);
                int rowsAffected = preparedStatemen.executeUpdate();
	        
	        
	        
	        
	        
	        if (resultSet.next()) {
	            int availableplace = resultSet.getInt("availableplace");
	            return availableplace >= 0;
	        }

	        resultSet.close();
	        preparedStatement.close();
	        return false;
	    }

	    private static void bookPlace(Connection connection, int id) throws SQLException {
	      
	        String updateQuery = "UPDATE  place SET availableplace = availableplace + 1 WHERE id = ?";
	        PreparedStatement updateStatement = connection.prepareStatement(updateQuery);
	        updateStatement.setInt(1, id);
	        updateStatement.executeUpdate();
	        updateStatement.close();

	        // Insert a new ticket record into the tickets table
//	        String insertQuery = "INSERT INTO tickets (bus_id) VALUES (?)";
//	        PreparedStatement insertStatement = connection.prepareStatement(insertQuery);
//	        insertStatement.setInt(1, id);
//	        insertStatement.executeUpdate();
//	        insertStatement.close();
		}
	}
