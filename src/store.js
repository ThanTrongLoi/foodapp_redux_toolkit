import { configureStore } from '@reduxjs/toolkit'
import AllChildReducer from './screens/HomeScreen/AllChild/allChildSlice'
import MenuChildReducer from './screens/HomeScreen/menuChild/menuChildSlice'
import PopuLarChildReducer from './screens/HomeScreen/popularChild/popularChildSlice'
export default configureStore({
  reducer:{
    allchild: AllChildReducer,
    menuchild: MenuChildReducer,
    popularchild: PopuLarChildReducer
  }
})