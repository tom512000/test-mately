import { useSelector } from "react-redux";

export default function ProfileList() {
    const profiles = useSelector(state => state.profiles);

    return (
        <div>
            {profiles.map(profile => (
                <div key={profile.id} className="profile-card">
                    <img src={profile.photo} alt={profile.name} />
                    <h2>{profile.name}</h2>
                    <p>{profile.description}</p>
                </div>
            ))}
        </div>
    );
}
