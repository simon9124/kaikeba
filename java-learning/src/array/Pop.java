package array;

import java.util.Arrays;

public class Pop {
    public static void main(String[] args){
        //冒泡排序
        int ns[] = {121,2076,96,83,31,23,12331,377,534,763,92};
        for(int i = 0; i < ns.length; i++){
            for(int j = i + 1; j < ns.length; j++){
                if(ns[i] > ns[j]){
                    //交换ns[i]和ns[j]
                    int tmp = ns[j];
                    ns[j] = ns[i];
                    ns[i] = tmp;
                }
            }
        }
        System.out.println(Arrays.toString(ns));
        //JDK API
        int ns2[] = {121,2076,96,83,31,23,12331,377,534,763,92};
        Arrays.sort(ns2);
        System.out.println(Arrays.toString(ns2));
    }
}
