sealed interface Shape permits Circle, Rectangle, Triangle {}

record Circle(int radius) implements Shape{}
record Rectangle(int length, int width) implements Shape{}
record Triangle(int base, int height) implements Shape{}


public class RecordPatterns {

    public static void main(String[] args) {
        Shape shape = new Circle(5);
        System.out.println(getShapeDetails(shape));
    }

    public static String getShapeDetails(Shape shape) {
        // if (shape instanceof Circle) {
        //     Circle c = (Circle) shape;
        //     return "A circle with a radius " + c.radius();
        // } else if (shape instanceof Rectangle) {
        //     Rectangle r = (Rectangle) shape;
        //     return "A rectangle with length and width " + r.length()+ " " + r.width();

        // } else if (shape instanceof Triangle) {
        //     Triangle t = (Triangle) shape;
        //     return "A triangle with base and height " + t.base() + " " + t.height();
        // } else {
        //     return "Unknown shape";
        // }

        return switch(shape) {
            case Circle(int radius) -> "A circle with a radius " + radius;
            case Rectangle(int length, int width) -> "A rectangle with a length and width of " + length + " " + width;
            case Triangle(int base, int height) -> "A triangle with a base and height of " + base + " " + height;
        };
    }
    
}
