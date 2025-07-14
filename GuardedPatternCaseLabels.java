public class GuardedPatternCaseLabels {
    public static void main(String[] args) {
        Person p = new Employee(100000);
        String result = getPersonData(p);
        System.out.println(result);
    }

    static String getPersonData(Object obj) {
        // return switch(obj) {
        //     case null -> "null";
        //     case Employee e -> {
        //         if (e.getSalary() >= 100000) {
        //             yield "Highly paid with a salary of " + String.format("%f", e.getSalary());
        //         } else {
        //             yield "Not highly paid. The salary is " + String.format("%f", e.getSalary());
        //         }
        //     }
        //     case Student s -> {
        //         if (s.getMarks() >= 75) {
        //             yield "Distinction";
        //         } else {
        //             yield "Not a Distinction";
        //         }
        //     }
        //     default -> "Unknown Type";
        // };

        return switch(obj) {
            case Employee e when e.getSalary() >= 100000 -> "Highly paid with a salary of " + String.format("%f", e.getSalary());
            case Employee e when e.getSalary() < 100000 -> "Not highly paid. The salary is " + String.format("%f", e.getSalary());
            case Student s when s.getMarks() >= 75 -> "Distinction";
            case Student s when s.getMarks() < 75 -> "Not a Distinction";
            default -> "Unknown Type";
        };
    }
}
