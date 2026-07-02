//deconstructring an object

let obj={
    name: "gaurav",
    address: {
      city:"kashipur",
       pincode: 240714,
       location:{
          lng: 77.77,
          lat:18.18,
       },

    },
};
//so by not writing this againg and again to find an element in an objecct  we use deconstructuring;
//create a new val

let {lng,lat }= obj.address.location;
console.log(lat);
console.log(lng);