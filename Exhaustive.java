sealed interface Animal permits Dog, Cat, Bird {
    String makeSound();
}

final class Dog implements Animal {
    @Override
    public String makeSound(){ return "Bark"; }
}

final class Cat implements Animal {
    @Override
    public String makeSound(){ return "Meow"; }
}


final class Bird implements Animal {
    @Override
    public String makeSound(){ return "Tweet"; }
}

public class Exhaustive {

    public static void main(String[] args) {
        Animal animal = new Cat();
        System.out.println(getSound(animal));
    }

    public static String getSound(Animal animal) {
        return switch(animal) {
            case Dog d -> d.makeSound();
            case Cat c -> c.makeSound();
            case Bird b -> b.makeSound();
        };
    }
    
}
