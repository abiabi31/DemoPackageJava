package learning.learn;

public class Swt {
    public static void main(String[] args) {
//   Loan amount ((P)): ₹1000
// Annual interest rate ((r)): 8%

//        8%=8/100=0.08.

// Loan tenure ((n)): 15 years (180 months)

//         moth12 * yr15 = 180


//        E = P x R x (1+r)^n / ((1+r)^N – 1, where
// EMI = 1000* 0.008 * (1 + 0.008)^180 / ((1 + 0.008)^180 - 1) =


        double v = 5000 * (0.23 / 12) * Math.pow((1 + 0.23 / 12), 12) / (Math.pow((1 + 0.23 / 12), 12) - 1);
        double a = v * 12;
        double b = a * 0.02;

        System.out.println("------------------------------------------------++++++++++++++++++++______________________________");
        System.out.println(v);
        System.out.println(a);
        System.out.println(b);




//        Initialize array
//        int[] arr = new int[]{1, 2, 3, 4, 2, 7, 8, 8, 3};
//        System.out.println("Duplicate elements in given array: ");
//        //Searches for duplicate element
//        for (int i = 0; i < arr.length; i++) {
//            int count = 1;
//            for (int j = i + 1; j < arr.length; j++) {
//                if (arr[i] == arr[j])                    System.out.println(arr[i]);
////                    count++;
//            }
////            if(count>1)
////            System.out.println(arr[i]+"cont "+ count);
//        }
//    }


//        int[] arr = new int[]{1, 2, 3, 4, 2, 7, 8, 8, 3};
//
//        System.out.println("Duplicate elements in given array with count: ");
//        // Search for duplicate elements
//        for (int i = 0; i < arr.length; i++) {
//            int count = 1; // Initialize count for each element
//            for (int j = i + 1; j < arr.length; j++) {
//                if (arr[i] == arr[j]) {
//                    count++; // Increment count for duplicate elements
//
//                    arr[j] = Integer.MIN_VALUE; // Mark duplicate as visited to avoid counting it again
//
//                }
//            }
//            // If count is greater than 1, print the element and its count
//            if (count > 1 && arr[i] != Integer.MIN_VALUE) {
//                System.out.println(arr[i] + " - Count: " + count);
//            }
//        }
//    }
    }

}
