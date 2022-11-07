import { MdGames } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const Header = () => {
  const { authenticated } = useSelector(({ auth }) => {
    const { authenticated } = auth;

    return { authenticated };
  });

  return (
    <div className="container mx-auto px-4 flex justify-between">
      <h1 className="uppercase font-bold text-lg inline-block">
        <Link to="/" title="Home" className="flex gap-3">
          <MdGames size={32} className="inline-block"></MdGames>
          Game Shell
        </Link>
      </h1>

      <div>{JSON.stringify(authenticated)}</div>
    </div>
  );
};
