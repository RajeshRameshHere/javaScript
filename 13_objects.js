let input='name'

let alian={
    name:"raju",
    age:24,
    gender:"male",
    'total exp':4           // usually we declare varaiable like total_exp,but
                            // if you want to use a space in naming the variable, we can place the variable name inside the qoutaion 

}
console.log(alian["gender"],alian.name,alian['total exp'])
console.log(alian[input])           //fatching the data outside the object  but has a relation to it
/*
there are two ways you can fetch itemsfrom an object in JS
1.by using dot"." oprator 
2.by using [" "]

but how do you fetch an item that outside the object but related?
to do that we need to use only the second method 
*/

let Techi1={
    name:"stive",
    age:27,
    gender:"male",
    'total exp':14 ,
    laptop:{
        cpu:"i7",
        ram:"4gb",
        brand:"hp"


    }

}
console.log(Techi1.laptop.brand)
/* we can use . to fetch/read or refer the object within the object and its values 

            NULLISH COALESCING OPERATOR   -  (?)
            ---------------------------      -----
        when you try to fetch a value which is not available in the object we get erorr thats usual,
        and when you try to fetch a value inside a nested object and the value is not present it gives same
         but we can avoid the error by using"?" oprator, which helps us to check the value is present or not and 
         when it is not present it will exit the operation and will not go furtur and gives undefined but not error,
         so it will give the output till the previous refernce where error is at.

         ex:-
         console.log(Techi1.laptop.brand_1)
         here the brand name is wrong and it will give error.... alist of error 
         this can be solved by using the ?
         
         ex:-
    
*/
console.log(Techi1.laptop.brand_1?.length)  //here we uesd ? operator to check the variable present or not
                                            //when it is not present it terminates the run when the last possible variable present 
                                            //and gives undefined, as it cant go past the error  

                                            //when it is available it continues to run tii the end will giev the output,NOT UNDEFINED.
      
      
 console.log(Techi1.laptop1?.brand)         // here laptop_1 is not a defined object but it is not giving us error
                                            //instead it is telling us it is undefined (not present)


            /*Deleting properties from the object
            --------------------------------------
    to delete we have a method called delete in javascript         

    to use,

    delete (mention the property u want to delete)
           
            */

    delete Techi1.laptop.brand
    console.log(Techi1)             //here it deletes the brand from the laptop which presents in techie