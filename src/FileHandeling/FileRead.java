package FileHandeling;
import java.io.File;
import java.util.Scanner;

public class FileRead {
	public static void main(String[] args) {
 try {
	 File file =new File("D:\\Text\\Test1.xlsx");
	 Scanner scanner=new Scanner(file) ;
	 while (scanner.hasNextLine()) {
		 System.out.println(scanner.nextLine());	 
	 }scanner.close();
 }catch(Exception e){
	 System.out.println("error");
	 
 }
}
}