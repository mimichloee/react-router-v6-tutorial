import { Link, Outlet } from 'react-router-dom';

const Feeds = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="1">Feed 1</Link>
        </li>
        <li>
          <Link to="2">Feed 2</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Feeds;
