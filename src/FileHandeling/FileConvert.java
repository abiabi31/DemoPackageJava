package FileHandeling;


import java.io.FileWriter;

public class FileConvert {
	public static void main(String[] args) {
		 try {
			 FileWriter file =new FileWriter("D:\\Text\\Test1.xlsx");
			 file.write(" abi scisahcoas sshdoishciocs");
			 file.close();
			 System.out.println("Succesfully Written To File");
		 }catch(Exception e){
			 System.out.println("error");
			 
		}
		}
		

		 
		 
}

