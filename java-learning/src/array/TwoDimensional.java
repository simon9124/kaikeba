package array;

import java.util.Arrays;

public class TwoDimensional {
    public static void main(String[] args){
        int ns[][] = {
                {1,3,5,7,9},
                {2,4,6,8,10},
                {5,10,15,20,25},
                {1,11,111,1111,11111}
        };
        System.out.println(Arrays.toString(ns));
        //遍历二维数组
        System.out.println(Arrays.deepToString(ns));
    }
}
