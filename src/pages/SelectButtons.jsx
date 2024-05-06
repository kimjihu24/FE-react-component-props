import React, { useState } from 'react';
import Button from "../components/Button/Button";

const SelectButtons = () => {
  const [ButtonOn, setButtonOn] = useState('');

  const buttonClick = (buttonName) => {
    setButtonOn(buttonName);
  };

  return (
    <div className="selectBtns">
      <Button onClick={() => buttonClick('primary')} style={{ backgroundColor: ButtonOn === 'primary' ? 'pink' : 'blue' }}>Primary</Button>
      <Button onClick={() => buttonClick('secondary')} style={{ backgroundColor: ButtonOn === 'secondary' ? 'pink' : 'blue' }}>Secondary</Button>
      <Button onClick={() => buttonClick('default')} style={{ backgroundColor: ButtonOn === 'default' ? 'pink' : 'blue' }}>Default</Button>
    </div>
  );
};

export default SelectButtons;
