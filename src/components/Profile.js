
import React from "react";

// profile component that takes a person object as a prop and displays their information
const Profile = ({ person }) => {
  return (
    <div>
      <h2>{person.fullName}</h2>

      <p>{person.bio}</p>

      <h3>{person.profession}</h3>

      <img src={person.imgSrc} alt={person.fullName} width="200" />
    </div>
  );
};

export default Profile;
