import React, { useEffect, useState } from 'react';

import { StyledArrow, TooltipContainer } from './ToolTip.styled';

const Tooltip = ({ message }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const onAnimationEnd = () => {
    if (!visible) {
      setVisible(false);
    }
  };

  return (
    <TooltipContainer
      style={{ display: visible ? 'block' : 'none' }}
      onAnimationEnd={onAnimationEnd}
    >
      {message}
      <StyledArrow />
    </TooltipContainer>
  );
};

export default Tooltip;
