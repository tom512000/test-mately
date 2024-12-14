import { useState } from "react";
import { useSelector } from "react-redux";
import { MoreOutlined } from "@ant-design/icons";

export default function ProfileList() {
    const profiles = useSelector(state => state.profiles);

    const [activeProfileId, setActiveProfileId] = useState(null);
    function toggleVisibility(profileId) {
        if (activeProfileId === profileId) {
            setActiveProfileId(null);
        } else {
            setActiveProfileId(profileId);
        }
    }

    return (
        <div className="w-full mt-3 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {profiles.map(profile => (
                <div
                    key={profile.id}
                    className="flex flex-col justify-center items-center p-6 border border-gray-200 bg-white rounded-lg relative"
                >
                    <div className="absolute top-2 right-3.5 z-50">
                        <MoreOutlined rotate="90" className="text-xl" onClick={() => toggleVisibility(profile.id)} />
                        {activeProfileId === profile.id && (
                            <div className="absolute right-0 z-10 w-40 overflow-hidden bg-white border rounded-md shadow-xl">
                                <p>test</p>
                            </div>
                        )}
                    </div>
                    <img src={profile.photo} alt={profile.name} className="w-20 h-20 mb-3 rounded-full shadow-lg" />
                    <h2 className="text-2xl font-poppins font-semibold text-gray-900">{profile.name}</h2>
                    <p className="text-center text-sm font-poppins font-normal text-gray-400">{profile.description}</p>
                </div>
            ))}
        </div>
    );
}
