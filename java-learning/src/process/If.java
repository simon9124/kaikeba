package process;

public class If {
    public static void main(String[] args) {
        // 浮点数不能用==判断
        double x = 1 - 9.0/10;
        if(x == 0.1){
            System.out.println("x is 0.1");
        } else {
            System.out.println("x isNot 0.1");
        }
        // 浮点数用Math.abs()判断
        double y = 1 - 9.0/10;
        if(Math.abs(y - 0.1) < 0.0001){
            System.out.println("y is 0.1");
        } else {
            System.out.println("y isNot 0.1");
        }
        // 引用类型：用==判断是否指向同一对象，用equals()判断内容是否相等
        String a = "hello";
        String b = "HELLO".toLowerCase();
        System.out.println(a==b);
        System.out.println(a.equals(b));

        /* 变量为null调用equals()会报错*/
        String s = null;
        //if(s.equals("hello")){
        //    System.out.println("yes");
        //}
        // 法1：利用短路运算符
        if(s != null && s.equals("hello")){
            System.out.println("yes");
        }
        // 法2：非null对象放在前面
        if("hello".equals(s)){
            System.out.println("yes");
        }
    }
}