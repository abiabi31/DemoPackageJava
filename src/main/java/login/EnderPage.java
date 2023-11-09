package login;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;


public class EnderPage extends HttpServlet {
	private static final long serialVersionUID = 1L;
    public EnderPage() {
        super();
    }
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
         
//		String fistname = request.getParameter("fistname");
//		String lastname = request.getParameter("lastname");
//		String gender = request.getParameter("gender");
//		String age = request.getParameter("age");
//		String number= request.getParameter("number");
//		String email= request.getParameter("email");
//		
//		
//		request.setAttribute("fistname1", fistname);

//		RequestDispatcher dispatcher = request.getRequestDispatcher("pdf.jsp");
//	    dispatcher.forward(request, response);	  
	}
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		doGet(request, response);
	}
}
