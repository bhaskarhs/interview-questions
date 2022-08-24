// all types of sorting Algorithms
// Different Sorting Algorithms
// Bubble Sort
// Selection Sort
// Insertion Sort
// Merge Sort
// Quicksort
// Counting Sort
// Radix Sort
// Bucket Sort
// Heap Sort
// Shell Sort

/* 

Bubble Sorting
 needs two for loop 
1. first loop is for looping throgh the array
2. is for comparing adjucent elemts

*/

function BubbleSort(arr){
    
    for(let i =0 ;i<arr.length -1;i++){
        for(let j =0;j<arr.length - 1; j++)
        if(arr[j] > arr[j+1]){
            // let temp = arr[j]
            // arr[j] = arr[j+1]
            // arr[j+1] = temp
            [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
        }
    }
    return arr
}

console.log(BubbleSort([120,2,0,12]));


