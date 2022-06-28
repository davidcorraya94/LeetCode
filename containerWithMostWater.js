var maxArea = function (height) {
    let i = 0;
    let j = height.length - 1;

    let area = 0;

    while (i < j) {
        area = Math.max(area, Math.min(height[i], height[j]) * (j - i));
        if (height[i] < height[j])
            i++;
        else
            j--;
    }

    return area;
};



