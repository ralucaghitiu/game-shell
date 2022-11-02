import { Link } from 'react-router-dom';
import { Layout } from '../layouts';

export const Play = () => {
  return (
    <Layout>
      <div className="mx-auto container px-4">
        <h1>Play</h1>

        <Link to="/" title="Home">
          Home
        </Link>
      </div>
    </Layout>
  );
};