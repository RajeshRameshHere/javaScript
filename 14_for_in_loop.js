            // to print all the values of the object we can use a 
            // for in loops, which will print all the values inside of the object 
            // to use the for_in_loop, below as follwed


let alian={
    name:"raju",
    age:24,
    gender:"male",
    'total exp':4, 
    laptop:{
        cpu:"i7",
        ram:"4gb",
        brand:{
            lenovo:1,
            hp:2,
            asus:3,
            dell:4
        }


    }
        

}
for(let key in alian){

   // console.log(key)    //here it will fetch all the value that is present in the object one by one but not the sub items of brand

                        // to do that we need to mention the refrence of the object 
     console.log(key,alian[key])                 
}