let info ={
    name: "gaurav",
    age:22,
    year:2026,
    address:{

        city:"ksp",
    },
};
/*let obj2= structuredClone(info);
 obj2.address.city ="rampur";
 console.log(info.address.city);
  console.log(obj2.address.city);// this is the new way in jsE6*/


  //now older verson
  //using JSON
let obj2 =JSON.parse(JSON .stringify(info));
obj2.address.city="rampur";
console.log(info);
console.log(obj2);
