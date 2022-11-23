import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

let dialogsHost = document.querySelector('.dialogs');

if (dialogsHost === null) {
  dialogsHost = document.createElement('div');
  dialogsHost.classList.add('dialogs');
  document.body.append(dialogsHost);
}

export const Dialog = ({ children, show = false, onClose = () => {} }) => {
  const el = useRef();

  useEffect(() => {
    const div = document.createElement('div');
    dialogsHost.append(div);

    el.current = div;

    return () => {
      el.current.remove();
    };
  }, [el]);

  if (!show) {
    return <></>;
  }

  const renderDialog = () => {
    return (
      <div className="absolute bg-white bg-opacity-30 top-0 left-0 w-screen h-screen flex justify-center items-center">
        <div className="bg-gray-100 bg-opacity-100 shadow p-2 rounded focus:outline-none">
          <header className="text-right">
            <button title="Close" type="button" onClick={onClose}>
              X
            </button>
          </header>

          <main className="p-2">{children}</main>
        </div>
      </div>
    );
  };

  return createPortal(renderDialog(), el.current);
};
