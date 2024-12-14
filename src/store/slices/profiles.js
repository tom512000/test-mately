import { createSlice } from "@reduxjs/toolkit";

function getRandomAvatar(firstname, lastname) {
    const randomChoice = Math.random();

    if (randomChoice < 0.5) {
        const randomNumber = Math.floor(Math.random() * 100);
        return `https://avatar.iran.liara.run/public/${randomNumber}`;
    } else {
        return `https://avatar.iran.liara.run/username?username=${firstname}+${lastname}`;
    }
}

const initialState = [
    { id: 1, name: "Alice Dupont", photo: getRandomAvatar("Alice", "Dupont"), description: "Développeuse front-end" },
    { id: 2, name: "Bob Martin", photo: getRandomAvatar("Bob", "Martin"), description: "Designer UI/UX" },
    { id: 3, name: "Clara Rousseau", photo: getRandomAvatar("Clara", "Rousseau"), description: "Ingénieure DevOps" },
    { id: 4, name: "David Lefebvre", photo: getRandomAvatar("David", "Lefebvre"), description: "Développeur back-end" },
    { id: 5, name: "Emma Bernard", photo: getRandomAvatar("Emma", "Bernard"), description: "Data Scientist" },
    { id: 6, name: "François Moreau", photo: getRandomAvatar("François", "Moreau"), description: "Architecte Cloud" },
    { id: 7, name: "Gabrielle Laurent", photo: getRandomAvatar("Gabrielle", "Laurent"), description: "Spécialiste en cybersécurité" },
    { id: 8, name: "Inès Girard", photo: getRandomAvatar("Inès", "Girard"), description: "Développeuse mobile" },
    { id: 9, name: "Julien Petit", photo: getRandomAvatar("Julien", "Petit"), description: "Chef de projet informatique" },
    { id: 10, name: "Louis Durand", photo: getRandomAvatar("Louis", "Durand"), description: "Ingénieur machine learning" },
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
