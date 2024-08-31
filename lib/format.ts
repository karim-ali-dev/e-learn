//  for egypt currency 

export const formatPrice = (price: number) => {  
    return new Intl.NumberFormat("ar-EG", {  
        style: "currency",  
        currency: "EGP",  
    }).format(price);  
};  


//   for dollors

//   export const formatPrice = (price: number) => {
//     return new Intl.NumberFormat("en-US", {
//         style: "currency",
//         currency: "USD",
//     }).format(price)
// }