package FileHandeling;

import java.io.FileWriter;

public class FileWrite {
public static void main(String[] args) {
 try {
	 FileWriter file =new FileWriter("D:\\Text\\Test.txt");
	 file.write(" abi");
	 file.close();
	 System.out.println("Succesfully Written To File");
 }catch(Exception e){
	 System.out.println("error");
	 
}
}
}
