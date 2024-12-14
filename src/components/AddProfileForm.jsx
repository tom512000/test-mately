import { useDispatch } from "react-redux";
import { addProfile } from "../store/slices/profiles";
import ProfileForm from "./ProfileForm";
import PropTypes from "prop-types";

export default function AddProfileForm({ closeFunction }) {
    // Gestion de la création d'un profil
    const dispatch = useDispatch();

    /**
     * Gère la soumission du formulaire pour ajouter un nouveau profil.
     *
     * @function
     * @param {Object} profileData - Les données du nouveau profil à ajouter.
     * @returns {void}
     */
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
