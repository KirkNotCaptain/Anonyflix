import { useSpring, animated, config } from 'react-spring';

var AnimatedHeader = () => {
  const props = useSpring({
    config: config.molasses,
    opacity: 1,
    from: { opacity: 0 },
    loop: true,
  });
  return <animated.h1 style={props}>AnonyFlix</animated.h1>;
};

export default AnimatedHeader;
