package object.prototype;

public class Person {
    private String name;
    private int age;

    //定义方法
    public String getName(){
        return name;
    }

    //定义构造方法
    public Person(String name, int age){
        this.name = name;
        this.age = age;
    }
    public Person(){
        this.name = "Unnamed";
        this.age = 20;
    }

}
