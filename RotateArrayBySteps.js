var rotate = function(nums, k) {

    // WORKS BUT TIMES OUT ON LAST TEST
//     let last
//     let curr
//     for(let i = 0; i<k;i++){
//         last = nums[nums.length-1]
            
//         nums.splice(0,0,last)
//         nums.pop()
        
//     }
    
// Had to google for this one. Lots of learning to be done here
    const revNums = (nums,start,end) => {
        while(start<end){
            [nums[start],nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    }
    
    k = k % nums.length;
    nums.reverse();
    revNums(nums,0,k-1)
    revNums(nums,k,nums.length - 1)
}