public class ClassLoaderTest extends ClassLoader {
    public static void main (String[] args){
	ClassLoader classLoader = ClassLoaderTest.class.getClassLoader();
	try{
	    Class aClass = classLoader.loadClass("PowDemo");
	    System.out.println("aClass.getName()=" + aClass.getName());
	}catch(ClassNotFoundException e) {
	    e.printStackTrace();
	}
    }
}
