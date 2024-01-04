/*              conversion and coersion 


                conversion
                ----------

  conversion is converting data type into the desirder one
  for example*/
  
  let num=23;       //declearing the num 
  
  console.log(num,typeof num)  //printing the number bfore converting it 

    num=String(num);            //converting number to string
    console.log(num,typeof num) // printing the converted number

    let num2= "10";
    console.log(num2,typeof num2)

    num2=Number(num2)                  //converting string to number
    console.log(num2,typeof num2)

    num2=Boolean(num2)                  //converting string to Boolean 
    console.log(num2,typeof num2)






/*

            coersion
            --------


    coersion is the topic of when performing an oprater function on different type datatype 
    it automaticaly converts and takes the opraters according to the need

*/

let a="raju"
let c="5"

let b=9

let x =a+" "+b              //ADDING two different data types done here with the concept of coersion || adding string and number

console.log(x,typeof x)

 x =a/b            //dividing two different data types done here with the concept of coersion || dividng string and number
console.log(x,typeof x) // it gives NAN, cause it cant divide a srtring with the number, above it did work cause it acted as cancatation 

x1=c/b
console.log(x1,typeof x1) // it gives reult , cause it divide a srtring with the number by converting the given stringnumber into nubmer 



 x =a*b              //multiplaying two different data types done here with the concept of coersion || multiplying string and number

console.log(x,typeof x)// it gives NAN, cause it cant multiplye a srtring with the number, above it did work cause it acted as cancatation 

x1=c*b
console.log(x1,typeof x1) // it gives reult , cause it multiplies a srtring with the number by converting the given stringnumber into nubmer


x =a-b              //subtracting two different data types done here with the concept of coersion || multiplying string and number

console.log(x,typeof x)// it gives NAN, cause it cant substract a srtring with the number, above it did work cause it acted as cancatation 

x1=c-b
console.log(x1,typeof x1) // it gives reult , cause it subtarct a srtring with the number by converting the given stringnumber into nubmer

