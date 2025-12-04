// let arr = [1, 2, 3, 4, 5];
// let arr2 = [10, 20, 30]

// arr.push(4)
// arr.pop()


// arr.unshift(10)
// console.log(arr);
// arr.shift()
// console.log(arr.entries())

// Create an Array
// let fruits = ["apple", "grape", "banana", "mango"]
// let text = ""
// for (let x of fruits.entries()) {
//     text += x
// }
// console.log(text)


// let i = 0
// do {
//     console.log(arr[i])
//     i++
// } while (i < arr.length);


// let arr3 = arr.concat(arr2)


// const mapArr = arr.map((item, index, array) => {
//     return item + 20
// })
// console.log(mapArr)
// console.log(arr)


// const filterArr = arr.filter((item) => {
//     return item >= 2
// })
// console.log(filterArr)
// console.log(arr)



// const sum = arr.reduce((prev, item) => {
//     console.log(prev)
//     return prev + item
// }, 0)

// console.log(sum)


// const arr1 = ['a', 'b', 'c', 'd']
// arr1.splice(1, 3, 'h', 'g')
// console.log(arr1)


// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const num2 = num.slice(0, 5)
// console.log(num)
// console.log(num2)



// const arr = [1, 2, 3, 4, 5, 6, 7, 8]

// const arrReduce = arr.reduce((acc, item) => {
//     console.log(acc)
//     return acc + item
// }, 0)
// console.log(arrReduce)


// let text = ""
// for (let item in arr) {
//     text += item + "," + arr[item]
// }
// console.log(text)


// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }


// let arrMap = arr.map((item) => {
//     return item + 10
// }).map((item) => {
//     return item * 2
// }).map((item) => {
//     return item + 1
// })
// console.log(arrMap)



// let arrFilter = arr.filter((item, index, array) => {
//     return item > 2
// })
// console.log(arrMap)


// let arrFind = arr.find((item) => {
//     return item > 4
// })
// console.log(arrFind)


let array = [10, 3, 45, 67, 8, 9, 7, 6, 4, 5, 6, 7, 8]

// let unsorted = array.sort((a, b) => {
//     return a - b
// })
// console.log(unsorted)


// unOptimized way || brute force search
// function secndLargetNumber(arr) {
//     let uniqueArray = Array.from(new Set(arr))

//     uniqueArray.sort((a, b) => {
//         return b - a
//     })

//     if (uniqueArray.length >= 2) {
//         return uniqueArray[1]
//     } else {
//         return -1
//     }
// }
// console.log(secndLargetNumber(array))



// optimized way
// [10, 3, 45, 67, 8, 9, 7, 6, 4, 5, 6, 7, 8]
// function secondLargestNumber(arr) {
//     let largest = Number.NEGATIVE_INFINITY;
//     let secondLargest = Number.NEGATIVE_INFINITY;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             secondLargest = largest
//             largest = arr[i]
//         } else if (arr[i] != largest && arr[i] > secondLargest) {
//             secondLargest = arr[i]
//         }
//     }
//     return secondLargest;
// }

// console.log(secondLargestNumber(array))


// [1,2,3,4,5,6,7,8,9]
// function rotateArrya(arr, k) {
//     let size = arr.length

//     if (k > size) {
//         k = k % size
//     }

//     const rotated = arr.splice(size - k, size) //[6,7,8]
//     arr.unshift(...rotated)

//     return arr;
// }
// console.log(rotateArrya([1, 2, 3, 4, 5, 6, 7, 8, 9], 8))



// fabonacci algortihm 
// let prev1 = 0, prev2 = 1;
// for (let i = 0; i <= 18; i++) {
//     let fabonacciNumber = prev1 + prev2
//     console.log(`Fabo ${i}:`, fabonacciNumber)
//     prev1 = prev2
//     prev2 = fabonacciNumber
// }

// fabonacci series = 0,1,1,2,3,5,8,13,21,34,55,89,144,233
// 1st iteration
// index = 2, value = 1, so 1+0 = 1 and arr = [0,1,1]
// 2nd iteration
// index = 3, value = 1, so 1+1 = 2 and arr = [0,1,1,2]
// 3rd iteration
// index = 4, value = 2, so 2+1 = 3 and arr = [0,1,1,2,3]
// 4th iteration
// index = 5, value = 3, so 3+2 = 5 and arr = [0,1,1,2,3,5]

var fib = function (n) {
    const arr = [0, 1]

    for (i = 2; i <= n; i++) {
        arr.push(arr[i - 1] + arr[i - 2])
    }
    console.log(arr[n])
}

fib(5)




// const isPlindrome = (x) => {
//     return x < 0 ? false : x === +x.toString().split('').reverse().join('')
// }
// console.log(isPlindrome(154)) 