package object.extend;

public class Main {
    public static void main(String[] args){
        //实例化Person()和Student()
        Person p = new Person("Xiao Ming");
        Student s = new Student("Xiao Hong");
        p.setName("Xiao Ming");
        s.setName("Xiao Hong");
        p.run();
        s.run();
        System.out.println(s.hello());

        //向上转型：将Student s转型为Person ps
        Person ps = s;
        ps.run();

        //向下转型：将ps转型为Student ps
        if(ps instanceof Student){
            Student s2 = (Student) ps;
            s2.run();
        }
    }
}
