import { useEffect } from 'react';
import { useLogger } from 'react-use';

const About = () => {
  useLogger('[About]');

  useEffect(() => {
    throw new Error('에러 뿌루루루루뿜!');
  }, []);

  return <div>About page</div>;
};

export default About;
