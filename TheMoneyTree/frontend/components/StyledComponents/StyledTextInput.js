import { styled } from 'nativewind';
import { TextInput } from 'react-native';

const StyledTextInput = styled(TextInput)`
/* Center the text input */
align-self: center;

/* Round the corners */
border-radius: 8px;

/* Add a slight shadow */
shadow-color: #000;
shadow-opacity: 0.1;
shadow-radius: 3px;
elevation: 3; /* For Android */

/* Add any other Tailwind CSS styles as needed */
`;

export default StyledTextInput;
