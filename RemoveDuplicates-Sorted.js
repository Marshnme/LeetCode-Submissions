var removeDuplicates = function(nums) {
    numsLength = nums.length;
    let pointerOne = 0
    let pointerTwo = 1
     
        while(pointerTwo < nums.length){
            if(nums[pointerOne] !== nums[pointerTwo]){
                pointerOne++
                nums[pointerOne] = nums[pointerTwo]
                pointerTwo++
            }else pointerTwo++
        }
    return pointerOne + 1
};