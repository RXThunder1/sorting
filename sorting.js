function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
            }
        }
    }
    return arr;
}


function merge(arr1, arr2) {
    let result = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    // Add remaining elements
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}


function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}


function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }
    return arr;
}


function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Swap
        }
    }
    return arr;
}


function pivot(arr) {
    let pivotValue = arr[0];
    let left = [];
    let right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivotValue) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // Rearrange the array
    for (let i = 0; i < left.length; i++) {
        arr[i] = left[i];
    }
    arr[left.length] = pivotValue;
    for (let i = 0; i < right.length; i++) {
        arr[left.length + 1 + i] = right[i];
    }

    return left.length;
}


function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let pivotIndex = pivot(arr);
    let left = arr.slice(0, pivotIndex);
    let right = arr.slice(pivotIndex + 1);

    return [...quickSort(left), arr[pivotIndex], ...quickSort(right)];
}


function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
    return Math.max(Math.floor(Math.log10(Math.abs(num))) + 1, 1);
}

function radixSort(arr) {
    if (arr.length === 0) return arr;

    let max = Math.max(...arr);
    let maxDigits = digitCount(max);

    for (let i = 0; i < maxDigits; i++) {
        let buckets = Array.from({ length: 10 }, () => []);
        
        for (let num of arr) {
            let digit = getDigit(num, i);
            buckets[digit].push(num);
        }
        
        arr = [].concat(...buckets);
    }

    return arr;
}