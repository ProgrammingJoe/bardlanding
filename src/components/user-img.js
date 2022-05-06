import React from 'react';

const UserImgDefault = ({ user }) => {
  return (
    <>
      {user.profile_img ? (
        <img
          src={`https://${process.env.REACT_APP_S3}/${user.profile_img}`}
          className="profile-image"
          alt="Unsuccessfully loaded."
        />
      ) : (
        <img
          src={`https://${process.env.REACT_APP_S3}/profile/avatar.png`}
          className="profile-image"
          alt="Unsuccessfully loadded."
        />
      )}
    </>
  );
};

export default UserImgDefault;
