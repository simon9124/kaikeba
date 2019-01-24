package process;

// 导入java.util.Scanner（自动的）
import java.util.Scanner;

public class Input {
    public static void main(String[] args) {
        // 创建Scanner并传入System.in
        Scanner scanner = new Scanner(System.in);
        System.out.print("Input your name:");
        // 使用scanner.nextLine()读取字符串
        String name = scanner.nextLine();
        System.out.print("Input your age:");
        // 使用scanner.nextInt()读取整数
        int age = scanner.nextInt();
        System.out.print("Hello," + name + ", you are " + age);
    }
}