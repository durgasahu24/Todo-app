import { configureStore } from '@reduxjs/toolkit';
import durga from '../features/todo/todoSlice';

export const store = configureStore({
    reducer: durga
})

