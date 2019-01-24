package array;

import java.util.Arrays;

public class Args {
    public static void main(String[] args){
        System.out.println("Number of args：" + args.length);
        for(String arg : args){
            System.out.println(arg);
            if("-version".equals(arg)){
                System.out.println("version 1.0");
            }
        }
    }
}
