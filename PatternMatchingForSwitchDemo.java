public class PatternMatchingForSwitchDemo {
    public static void main(String[] args) {
        // Person p1 = new Employee(75000);
        Person p1 = null;
        String data = getPersonData(p1);
        System.out.println(data);

        // Person p2 = new Student(70);
        // String data1 = getPersonData(p2);
        // System.out.println(data1);

    }

    static String getPersonData(Object obj) {
        return switch(obj) {
            case null -> "null";
            case Employee e -> String.format("%f", e.getSalary());
            case Student s -> String.format("%s", s.getMarks());
            default -> "Unknown Type";
        };
    }
}
