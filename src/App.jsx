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
                    className="flex items-center rounded-md border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800"
                >
                    <PlusOutlined className="mr-2" />
                    Créer un profil
                </button>
                {isCreateFormOpen && (
                    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75 z-50 cursor-default">
                        <AddProfileForm />
                    </div>
                )}
            </div>
            <ProfileList/>
        </>
    );
}
