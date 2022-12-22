let  max_ref;

console.log("Teste Longest Increasing Sequence");

 function  LongestIncreasingSequence(arr,n)
{
    if (n == 1)
        return 1;
            
    let res, max_ending_here = 1;

    for (let i = 1; i < n; i++)
    {
        res = LongestIncreasingSequence(arr, i);

        if (arr[i-1] < arr[n-1] && res + 1 > max_ending_here)
            max_ending_here = res + 1;
    }

    if (max_ref < max_ending_here)
        max_ref = max_ending_here;

        return max_ending_here;


}

let arr=[9, 9, 4, 2];

let n = arr.length;

console.log("Length of LIS is " + LongestIncreasingSequence(arr, n));

// do teste

function LongestIncreasingSequence(arr) { 
    // code goes here
    if (arr.length === 0) return 0;
  
    let result = 1;
  
    const LISEndAt = new Array(arr.length).fill(1);
  
    for (let i = 1; i < arr.length; i++) 
    {
      LISEndAt[i] = Math.max(1,
        ...LISEndAt.slice(0, i).map((item, j) => 
        {
          return arr[i] > arr[j] ? item + 1 : 0
        }));
  
      result = Math.max(LISEndAt[i], result);
    }
    
    return result;
  }
     
  // keep this function call here 
  console.log(LongestIncreasingSequence(readline()));