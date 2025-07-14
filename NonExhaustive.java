public class NonExhaustive {
    public static void main(String[] args) {
        Object obj = "Hello";

        String message = switch(obj) {
            case String s -> "This is a String " + s;
            case Integer i -> "This is an Integer " + i;
            case Double d -> "This is a Double " + d;
            default -> "Unknown Type";
        };
    }
}
