def get_max(*nums):
    max = nums[0]
    for n in range(0,len(nums)):
        if nums[n] > max:
            max = nums[n]
    return max
        

max = get_max(1,4,9,5)
print(max)