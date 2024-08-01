import { useEffect, useState } from 'react';
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
  // eslint-disable-next-line i18next/no-literal-string
    <Button appearance={ButtonAppearance.CLEAR} onClick={handleClick}>Throw Error</Button>
  );
};

export default BugButton;
