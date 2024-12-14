import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProfile } from "../store/slices/profiles";
import PropTypes from "prop-types";

export default function AddProfileForm({ closeFunction }) {
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
        <form onSubmit={handleSubmit} className="w-[330px] px-8 pt-6 pb-8 mb-4 z-50 bg-white shadow-md rounded">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-poppins font-bold mb-2" htmlFor="nom">
                    Nom
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 font-poppins text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="nom"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nom"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-poppins font-bold mb-2" htmlFor="photo">
                    Photo (URL)
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 font-poppins text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="photo"
                    type="photo"
                    value={photo}
                    onChange={(e) => setPhoto(e.target.value)}
                    placeholder="Photo (URL)"
                    required
                />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-poppins font-bold mb-2" htmlFor="description">
                    Description
                </label>
                <textarea
                    className="shadow appearance-none border rounded w-full min-h-[100px] py-2 px-3 font-poppins text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Description"
                    required
                />
            </div>
            <div className="flex items-center justify-between">
                <button
                    type="submit"
                    className="flex items-center rounded-md border border-slate-300 py-2 px-4 text-center text-sm font-parkinsans transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800"
                >
                    Ajouter
                </button>
                <button
                    type="button"
                    onClick={closeFunction}
                    className="flex items-center rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm font-parkinsans text-white transition-all shadow-sm hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700"
                >
                    Fermer
                </button>
            </div>
        </form>
    );
}

AddProfileForm.propTypes = {
    closeFunction: PropTypes.func.isRequired,
};
