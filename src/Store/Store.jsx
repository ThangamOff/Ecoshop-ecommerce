import { createSlice,configureStore } from "@reduxjs/toolkit";


let slice=createSlice({

    name:"mydataslice",
    initialState:{
        vegetable:[
            { name: "Carrot", color: "Orange", pricePerKg: 50 },
            { name: "Spinach", color: "Green", pricePerKg: 40 },
            { name: "Tomato", color: "Red", pricePerKg: 30 },
            { name: "Potato", color: "Brown", pricePerKg: 20 },
            { name: "Onion", color: "Purple", pricePerKg: 25 },
            { name: "Cauliflower", color: "White", pricePerKg: 60 },
            { name: "Broccoli", color: "Green", pricePerKg: 70 },
            { name: "Eggplant", color: "Purple", pricePerKg: 35 },
            { name: "Bell Pepper", color: "Yellow", pricePerKg: 90 },
            { name: "Cucumber", color: "Green", pricePerKg: 30 },
          ],
    },
    reducers:{
        addVegetable(store, action) {
            store.vegetable.push(action.payload);
        },
          removeVegetable(store, action) {
            store.vegetable = store.vegetable.filter(
              (veg) => veg.name !== action.payload
            );
          },
    },

})

export let myreducers=slice.actions

let store=configureStore(slice)
export default store