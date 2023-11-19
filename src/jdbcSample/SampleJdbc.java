package jdbcSample;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

public class SampleJdbc {	
	   public static void main(String args[])throws Exception {     
	      try {
	         Class.forName("org.postgresql.Driver");
	       Connection c = DriverManager.getConnection("jdbc:postgresql://localhost:5432/postgres?currentSchema=abish",
	            "postgres", "postgres");
	       Statement st= c.createStatement();       
               // set the values   
	        String ins= "insert into student (name,id,address)values('shalom',02,'kanavoor')";
                // name deleted
//	        String is="delete from student where id='2'";
	          //name change ;
//	        String iss="update student set name='vino' where name='shalom'";
               // data deleted;
//	        String isss=  "truncate student ";
                // column deleted;
//	        String as=  "Alter  student drop abish";
//	        table delete
//	        String ass=  "drop student "     	                
	        st.executeUpdate(ins);
//	        st.executeUpdate(is);
//	        st.executeUpdate(iss);
//	        st.executeUpdate(isss);
//	        st.executeUpdate(as);
//	        st.executeUpdate(ass);
	        System.out.println("inserted successfully");
	        c.close();	        
	      } catch (Exception e) {
	    	  e.printStackTrace();	         
	      }	   
	}
}
