var findMedianSortedArrays = function (nums1, nums2) {

    nums1 = nums1.concat(nums2);
    nums1 = nums1.sort((a, b) => a - b);

    let median = 0;
    if (nums1.length % 2 == 0) {
        median = (nums1[(nums1.length / 2) - 1] + nums1[nums1.length / 2]) / 2;
    }
    else {
        median = nums1[Math.floor(nums1.length / 2)];
    }

    return median;


};

console.log(findMedianSortedArrays([1, 9, 12], [3, 5, 8]))