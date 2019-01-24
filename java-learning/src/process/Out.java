package process;

public class Out {
    public static void main(String[] args) {
        double d = 3.1415926;
        System.out.println(d);
        // 保留2位小数
        System.out.printf("PI = %.2f\n", d);
        // 自动填充到7位
        System.out.printf("PI = %7.2f\n", d);
    }
}