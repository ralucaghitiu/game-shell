import { AuthorizedLayout, Layout } from '../layouts';
import { Creature, ProfileForm, UserProfile } from './../components/profile';

export const Profile = () => {
  return (
    <Layout>
      {/* switch layout demo */}
      <AuthorizedLayout>
        <div className="container mx-auto px-6 mt-4">
          <header className="mb-8">
            <h1 className="text-3xl font-bold">Profile</h1>
          </header>

          <section className="grid grid-cols-12 mb-4">
            <div className="col-span-8">
              <UserProfile></UserProfile>
            </div>

            <div className="col-span-4">
              <Creature></Creature>
            </div>
          </section>

          <section className="mt-4 lg:w-1/4 lg:mt-12 mx-auto">
            <ProfileForm></ProfileForm>
          </section>
        </div>
      </AuthorizedLayout>
    </Layout>
  );
};
