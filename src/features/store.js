import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth/authSlice"
import admin from "../features/admin/adminSlice"
import products from "../features/Product/productSlice"
import events from "../features/events/eventsSlice"
import comments from  "../features/comments/commentsSlice";
import message from "../features/messages/messageSlice"

const store = configureStore({
    reducer: { auth , admin , products , events , comments , message}
})

export default store