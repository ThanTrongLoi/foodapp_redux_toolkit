import {createSlice} from '@reduxjs/toolkit'

var data = [
  {
    name: 'Stewed Mushrooms',
    image: require("../../../assets/images/namkho.jpg"),
    rating: 3,
    price: "$12"
  },
  {
    name: 'Jackfruit Fried',
    image: require("../../../assets/images/mitkho.jpg"),
    rating: 5,
    price: "$15"
  },
  {
    name: 'Noodles',
    image: require("../../../assets/images/hutieu.jpg"),
    rating: 4,
    price: "$20"
  },
  {
    name: 'Beef',
    image: require("../../../assets/images/cuonlalot.jpg"),
    rating: 2,
    price: "$12"
  },
  {
    name: 'Salad dressing',
    image: require("../../../assets/images/cuondiep.jpg"),
    rating: 5,
    price: "$13"
  },
]

export const allChildSlice = createSlice({
  name: 'allchild',
  initialState: {
    value: data,
  },
  reducers: {
    pending: () => {},
  }
})

export const selectAllChild = state => state.allchild.value
export const {pending} = allChildSlice.actions
export default allChildSlice.reducer