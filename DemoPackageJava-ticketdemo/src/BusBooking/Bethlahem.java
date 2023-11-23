package BusBooking;
import java.sql.*;
import java.util.Scanner;
public class Bethlahem {
	
		    private static final String DB_URL = "jdbc:postgresql://localhost:5432/postgres?currentSchema=abish";
		    private static final String USER = "postgres";
		    private static final String PASSWORD = "postgres";

		        public void bethlahem() {
		            try {
		                Connection connection = DriverManager.getConnection(DB_URL, USER, PASSWORD);
		                Scanner scanner = new Scanner(System.in);

		                System.out.print("            👇👇 Press Any Key To Continue To Book Your Seat  👇👇");
		                int id = scanner.nextInt();
		                displayAvailableseat(connection, id);
		                int id1 = scanner.nextInt();
		                
		                deleteBookedSeat(connection, id1);

		                connection.close();
		               
		            } catch (SQLException e) {
		                e.printStackTrace();
		            }
		        }
				private static void displayAvailableseat(Connection connection,int id) throws SQLException {
			        String query = "SELECT * FROM bethlahem";
			        PreparedStatement preparedStatement = connection.prepareStatement(query);
			        ResultSet resultSet = preparedStatement.executeQuery();
			         System.out.println("");
			        System.out.println("             🪑🪑 Available Seat 🪑🪑");
			        System.out.println("");
			        System.out.println("******************************************");
			        while (resultSet.next()) {
			            int id1 = resultSet.getInt("id");
			            String seat = resultSet.getString("seat");
			            int price = resultSet.getInt("price");
			            
			            System.out.println("**"+ "    "+id1 + "\t" + seat + "\t\t "
			            		+ "$" + price+ "  "+"**" );
			          
			        }
			        System.out.println("******************************************");
			        System.out.println("                   👇👇 Please Select Your Seat 👇👇");
			        resultSet.close();
			        preparedStatement.close();
			    }
		        private static void deleteBookedSeat(Connection connection, int id) throws SQLException {
		            PreparedStatement preparedStatement = connection.prepareStatement(
		                    "DELETE FROM bethlahem WHERE id = ?");

		            preparedStatement.setInt(1, id);

		            int rowsAffected = preparedStatement.executeUpdate();
		            if (rowsAffected > 0) {
		                System.out.println("😊😊 Booked successfully 😊😊");
		            } else {
		                System.out.println("😐😐 The Seat You Entered Is Already Booked 😐😐");
		            }
		        }
		    }

