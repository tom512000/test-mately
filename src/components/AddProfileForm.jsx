import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProfile } from "../store/slices/profiles";

export default function AddProfileForm() {
    const [name, setName] = useState("");
    const [photo, setPhoto] = useState("");
    const [description, setDescription] = useState("");
    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(addProfile({ name, photo, description }));
        setName("");
        setPhoto("");
        setDescription("");
    }

    return (
        <form onSubmit={handleSubmit} className="profile-form">
            <input type="text" placeholder="Nom" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="text" placeholder="Photo URL" value={photo} onChange={(e) => setPhoto(e.target.value)} required />
            <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
            <button type="submit">Ajouter</button>
        </form>
    );
}
