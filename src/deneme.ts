function getFirstElement<ArrayType>(arr: ArrayType[])  {
    return arr[0];
}

const myArr = [1, 2, 3, 4, 5];
getFirstElement(myArr); // 1

const myArr2 = ['a', 'b', 'c', 'd', 'e'];
getFirstElement(myArr2); // 'a'


function toSum(a: number, b: number){
    return a + b;
}