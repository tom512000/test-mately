import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProfile } from "../store/slices/profiles";
import PropTypes from "prop-types";

export default function UpdateProfileForm({ profile }) {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(profile.name);
    const [photo, setPhoto] = useState(profile.photo);
    const [description, setDescription] = useState(profile.description);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateProfile({ id: profile.id, name, photo, description }));
        setIsEditing(false);
    };

    return (
        <div>
            {isEditing ? (
                <form onSubmit={handleSubmit} className="profile-form">
                    <input type="text" value={`${name}`} onChange={(e) => setName(e.target.value)} required />
                    <input type="text" value={`${photo}`} onChange={(e) => setPhoto(e.target.value)} required />
                    <textarea value={`${description}`} onChange={(e) => setDescription(e.target.value)} required />
                    <button type="submit">Enregistrer</button>
                </form>
            ) : (
                <button onClick={() => setIsEditing(true)}>Modifier</button>
            )}
        </div>
    );
}

UpdateProfileForm.propTypes = {
    profile: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
    }).isRequired,
};
