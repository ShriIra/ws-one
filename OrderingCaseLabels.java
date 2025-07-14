public class OrderingCaseLabels {
    public static void main(String[] args) {
        String s = "Hello";
        String result = ordering2(s);
        System.out.println(result);
    }

    static String getPersonData(Object obj) {
        return switch(obj) {
            case Employee e when e.getSalary() >= 100000 -> "Highly paid with a salary of " + String.format("%f", e.getSalary());
            case Employee e when e.getSalary() < 100000 -> "Not highly paid with a salary of " + String.format("%f", e.getSalary());
            case Employee e -> "The salary is " + String.format("%f", e.getSalary());
            case Student s when s.getMarks() >= 75 -> "Distinction";
            case Student s when s.getMarks() < 75 -> "Not a Distinction";
            default -> "Unknown Type";
        };
    }

    static String ordering(Integer obj) {
        return switch(obj) {
            case 42 -> "The integer is " + 42;
            case Integer i when i == 1 -> "The integer is " + i;
            case Integer i -> "The integer is " + String.format("%d", i); 
        };
    }

    static String ordering2(String obj) {
        return switch(obj) {
            case "Hello" -> "The String has a length of " + "Hello".length();
            case String s when s.length() > 1 -> "The String has a length > 1";
            case String s -> "The String has a length of " + s.length();
        };
    }

}
