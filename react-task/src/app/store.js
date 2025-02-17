import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'
import { weatherApi } from '../features/Weather/weatherSlice'
import {studentApi} from '../features/Student/studentSlice'

export const store = configureStore({
    reducer: {todoReducer,
    [studentApi.reducerPath] : studentApi.reducer,
    [weatherApi.reducerPath] : weatherApi.reducer,
  },
      middleware:(getDefaultMiddleware) => {
      return getDefaultMiddleware()
        .concat(weatherApi.middleware)
        .concat(studentApi.middleware)
    },
})
