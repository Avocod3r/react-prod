import React, { useEffect, useState } from 'react';
import { Button, ButtonAppearance } from 'shared/ui';

const BugButton = () => {
  const [error, setError] = useState<boolean>(false);

  const handleClick = () => {
    setError(true);
  };

  useEffect(() => {
    if (error) {
      throw error;
    }
  }, [error]);
  return (
    <Button appearance={ButtonAppearance.INVERTED} onClick={handleClick}>Throw Error</Button>
  );
};

export default BugButton;
