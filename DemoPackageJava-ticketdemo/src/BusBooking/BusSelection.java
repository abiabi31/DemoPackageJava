package BusBooking;
import java.sql.*;
import java.util.Scanner;
public class BusSelection {
	  public void bus(){
	        try {
	            Connection connection = DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres?currentSchema=abish","postgres","postgres");
	            displayAvailablebuses(connection);
	            Scanner scanner = new Scanner(System.in);
	            System.out.print("              🚍🚍 Selet  The bus 🚍🚍  ");
	            int selectedid = scanner.nextInt();
	            switch(selectedid) {
	            case 1:
	            	Bethlahem bethla = new Bethlahem();
	            	bethla.bethlahem();	            	
	            case 2:
	            	Tippusulthan tippu  = new Tippusulthan();
	            	tippu.tippusulthan();	
	            case 3: 
	            	Tranzindia tran  = new Tranzindia();
	            	tran.tranzindia();
	            case 4:
	            	Vinotravels vino  = new Vinotravels();
	            	vino.vinotravels();
	            }
	            if (isbusesAvailable(connection, selectedid)) {
	                bookbuses(connection, selectedid);
	                System.out.println("😃😃 Bus Selected Successfully 😃😃");
	            } else {
	                System.out.println("Bus Not available");
	            }	           
	            connection.close();
	            
	        } catch (SQLException e) {
	            e.printStackTrace();
	        }
	    }
	    private static void displayAvailablebuses(Connection connection) throws SQLException {
	        String query = "SELECT * FROM buses";
	        PreparedStatement preparedStatement = connection.prepareStatement(query);
	        ResultSet resultSet = preparedStatement.executeQuery();
	        System.out.println(" ");
	        System.out.println("             🚍🚍 Available bus 🚍🚍:");
	        System.out.println(" ");
	        System.out.println("id\tbusname");
	        System.out.println("");
	        while (resultSet.next()) {
	            int id = resultSet.getInt("id");
	            String busname= resultSet.getString("busname");	            
	            System.out.println(id + "\t" + busname );
	        }
	        System.out.println();
	        resultSet.close();
	        preparedStatement.close();
	    }
	    private static boolean isbusesAvailable(Connection connection, int id) throws SQLException {
	        String query = "SELECT availablebuses FROM buses WHERE id = ?";
	        PreparedStatement preparedStatement = connection.prepareStatement(query);
	        preparedStatement.setInt(1, id);
	        ResultSet resultSet = preparedStatement.executeQuery();
	        if (resultSet.next()) {
	            int availablebuses= resultSet.getInt("availablebuses");
	            return availablebuses >= 0;
	        }
	        resultSet.close();
	        preparedStatement.close();
	        return false;
	    }
	    private static void bookbuses(Connection connection, int id) throws SQLException {
	        String updateQuery = "UPDATE  buses SET availablebuses = availablebuses + 1 WHERE id = ?";
	        PreparedStatement updateStatement = connection.prepareStatement(updateQuery);
	        updateStatement.setInt(1, id);
	        updateStatement.executeUpdate();
	        updateStatement.close();
	    }
	
		}


