import "./Profile.component.css";
const Profile = () => {
  return (
    <div>
      <div className="profile-photo top-line">
        <img
          src="profilephoto.jpg"
          alt="Profile Photo"
          className="photo-centre"
        />
      </div>
      <div className="profile">
        <label className="label">Log Out</label>
        <label className="label">Log Out</label>
        <label className="label">Log Out</label>
        <label className="label">Log Out</label>
      </div>
    </div>
  );
};

export default Profile;
