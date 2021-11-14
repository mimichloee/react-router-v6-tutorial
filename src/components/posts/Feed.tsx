import { useNavigate, useParams } from 'react-router';

const Feed = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Feed {id}</h1>
      <div>
        feed id: {id}
      </div>
      <footer>
        <button onClick={() => navigate(-1)}>Back to Lists</button>
      </footer>
    </div>
  );
};

export default Feed;
