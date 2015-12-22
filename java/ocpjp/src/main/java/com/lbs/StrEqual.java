package com.lbs;

public class StrEqual{
    public void strEqual(){
	String s1 = "hi";
	String s2 = new String("hi");
	String s3 = "hi";

	System.out.println(s1==s2);
	System.out.println(s1==s3);
	System.out.println(s2==s3);
    }
}
