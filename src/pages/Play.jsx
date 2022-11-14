import { AuthorizedLayout, Layout } from '../layouts';

export const Play = () => {
  return (
    <Layout>
      <div className="mx-auto container px-4">
        <AuthorizedLayout></AuthorizedLayout>
      </div>
    </Layout>
  );
};
