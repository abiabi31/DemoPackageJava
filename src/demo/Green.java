package demo;

import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

public class Green {
	 public static void main(String[] args) {
		Map<String,Integer>a=new HashMap<>();
		a.put("abi", 20);
		a.put("abish", 120);
		a.put("abias", 220);
		a.put("abiabias", 320);
		System.out.println(a);
		
		Set<Entry<String,Integer> >b =a.entrySet();
		System.out.println(b);
		for(Entry<String,Integer>c:b) {
			System.out.println(c.getKey()+"="+c.getValue());
		}
	}



}
