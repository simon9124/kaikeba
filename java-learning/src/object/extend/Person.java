package object.extend;

public class Person {
    protected String name;
    private int age;

    //父类构造方法
    public Person(String name){
        this.name = name;
    }

    public String getName(){
        return name;
    }
    public void setName(String name){
        this.name = name;
    }
    public int getAge(){
        return age;
    }
    public void setAge(int age){
        this.age = age;
    }
    public void run(){
        System.out.println(name + " is running!");
    }
}
