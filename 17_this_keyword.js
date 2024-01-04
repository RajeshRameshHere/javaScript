
// this = reference to the object where THIS is used
//           (the object depends on the immediate context)
// this keyword will not work on arrow functions

const person1={
    name:"spongebob",
    favfood:"hamburgers",
    greet:
        function(){
            console.log(`hi my name is ${this.name} and my favourite food is ${this.favfood}`)// refering the current oject
        },
    eat:function(){
        console.log(`${this.name} is eating ${person1.favfood}` );// wecan refer it by the nabe of the parent object also but in some cases 
                                                                  //we might misplace the parent name with child objects, 
                                                                  //to avoid the confusin we use this keyword
    }
} 



const person2={
    name:"patrick",
    favfood:"pizza",
    greet:
        function(){
            console.log(`hi my name is ${this.name} and my favourite food is ${this.favfood}`)// refering the current oject
        },
    eat:function(){
        console.log(`${this.name} is eating ${/*this*/person1.favfood}` );//here instead of using this keyword we used person1 object refference
                                                                  // which cause the error by printing the person1 object                                                                  
    }
    // // we got output  "patrick is eating hamburgers" which is wrong 
    // what we supposed to get is "patrick is eating pizza"
     
    // to avoid this kind of mistakes always use "this keyword"
} 

person1.greet();
person1.eat();

person2.greet();
person2.eat();



//                          example2
                        //------------


let laptop1 =
{
    cpu: 'i11',
    ram: 16,
    brand: 'Apple',
    text: 'Laptop Information',
    tags: true,
    compare: function (other) {
        if (this.cpu > other.cpu)
            console.log(this)
        else
            console.log(other)

    },
    greet: function () {
        console.log(this.cpu)

    }

}
laptop1.greet()
let laptop2 =
{
    cpu: 'i20',
    ram: 16,
    brand: 'HP',
    text: 'Laptop Information',
    tags: true,
    greet: function () {
        console.log(this.brand)

    }
}
laptop2.greet()
laptop1.compare(laptop2)
