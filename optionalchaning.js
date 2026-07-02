/*Optional Chaining (?.)

Ye tab use hota hai jab ho sakta hai ki object ya uski property exist na kare. */
let info ={
    name: "gaurav",
    age:22,
    year:2026,
    addresss:{// so i change key  from adress to aderesss

        city:"ksp",
    },
};
console.log(info?.address?.city);
//agar koi bhi key change hoti in near future  to opetioal changing help in finding the problem by not gicing error to the code but it 
//gives undiefined
// outpur is undiefined
