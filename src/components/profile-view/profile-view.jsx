import react from "react";
import { UserInfo } from './user-info';
import { Link } from 'react-router-dom';
import { FavoriteMovies } from './user-favorites';
import { UpdateUser } from "./update-user";
import { UserDelete } from './user-delete';


export const ProfileView = ({ movies, user }) => {
  if (!user) {
    return <div>User data not available</div>;
  }
  const { Username, Email, Birthday, Password } = user;

  return (
    <div className="profile-view-container">
      <div className="user-info">
        <UserInfo
          name={user.Username}
          email={user.Email}
          birthday={user.Birthday}
          password={user.Password}
        />
      </div>
      <div className="user-update">
        <UpdateUser />
      </div>
      <div className="user-delete">
        <UserDelete />
      </div>
      <div className="favorite-movies">
        <FavoriteMovies movies={movies} user={user} />
      </div>
    </div>
  );
};