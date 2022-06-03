var containsDuplicate = function(nums) {
    newArray = []
    for(let i = 0; i < nums.length; i++){
        newArray.push(nums[i])
        if(newArray.includes(nums[i+1])){
            return true
        }
    }
    return false
};