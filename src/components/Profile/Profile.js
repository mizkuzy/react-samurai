import React, { useEffect } from "react";
import { compose } from "redux";
import { connect, useDispatch, useSelector } from "react-redux";
import { get as _get } from "lodash";
import { processProfile, updateStatus } from "../../redux/thunks";
import useLoginRedirect from "../../hooks/useLoginRedirect";
import s from "./Profile.module.css";
import LoadingSpinner from "../Common/LoadingSpinner";
import Info from "./Info/Info";
import PostsContainer from "./Posts/PostsContainer";

// todo REMOVE when profile hook will be refactored fully
const Profile = () => {
  useLoginRedirect();

  // const params = useParams(); //get from route
  // const userId = params.userId //get from route
  // console.log(userId);
  // debugger;
  //
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   if (userId) {
  //     dispatch(processProfile(userId));
  //   }
  // }, [userId]);

  const profile = useSelector((state) => state.profilePage.profile);
  const status = useSelector((state) => state.profilePage.status);

  console.log("profile", profile);
  console.log("status", status);
  return (
    <main className={s.profileContent}>
      {!profile && <LoadingSpinner />}

      {profile && (
        <>
          {/*<Info profile={profile} status={status} updateStatus={updateStatus} />*/}
          <PostsContainer />
        </>
      )}
    </main>
  );
};

export default Profile;
// export default compose(
//   withRouter,
//   connect(, {
//     processProfile,
//     updateStatus,
//   })
// )(Profile);
