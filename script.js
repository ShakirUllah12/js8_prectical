
import java.util.Random;

public class RandomNumber {
    public static void main(String[] args) {
        Random random = new Random();
        int randomNumber = random.nextInt(100) + 1;
        System.out.println(randomNumber);
    }
}



import java.util.Random;
import java.util.Scanner;

public class RandomNumberBetweenBounds {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();

        System.out.print("Enter the lower bound: ");
        int lowerBound = scanner.nextInt();

        System.out.print("Enter the upper bound: ");
        int upperBound = scanner.nextInt();

        int randomNumber = random.nextInt(upperBound - lowerBound + 1) + lowerBound;
        System.out.println(randomNumber);
    }
}

import java.security.SecureRandom;

public class RandomPasswordGenerator {
    private static final String UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    private static final String LOWER = "abcdefghijklmnopqrstuvwxyz";
    private static final String DIGITS = "0123456789";
    private static final String ALL_CHARACTERS = UPPER + LOWER + DIGITS;

    public static void main(String[] args) {
        int length = 12; // You can change the length here
        System.out.println("Generated Password: " + generatePassword(length));
    }

    public static String generatePassword(int length) {
        SecureRandom random = new SecureRandom();
        StringBuilder password = new StringBuilder(length);

        for (int i = 0; i < length; i++) {
            int index = random.nextInt(ALL_CHARACTERS.length());
            password.append(ALL_CHARACTERS.charAt(index));
        }

        return password.toString();
    }
}