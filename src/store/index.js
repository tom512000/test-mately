import { configureStore } from "@reduxjs/toolkit";
import profilesSlice from "./slices/profiles";

const store = configureStore({
    reducer: {
        profiles: profilesSlice,
    },
});

export default store;
