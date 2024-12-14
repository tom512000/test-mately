import { createSlice } from "@reduxjs/toolkit";

const profilesSlice = createSlice({
    name: "profiles",
    initialState: {
        profiles: [],
        lastId: 0,
    },
    reducers: {
        addProfile: (state, action) => {
            state.push({ id: Date.now(), ...action.payload });
        },
        updateProfile: (state, action) => {
            const index = state.findIndex(profile => profile.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        deleteProfile: (state, action) => {
            return state.filter(profile => profile.id !== action.payload);
        },
    },
});

export const { addProfile, updateProfile, deleteProfile } = profilesSlice.actions;
export default profilesSlice.reducer;
