import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function ProfileForm({ initialData, onSubmit, onClose, submitLabel }) {
    const [name, setName] = useState(initialData?.name || "");
    const [photo, setPhoto] = useState(initialData?.photo || "");
    const [description, setDescription] = useState(initialData?.description || "");

    const DEFAULT_AVATAR = "https://avatar.iran.liara.run/username?username=";

    // Gestion de la mise à jour des champs
    useEffect(() => {
        if (initialData) {
            setName(initialData.name);
            setPhoto(initialData.photo);
            setDescription(initialData.description);
        }
    }, [initialData]);

    /**
     * Vérifie si une URL donnée est valide.
     *
     * @function
     * @param {string} url - L'URL à valider.
     * @returns {boolean} Retourne `true` si l'URL est valide, sinon `false`.
     */
    function isValidUrl(url) {
        try {
            new URL(url);
            return true;
            // eslint-disable-next-line no-unused-vars
        } catch (_) {
            return false;
        }
    }

    /**
     * Gère l'événement de soumission du formulaire.
     * Vérifie si la photo est une URL valide. Si ce n'est pas le cas, utilise une URL par défaut
     * générée à partir du nom de l'utilisateur.
     *
     * @function
     * @param {Event} e - L'événement de soumission du formulaire.
     * @returns {void}
     */
    function handleSubmit(e) {
        e.preventDefault();
        const validPhoto = isValidUrl(photo) ? photo : DEFAULT_AVATAR.concat("", name.replace(" ", "+"));
        console.log(validPhoto);
        onSubmit({ name, photo: validPhoto, description });
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
                    value={`${name}`}
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
                    type="text"
                    value={`${photo}`}
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
                    value={`${description}`}
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
                    {submitLabel}
                </button>
                <button
                    type="button"
                    onClick={onClose}
                    className="flex items-center rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm font-parkinsans text-white transition-all shadow-sm hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700"
                >
                    Fermer
                </button>
            </div>
        </form>
    );
}

ProfileForm.propTypes = {
    initialData: PropTypes.shape({
        name: PropTypes.string,
        photo: PropTypes.string,
        description: PropTypes.string,
    }),
    onSubmit: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    submitLabel: PropTypes.string.isRequired,
};

ProfileForm.defaultProps = {
    initialData: null,
};
