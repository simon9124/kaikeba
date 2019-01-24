package object.method;

public class Main {
    public static void main(String[] args){
        Person ming = new Person();
        ming.setName("小明");
        ming.setAge(27);

        System.out.println(ming.getName());
        System.out.println(ming.getAge());
        System.out.println(ming.getBirth());
    }
}
