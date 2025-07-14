public class Main {
    public static void main(String[] args) {
        Person p1 = new Employee(75000);
        String employeeData = getPersonData(p1);
        System.out.println(employeeData);

        Person p2 = new Student(75);
        String studentData = getPersonData(p2);
        System.out.println(studentData);
    }

    static String getPersonData(Object obj) {

        if (obj instanceof Employee e) {
            return String.format("%f", e.getSalary());
        } else if (obj instanceof Student s) {
            return String.format("%s", s.getMarks());
        } else {
            return "Unknown Person";
        }

    }


}
