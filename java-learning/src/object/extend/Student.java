package object.extend;

public class Student extends  Person{
    //父类有构造方法 -> 子类必须添加方法并调用父类的构造方法
    public Student(String name){
        super(name);
    }

    private int score;
    public int getScore(){
        return score;
    }
    public void setScore(int score){
        this.score = score;
    }
    public String hello(){
        return "Hello, " + this.name;
    }
}
