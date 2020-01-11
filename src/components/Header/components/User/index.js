import React from 'react';
import PropTypes from 'prop-types';

import Arrow from 'assets/Arrow';

import {user} from 'constants/staticData';
import {
  Wrapper,
  UserContent,
  UserDivider,
  UserLabel,
  UserSignIn,
  UserSignUp,
  UserProfile,
  UserProfileThumb,
  UserProfileName
} from './styled';

const User = ({me, setMe}) => {
  return (
    <Wrapper me={me}>
      {me ? (
        <UserProfile>
          <UserProfileThumb src={me.avatar} />
          <UserProfileName>
            Hello,
            <span>{me.firstName + ` ` + me.lastName}</span>
          </UserProfileName>

          <Arrow color="black" />
        </UserProfile>
      ) : (
        <>
          <UserLabel>Please,</UserLabel>
          <UserContent>
            <UserSignIn onClick={() => setMe(user)}>Sign In</UserSignIn>
            <UserDivider />
            <UserSignUp>Sign Up</UserSignUp>
          </UserContent>
        </>
      )}
    </Wrapper>
  );
};

User.defaultProps = {
  me: {},
  setMe: () => {}
};

User.propTypes = {
  me: PropTypes.object,
  setMe: PropTypes.func
};

export default User;
