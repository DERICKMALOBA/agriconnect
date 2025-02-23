import React from 'react';
import ModalSelector from 'react-native-modal-selector';

const CustomPicker = ({ data, onValueChange }) => (
  <ModalSelector
    data={data}
    initValue="Select something..."
    onChange={(option) => onValueChange(option.label)}
  />
);

export default CustomPicker;
