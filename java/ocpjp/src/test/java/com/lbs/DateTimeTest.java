package com.lbs;
import java.text.SimpleDateFormat;
import java.util.Date;
import org.junit.Test;


public class DateTimeTest{

    @Test
    public void formateTest(){
	Date today;
	String output;
	SimpleDateFormat formatter;
	String currentLocale="zh_CN";
	String pattern = "yyyy-MM-dd hh:mm:ss";
	formatter = new SimpleDateFormat(pattern);
	today = new Date();
	output = formatter.format(today);
	System.out.println(pattern + " " + output);

    }

}
