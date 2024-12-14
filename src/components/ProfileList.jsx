import { useSelector } from "react-redux";

export default function ProfileList() {
    const profiles = useSelector(state => state.profiles);

    return (
        <div className="w-full mt-3 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {profiles.map(profile => (
                <div key={profile.id} className="flex flex-col justify-center items-center p-6 border border-gray-200 bg-white rounded-lg">
                    <img src={profile.photo} alt={profile.name} className="w-20 h-20 mb-3 rounded-full shadow-lg" />
                    <h2 className="text-2xl font-poppins font-semibold text-gray-900">{profile.name}</h2>
                    <p className="text-center text-sm font-poppins font-normal text-gray-400">{profile.description}</p>
                </div>
            ))}
        </div>
    );
}
