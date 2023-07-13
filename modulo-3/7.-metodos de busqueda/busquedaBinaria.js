let arr = [2, 5, 77, 88, 91];

function binarySearch(arr, l, r, x){

    if (l > r) return -1;

    const m = Math.floor((l + r) /2)

    if (arr[m] == x) return m;

    if (arr[m] < x){
        return binarySearch (arr, m + 1, r, x);
    }
    else {
        return binarySearch(arr, l, m - 1, x)
    }
}

console.log( binarySearch(arr, 0 , arr.length - 1, 88));

