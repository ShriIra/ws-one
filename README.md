# ws-one
```
int num = 2;
        switch (num) {
            case 1:
                System.out.println("One");
                break;
            case 2:
                System.out.println("Two");
                break;
            default:
                System.out.println("Invalid number");
        }

        enum TrafficLight { RED, YELLOW, GREEN }
        TrafficLight signal = TrafficLight.RED;
        switch (signal) {
            case RED:
                System.out.println("Stop!");
                break;
            case YELLOW:
                System.out.println("Get ready!");
                break;
            case GREEN:
                System.out.println("Go!");
                break;
        }

        String fruit = "Apple";
        switch (fruit.toLowerCase()) {
            case "apple":
                System.out.println("Apples");
                break;
            case "banana":
                System.out.println("Bananas");
                break;
            default:
                System.out.println("Unknown fruit!");
        }

        String day = "Monday";

        String message = switch (day) {
            case "Monday" -> "Hello Monday!";
            case "Friday" -> "Thank god it's Friday!";
            case "Sunday" -> "Relax, it's Sunday!";
            default -> "A day in the middle of the week";
        };
```