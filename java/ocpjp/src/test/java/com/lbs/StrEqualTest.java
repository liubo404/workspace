package com.lbs;

import junit.framework.Test;
import junit.framework.TestCase;
import junit.framework.TestSuite;
import com.lbs.*;
/**
 * Unit test for simple App.
 */
public class StrEqualTest 
    extends TestCase
{
    /**
     * Create the test case
     *
     * @param testName name of the test case
     */
    public StrEqualTest( String testName )
    {
        super( testName );
    }

    /**
     * @return the suite of tests being tested
     */
    public static Test suite()
    {
        return new TestSuite( StrEqualTest.class );
    }

    /**
     * Rigourous Test :-)
     */
    public void testApp()
    {
        assertTrue( true );
	StrEqual e = new StrEqual();
	e.strEqual();
    }

    public void testEqual(){
	String s1 = "hi";
	String s2 = new String("hi");
	assertFalse(s1 == s2);
	//	assertEquals(s1,s2);
    }

    public void testEqual2(){
	String s1 = "hi";
	String s2 = new String("hi");
	assertTrue(s1.equals(s2));
    }
}
