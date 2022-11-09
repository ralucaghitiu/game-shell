import { useEffect, useRef } from 'react';
import { initializeGoogleAuth } from '../../api/auth';

export const GoogleLogin = () => {
  const buttonRef = useRef();

  useEffect(() => {
    if (buttonRef.current !== null) {
      const af = async () => {
        await initializeGoogleAuth();
        /* global google */
        google.accounts.id.renderButton(buttonRef.current, {
          theme: 'outline',
        });
      };

      af();
    }
  }, [buttonRef]);

  return (
    <>
      <div ref={buttonRef}></div>
    </>
  );
};
