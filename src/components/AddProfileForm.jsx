import { useDispatch } from "react-redux";
import { addProfile } from "../store/slices/profiles";
import ProfileForm from "./ProfileForm";
import PropTypes from "prop-types";

export default function AddProfileForm({ closeFunction }) {
    // Gestion de la création d'un profil
    const dispatch = useDispatch();

    // Gestion de l'événement de soumission du formulaire
    function handleAdd(profileData) {
        dispatch(addProfile(profileData));
        closeFunction();
    }

    return (
        <ProfileForm
            onSubmit={handleAdd}
            onClose={closeFunction}
            submitLabel="Ajouter"
        />
    );
}

AddProfileForm.propTypes = {
    closeFunction: PropTypes.func.isRequired,
};
