import { configureStore } from '@reduxjs/toolkit'
import prodectslice from './component/slice/prodectslice'

export default configureStore({
  reducer: {
    prodect :prodectslice
  }
})