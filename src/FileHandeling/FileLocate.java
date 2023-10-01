package FileHandeling;

import java.io.File;

public class FileLocate {
public static void main(String[] args) {
	try {
	File file=new File("D:\\Text\\Test.txt");
	if(file.exists()) {
		System.out.println("irruku");
	}else {
		System.out.println("illah");
	}
	}catch(Exception e) {
		System.out.println("Error");
	}
}
}
