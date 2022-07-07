// let yamu=[
//     ['yamuna', 23],
//     ['rex',24]
// ];
// console.log(yamu)
// console.log(yamu[0][1])

// let yamuna ={
//     "line_items" : {
//         "parent_obj1": {
//             "attributes": {
//                 "product_type": "Physical",
//                 "is_eligible": true
//             },
//             "item_cost": {
//                 "sale_price": 100
//             },
//             "line_items": {
//                 "child_obj1": {
//                     "attributes": {
//                         "product_type": "Physical",
//                         "is_eligible": true
//                     },
//                     "item_cost": {
//                         "sale_price": 100
//                     }
//                 },
//                 "child_obj2": {
//                     "attributes": {
//                         "product_type": "Non-physical",
//                         "is_eligible": false
//                     },
//                     "item_cost": {
//                         "sale_price": 100
//                     }
//                 }
//             }
//         },
//         "parent_obj2": {
//             "attributes": {
//                 "product_type": "Non-physical",
//                 "is_eligible": true
//             },
//             "item_cost": {
//                 "sale_price": 100
//             },
//             "line_items": {
//                 "child_obj1": {
//                     "attributes": {
//                         "product_type": "Physical",
//                         "is_eligible": true
//                     },
//                     "item_cost": {
//                         "sale_price": 100
//                     }
//                 }
//             }
//         },
//         "parent_obj3": {
//             "attributes": {
//                 "product_type": "Physical",
//                 "is_eligible": true
//             },
//             "item_cost": {
//                 "sale_price": 100
//             },
//             "line_items": {
//                 "child_obj1": {
//                     "attributes": {
//                         "product_type": "Physical",
//                         "is_eligible": false
//                     },
//                     "item_cost": {
//                         "sale_price": 100
//                     }
//                 },
//                 "child_obj2": {
//                     "attributes": {
//                         "product_type": "Non-physical",
//                         "is_eligible": true
//                     },
//                     "item_cost": {
//                         "sale_price": 100
//                     }
//                 }
//             }
//         }
//     }
// }

// // const yamu = Object.keys(yamuna.line_items);
// // const yamu1 = Object.values(yamuna.line_items);
// // const yamu2 = Object.entries(yamuna.line_items);
// // console.log(yamu,"key")
// // console.log(yamu1,"values")
// // console.log(yamu2,"entries")

// // console.log(yamuna.line_items.parent_obj1.item_cost.sale_price);

// const yamun = Object.values(yamuna.line_items)
// let total = 0;
// function key(yamu) {
// yamu.map(yam => { 
//    if (yam.attributes.is_eligible === true && yam.attributes.product_type === "Physical"){
//     // console.log(yam.item_cost.sale_price)
//     total += yam.item_cost.sale_price 
//     if (yam.line_items) {
//         let values = Object.values(yam.line_items)
//         key(values)}
//     console.log(total)
//    }
// })
// }
// key(yamun)
