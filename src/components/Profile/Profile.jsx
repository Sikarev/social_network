import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = (props) => {
    // debugger;
    return (
        <div>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                savePhoto={props.savePhoto}
                saveProfile={props.saveProfile}
                isOwner={props.isOwner} />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;