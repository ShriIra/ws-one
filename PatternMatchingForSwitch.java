public class PatternMatchingForSwitch {
    public static void main(String[] args) {
        Object obj = 100;

        String message = "";

        // if (obj instanceof String s) {
        //     message = "This is a String " + s;
        // } else if (obj instanceof Integer i) {
        //     message = "This is an Integer " + i;
        // } else if (obj instanceof Double d) {
        //     message = "This is a Double " + d;
        // } else {
        //     message = "Unknown Type";
        // }

        message = switch(obj) {
            case String s -> "This is a String " + s;
            case Integer i -> "This is an Integer " + i;
            case Double d -> "This is a Double " + d;
            default -> "Unknown Type";
        };

        System.out.println(message);
    }
}
