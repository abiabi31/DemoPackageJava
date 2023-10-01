package FileHandeling;

import java.io.File;

public class FileCreate {
public static void main(String[] args) {
	File file =new File("D:\\Text\\Test.txt");
	try {
	if(file.createNewFile()) {
		System.out.println("File Created");
	}else {
		System.out.println("File Exist");
	}
	}catch(Exception e) {
		System.out.println("ERROR");
	}
}
}
