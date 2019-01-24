package object.prototype;

public class Main {
    public static void main(String[] args){
        //调用构造方法，并传参
        Person ming = new Person("小明", 17);
        System.out.println(ming.getName());
        //调用默认构造方法
        Person hong = new Person();
        System.out.println(hong.getName());
    }
}
