import { useNavigate } from 'react-router-dom';
import * as SentryReact from '@sentry/react';

const Home = () => {
  const methodDoesNotExist = () => {
    let a = 1;
    console.log(a.b());
    // const aFunctionThatMightFail = undefined;
    // try {
    //   aFunctionThatMightFail();
    // } catch (err) {
    //   // SentryReact.captureException(err);
    //   SentryReact.captureMessage('Something went wrong');
    // }
  };
  const navigate = useNavigate();
  return (
    <>
      <span>hello world</span>
      <button>12</button>
      <button>34</button>
      <button onClick={methodDoesNotExist}>Break the world</button>
      <button onClick={() => navigate('/user/1')}>go to userDetail</button>
    </>
  );
};

export default Home;
