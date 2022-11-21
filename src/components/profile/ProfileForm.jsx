import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../common/ui';
import {
  setCreatureColor,
  updateUserProfile,
} from './../../store/actions/profileActions/profileActions';
import { TbDeviceFloppy, TbFidgetSpinner } from 'react-icons/tb';

export const ProfileForm = () => {
  const dispatch = useDispatch();
  const [busy, setBusy] = useState(true);
  const { mainColor, eyeColor, secondaryColor } = useSelector(({ profile }) => {
    const { mainColor, eyeColor, secondaryColor } = profile.creature;

    return { mainColor, eyeColor, secondaryColor };
  });

  const { userId } = useSelector(({ auth }) => {
    const { user } = auth;

    return {
      userId: user.id,
    };
  });

  const onColorPickerChange = (event) => {
    const element = event.currentTarget;
    const targetKey = element.id;
    const colorValue = element.value;

    dispatch(setCreatureColor(targetKey, colorValue));
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    setBusy(true);

    await dispatch(
      updateUserProfile(userId, {
        mainColor,
        eyeColor,
        secondaryColor,
      }),
    );

    setBusy(false);
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <div className="flex justify-between">
        <label htmlFor="mainColor">Main Color</label>

        <input
          type="color"
          name="mainColor"
          id="mainColor"
          value={mainColor}
          onChange={onColorPickerChange}
        ></input>
      </div>

      <div className="flex justify-between">
        <label htmlFor="secondaryColor">Secondary Color</label>

        <input
          type="color"
          name="secondaryColor"
          id="secondaryColor"
          value={secondaryColor}
          onChange={onColorPickerChange}
        ></input>
      </div>

      <div className="flex justify-between">
        <label htmlFor="eyeColor">Eye Color</label>

        <input
          type="color"
          name="eyeColor"
          id="eyeColor"
          value={eyeColor}
          onChange={onColorPickerChange}
        ></input>
      </div>

      <div className="text-center">
        <Button
          type="submit"
          title="Save"
          className="gap-2 items-center"
          disabled={busy}
        >
          {busy ? (
            <>
              <TbFidgetSpinner className="animate-spin"></TbFidgetSpinner>
              Saving
            </>
          ) : (
            <>
              <TbDeviceFloppy></TbDeviceFloppy>
              Save
            </>
          )}
        </Button>
      </div>
    </form>
  );
};
