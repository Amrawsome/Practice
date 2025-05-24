package Java_Problems;

public class LC_Problem {
    public static double[] results = { 39, 32, 62, 88, 51, 62, 64, 81, 77 };
    public static double mean;
    public static double result1;
    public static double lowest;
    public static double highest;
    public static double below40;
    public static double between;

    public static void main(String[] args) {
        // System.err.println("Mean percentage mark is"+" "+Mean());
        //Lowest();
        //highest();
        //below();
        //between();
    }

    public static double Mean() {

        for (double result : results) {

            System.out.println(results);

            mean = result + mean;

        }
        return mean / results.length;
    }

    public static void Lowest() {
        lowest = results[0];
        for (int i = 1; i < results.length; i++) {
            if (results[i] < lowest) {
                lowest = results[i];
            }

        }
        System.out.println(lowest);
    }

    public static void highest() {
        highest = results[0];
        for (int i = 1; i < results.length; i++) {
            if (results[i] > highest) {
                highest = results[i];
            }

        }
        System.out.println(highest);
    }

    public static void below() {
        for (int i = 0; i < results.length; i++) {
            //System.out.println(results[i]);
            if (results[i] < 40.0) {
                
                below40+=1;
            }

        }
        System.out.println(below40);
    }


    public static void between() {
        for (int i = 0; i < results.length; i++) {
           // System.out.println(results[i]);
            if (results[i] >= 50 && results[i] <=79) {
                
                between+=1;
            }
            

        }
        System.out.println(between);
    }

}
