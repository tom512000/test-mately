import { useState } from "react";
import ProfileList from "./components/ProfileList";
import { PlusOutlined } from "@ant-design/icons";
import AddProfileForm from "./components/AddProfileForm";

export default function App() {
    const [isCreateFormOpen, setIsCreateFormOpen] = useState(false);

    function toggleVisibility() {
        setIsCreateFormOpen(!isCreateFormOpen);
    }

    return (
        <>
            <div className="flex justify-between items-center">
                <h1 className="sm:text-3xl text-2xl font-parkinsans font-semibold">Gestion des Profils</h1>
                <button
                    type="button"
                    onClick={toggleVisibility}
                    className="flex items-center rounded-md border border-slate-300 py-2 px-4 text-center transition-all shadow-sm hover:shadow-lg hover:bg-slate-800 hover:border-slate-800 group"
                >
                    <PlusOutlined className="mr-2 text-sm font-parkinsans text-slate-600 group-hover:text-white" />
                    <p className="text-sm font-parkinsans text-slate-600 group-hover:text-white">Créer un profil</p>
                </button>
                {isCreateFormOpen && (
                    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75 z-50 cursor-default">
                        <AddProfileForm closeFunction={toggleVisibility} />
                    </div>
                )}
            </div>
            <ProfileList/>
        </>
    );
}
