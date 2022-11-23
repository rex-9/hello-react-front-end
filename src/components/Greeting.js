import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/greeting/greetingXer';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greetings);

  console.log('useeffect');
  useEffect(() => {
    console.log('GREETING', greeting);
    dispatch(fetchGreeting());
  }, []);

  return (
    <section>
      <div>Hello</div>
      <h3>{greeting}</h3>
    </section>
  );
};

export default Greeting;
