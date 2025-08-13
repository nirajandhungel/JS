//  Add 50 and 60 to the array [10, 20, 30, 40].
function usePush() {
  let arr = [10, 20, 30, 40];
  arr.push(50, 60);
  console.log(arr);
}
// usePush()


// Remove the last element from [5, 15, 25, 35] and print the removed element.
function usePop() {
  arr = [5, 15, 25, 35];
  let removedElem = arr.pop();
  console.log(arr, removedElem);
}
// usePop();

// Remove the first element from [100, 200, 300, 400] and print the new array.

function useShift(){
    arr = [100,200,300,400]
    arr.shift()
    console.log(arr)
}
// useShift()

//  Add 1 and 2 at the beginning of [3, 4, 5].

function useUnShift(){
   let arr = [3,4,5]
    arr.unshift(1,2)
    console.log(arr)
}
// useUnShift()

// Extract elements from index 2 to 4 from [10, 20, 30, 40, 50, 60] without changing the original array.

function extractElem(){
    arr = [10,20,30,40,50,60]
    newArr = arr.slice(2,5) //doesnot change original array
    console.log(arr, newArr)
}
// extractElem()

//  From [1, 2, 3, 4, 5], remove 2 elements starting from index 1 and insert 10 and 20.

function useSplice(){
    arr = [1,2,3,4,5]
    newArr = arr.splice(1,2, 10,20)  //changes original array
    console.log(arr,newArr)
}
// useSplice()

// Print each element of [2, 4, 6, 8] multiplied by 3.

function useForEach(){
    arr = [2,4,6,8]
    arr.forEach((elem)=>{
        console.log(elem*3);
    })
}
// useForEach()

// Create a new array where each element of [1, 2, 3, 4] is squared.

function useMap(){
    let sqrt = [1,2,3,4].map((elem)=>{
        return elem *elem
    })
    console.log(sqrt)
}
// useMap()

// Filter out numbers less than 10 from [5, 15, 8, 20, 3].
function useFilter(){
    let result = [5,15,8,20,3].filter((elem)=>{
        return (elem<10)

    })
    console.log(result)


}
// useFilter()

//  Find the sum of [10, 20, 30, 40, 50].

function useReduce(){
    let result = [10,20,30,40,50].reduce((acc,val)=>{
        return acc+val;
    })
    console.log(result)

}
// useReduce()

// Find the first number divisible by 5 in [2, 4, 10, 15, 20].

function findFirstNumber(){
    let arr = [2,4,10,15,20]
    let result = arr.find((elem)=> (elem%5==0))
    console.log(result)
}
// findFirstNumber()

//  Sort [40, 100, 1, 5, 25, 10] in ascending order.
function sorting(){
let sorted = [40,100,1,5,25,10].sort((a,b)=>a-b)
console.log(sorted)
}
// sorting()

// Reverse the array [1, 2, 3, 4, 5].
function reverseArray (){
    let arr = [1,2,3,4,5]
    let result = arr.reverse();
    console.log(result)
}
// reverseArray()



