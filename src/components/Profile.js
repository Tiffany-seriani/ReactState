
import React from "react";

const Profile = ({ person }) => {
  return (
    <div>

      <h2>{person.fullName}</h2>

      <p>{person.bio}</p>

      <h3>{person.profession}</h3>
    </div>
  );
};

export default Profile;