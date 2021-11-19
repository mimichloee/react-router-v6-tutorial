import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const SESSION_KEY = 'uniqueId';

const Home = () => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const getUniqueId = window.sessionStorage.getItem(SESSION_KEY);
    const isNewTab = searchParams.get('newTab');

    if (!getUniqueId || isNewTab === 'true') {
      window.sessionStorage.setItem(SESSION_KEY, new Date().getTime().toString());
    }

    console.log('uniqueId', window.sessionStorage.getItem(SESSION_KEY));
  }, [searchParams]);

  return <div>Home page</div>;
};

export default Home;
