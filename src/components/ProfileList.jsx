import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteOutlined, EditOutlined, MoreOutlined } from "@ant-design/icons";
import { deleteProfile } from "../store/slices/profiles";
import UpdateProfileForm from "./UpdateProfileForm";

export default function ProfileList() {
    // Gestion du listage des profils
    const profiles = useSelector(state => state.profiles);
    // Gestion de la suppression d'un profil
    const dispatch = useDispatch();

    // Gestion de l'affichage du menu du profil
    const [activeProfileId, setActiveProfileId] = useState(null);
    function toggleVisibility(profileId) {
        if (activeProfileId === profileId) {
            setActiveProfileId(null);
        } else {
            setActiveProfileId(profileId);
        }
    }

    // Gestion de l'affichage du formulaire de modification
    const [editingProfile, setEditingProfile] = useState(null);
    function closeEditingForm() {
        setEditingProfile(null);
    }

    return (
        <div className="w-full mt-3 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {profiles.map(profile => (
                <div
                    key={profile.id}
                    className="flex flex-col justify-center items-center p-6 border border-gray-200 bg-white rounded-lg relative"
                >
                    <div className="absolute top-2 right-3.5 z-40">
                        <MoreOutlined rotate="90" className="text-xl" onClick={() => toggleVisibility(profile.id)} />
                        {activeProfileId === profile.id && (
                            <div className="absolute right-0 z-10 w-40 overflow-hidden bg-white border border-gray-300 rounded-md shadow-xl">
                                <button
                                    type="button"
                                    onClick={() => setEditingProfile(profile)}
                                    className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 group"
                                >
                                    <EditOutlined className="bx bx-edit text-lg text-gray-800 group-hover:text-white mr-3" />
                                    <p className="font-poppins font-medium text-gray-800 group-hover:text-white">Modifier</p>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => dispatch(deleteProfile(profile.id))}
                                    className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-red-400 group"
                                >
                                    <DeleteOutlined className="bx bx-edit text-lg text-gray-800 group-hover:text-white mr-3" />
                                    <p className="font-poppins font-medium text-gray-800 group-hover:text-white">Supprimer</p>
                                </button>
                            </div>
                        )}
                    </div>
                    <img src={profile.photo} alt={profile.name} className="w-20 h-20 mb-3 rounded-full shadow-lg" />
                    <h2 className="text-2xl font-poppins font-semibold text-gray-900">{profile.name}</h2>
                    <p className="text-center text-sm font-poppins font-normal text-gray-400">{profile.description}</p>
                </div>
            ))}
            <div className="relative">
                {editingProfile && (
                    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <UpdateProfileForm profile={editingProfile} onClose={closeEditingForm} />
                    </div>
                )}
            </div>
        </div>
    );
}
