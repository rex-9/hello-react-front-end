import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/greeting/greetingXer';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greetings);

  const handleClick = () => {
    dispatch(fetchGreeting());
  };

  return (
    <section>
      <div>Hello</div>
      <h3>
        Grreting:
        {greeting}
      </h3>
      <button type="button" className="helloBtn" onClick={handleClick}>Get Greeting Randomnly</button>
    </section>
  );
};

export default Greeting;
