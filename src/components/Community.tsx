import { Outlet, NavLink } from 'react-router-dom';

const Community = () => {
  return (
    <div className="posts">
      <aside>
        <ul>
          <li>
            <NavLink to="feeds">Feed</NavLink>
          </li>
          <li>
            <NavLink to="media">Media</NavLink>
          </li>
        </ul>
      </aside>
      <Outlet/>
    </div>
  );
};

export default Community;
