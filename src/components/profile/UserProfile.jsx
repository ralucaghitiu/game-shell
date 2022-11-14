import { useSelector } from 'react-redux';

export const UserProfile = () => {
  const { name, avatar, email } = useSelector(({ auth }) => {
    const { user } = auth;
    const { name, avatar, email } = user;

    return { name, avatar, email };
  });

  return (
    <>
      <h1 className="text-xl font-bold mb-8">User Info</h1>

      <div className="flex flex-col lg:flex-row justify-between">
        <picture className="mr-8 inline-block rounded-full self-center overflow-hidden shadow mb-4 lg:mb-0">
          <img src={avatar} alt={name}></img>
        </picture>

        <ul>
          <li>{name}</li>
          <li>{email}</li>
        </ul>
      </div>
    </>
  );
};
