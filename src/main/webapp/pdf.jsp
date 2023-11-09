<!DOCTYPE html>
<html>
<head>
    <title>Result Page</title>
</head>
<body>
    <%
    
        // Get the user input from the request
        String fistname = request.getParameter("fistname");
        String lastname = request.getParameter("lastname");
		String gender = request.getParameter("gender");
		String age = request.getParameter("age");
		String number= request.getParameter("number");
		String email= request.getParameter("email");
		String tamil= request.getParameter("tamil");		
    %>
  
    <h2>fistname: <%= fistname %></h2>
    <h2>lastname:<%= lastname %></h2>
    <h2>gender:<%= gender %></h2>
    <h2>age:<%= age %></h2>
    <h2>number:<%= number %></h2>
    <h2>email:<%= email %></h2>
    <h2>Language :<%= tamil %></h2>
    <button type="submit"  value="submit">pdf download</button>
        
</body>
</html>
