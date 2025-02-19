import java.util.Scanner;
import java.util.Random;

public class random_password{
    static Random rand = new Random();
    
    public static void main(String[] args){
        Scanner myScanner = new Scanner(System.in);
        menu(myScanner);
     }
    
     public static void menu(Scanner myScanner){

        System.out.println("Please Choose an option");
        System.out.println("1. Generate password");
        
        String input = myScanner.nextLine();

        switch(input){
            case "1":
                passwordMaker(myScanner);
            break;
            default:
            System.out.println("Please try again");
            menu(myScanner);
        }
       
     }
     public static void passwordMaker(Scanner myScanner){
            System.out.println("How many Passwords do you want?");
            String numPasswords = myScanner.nextLine();
            System.out.println("Password Length must be 12 - 15 characters long");
            System.out.println("How long do you want your password to be");
            String lengPasswords = myScanner.nextLine();

            if(Integer.parseInt(lengPasswords) > 15 || Integer.parseInt(lengPasswords) < 12){
                System.out.println("Please try again");
                passwordMaker(myScanner);
            }
            
               
                int numPass = Integer.parseInt(numPasswords);
                int i;
                int j;
                int passLeng = Integer.parseInt(lengPasswords);
                String[] passwordArray = new String[numPass];
                for(i=0;i<numPass;i++){
                    String pass="";
                    char g;
    
                   
                for(j=0;j<passLeng;j++){
                    g = (char)randomNumber(33, 123);
                    pass +=g;
                    //System.out.print((char) randomNumber(33, 123));
                }
                passwordArray[i] = pass;
                pass ="";

                

               
                
            }
            
            printPasswords( myScanner ,passwordArray );
                    

     }

     public static void printPasswords( Scanner scan ,String [] pass){
        
        if (pass.length == 0){
            System.out.println("No Passwords Stored");
        }
        int k;
                for(k=0;k<pass.length;k++){
                System.out.println((k+1)+". "+pass[k]);
                }
           again(scan);
     }

     public static int randomNumber(int min, int max){
        return rand.nextInt(max - min) + min;
     }

     public static void again(Scanner scan){
        System.out.println("Would you like to print more passwords");
        System.out.println("YES or NO");
        String conf = scan.nextLine();
        switch(conf){
            case "YES":
                passwordMaker(scan);
            break;
            case "NO":
            System.exit(0);
            break;
            default:
            System.out.println("Please try again");
            again(scan);
           
        }
     }

}