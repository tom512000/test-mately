import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: 1, name: "Alice", photo: "https://thispersondoesnotexist.com/", description: "Développeuse front-end" },
    { id: 2, name: "Bob", photo: "https://thispersondoesnotexist.com/", description: "Designer UI/UX" },
    { id: 3, name: "Clara", photo: "https://thispersondoesnotexist.com/", description: "Ingénieure DevOps" },
    { id: 4, name: "David", photo: "https://thispersondoesnotexist.com/", description: "Développeur back-end" },
    { id: 5, name: "Emma", photo: "https://thispersondoesnotexist.com/", description: "Data Scientist" },
    { id: 6, name: "François", photo: "https://thispersondoesnotexist.com/", description: "Architecte Cloud" },
    { id: 7, name: "Gabrielle", photo: "https://thispersondoesnotexist.com/", description: "Spécialiste en cybersécurité" },
    { id: 8, name: "Inès", photo: "https://thispersondoesnotexist.com/", description: "Développeuse mobile" },
    { id: 9, name: "Julien", photo: "https://thispersondoesnotexist.com/", description: "Chef de projet informatique" },
    { id: 10, name: "Louis", photo: "https://thispersondoesnotexist.com/", description: "Ingénieur machine learning" },
];

const profilesSlice = createSlice({
    name: "profiles",
    initialState,
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
