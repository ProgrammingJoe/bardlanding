import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  flex: 0 0 80px;
  
  img {
    width: 80px;
    height: 80px;
    border-radius: 80px;
  }
`

const UserImgDefault = ({ user }) => {
  return (
    <Wrapper>
      {user.profile_img ? (
        <img
          src={`https://${process.env.GATSBY_REACT_APP_S3}/${user.profile_img}`}
          className="profile-image"
          alt="Unsuccessfully loaded."
        />
      ) : (
        <img
          src={`https://${process.env.GATSBY_REACT_APP_S3}/profile/avatar.png`}
          className="profile-image"
          alt="Unsuccessfully loadded."
        />
      )}
    </Wrapper>
  );
};

export default UserImgDefault;
