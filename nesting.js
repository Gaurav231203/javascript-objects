// nesting means ek aky andr ek object ek kay andr ek ek  kay andr ek,
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
console.log(obj.address.location.lat)