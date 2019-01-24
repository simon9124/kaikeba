package dataType;

public class Float {
    public static void main(String[] args) {
        double a = 0.1;
        double b = 1 - 9.0 / 10;
        System.out.println(a);
        System.out.println(b);
        // 没有自动提升
        double d1 = 1.2 + 24.0 / 5; // 1.2 + 4.8
        double d2 = 1.2 + 24 / 5;   // 1.2 + 4
        System.out.println(d1);
        System.out.println(d2);
    }
}