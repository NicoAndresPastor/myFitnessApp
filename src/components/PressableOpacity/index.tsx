import {Pressable as PressableRaw} from 'react-native';

function Pressable(props) {
  return (
    <PressableRaw
      onPress={props.onPress}
      hitSlop={props.hitSlop}
      style={({pressed}) => [props.style || {}, {opacity: pressed ? 0.5 : 1}]}>
      {props.children}
    </PressableRaw>
  );
}

export default Pressable;
