import { Link } from 'react-router-dom';
import { AuthorizeInline } from '../../auth';

export const Footer = () => {
  return (
    <div className="mx-auto container px-4 flex items-center justify-between">
      <span>Copyright</span>

      <ul>
        <AuthorizeInline>
          <li>
            <Link to="/profile" title="Profile">
              Profile
            </Link>
          </li>

          <li>
            <Link to="/play" title="Play">
              Play
            </Link>
          </li>
        </AuthorizeInline>

        <li>
          <Link to="/ranks" title="Ranks">
            Ranks
          </Link>
        </li>
      </ul>
    </div>
  );
};
