package object.overload;

public class Person {
    private String name;

    public String getName(){
        return name;
    }
    public void setName(String name){
        this.name = name;
    }
    public void setName(String firstName, String lastName){
        this.name = firstName + " " + lastName;
    }

}
