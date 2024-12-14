import { useDispatch } from "react-redux";
import { updateProfile } from "../store/slices/profiles";
import ProfileForm from "./ProfileForm";
import PropTypes from "prop-types";

export default function UpdateProfileForm({ profile, onClose }) {
    // Gestion de la modification d'un profil
    const dispatch = useDispatch();

    /**
     * Gère la soumission du formulaire pour mettre à jour un profil existant.
     *
     * @function
     * @param {Object} updatedProfileData - Les nouvelles données du profil à mettre à jour.
     * @returns {void}
     */
    function handleUpdate(updatedProfileData) {
        dispatch(updateProfile({ id: profile.id, ...updatedProfileData }));
        onClose();
    }

    return (
        <ProfileForm
            initialData={profile}
            onSubmit={handleUpdate}
            onClose={onClose}
            submitLabel="Enregistrer"
        />
    );
}

UpdateProfileForm.propTypes = {
    profile: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
    }).isRequired,
    onClose: PropTypes.func.isRequired,
};
