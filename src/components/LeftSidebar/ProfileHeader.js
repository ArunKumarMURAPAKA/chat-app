import React from "react";

function ProfileHeader({ user }) {
  return (
    <>
      <div className="header">
      <div className="header-name">
        <p className="user-name">{user.name}</p>
      </div>
      </div>
    </>
  );
}

export default ProfileHeader;