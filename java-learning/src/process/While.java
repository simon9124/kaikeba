package process;

public class While {
    public static void main(String[] args){
        int sum = 0;
        int n = 1;
        while(n < 10){
            sum += n;
            n++;
        }
        System.out.println(n);
        System.out.println(sum);
    }
}
