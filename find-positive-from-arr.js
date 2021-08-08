const array =[45,89,12,55,5,78,-45,-18,12,13];
function positiveArray(numbers){
    let newArray=[];
    for(let element of numbers){
        if(element>0){
            newArray.push(element);
        }else{
            break;
        }
    }
    return newArray;
}
const result=positiveArray(array);
console.log(result)