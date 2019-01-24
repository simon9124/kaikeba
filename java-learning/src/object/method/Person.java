package object.method;

public class Person {
    private String name;
    private int age;

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
    //private方法必须由其他public方法调用
    private int calcBirth(int currentYear){
        return currentYear - this.age;
    }
    public int getBirth(){
        return calcBirth(2016);
    }
}
