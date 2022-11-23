import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../components/common/ui';
import { MemoedRankLine as RankLine } from '../components/users/RankLine';
import { Layout } from '../layouts';
import { modifyRandomUser, readUsers } from '../store/actions/usersActions';

export const Ranks = () => {
  const dispatch = useDispatch();
  const users = useSelector(({ users }) => {
    return users.entities;
  });

  useEffect(() => {
    dispatch(readUsers());
  }, [dispatch]);

  return (
    <Layout>
      <div className="container mx-auto px-6 mt-4">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Ranks</h1>
        </header>

        <main className="mt-8">
          {users.length > 0 ? (
            <ul className="border rounded-md  shadow">
              {users.map((user) => {
                return <RankLine user={user} key={user.id}></RankLine>;
              })}
            </ul>
          ) : (
            <></>
          )}

          <div className="mt-4">
            <Button
              onClick={() => {
                dispatch(modifyRandomUser());
              }}
            >
              Chnage
            </Button>
          </div>
        </main>
      </div>
    </Layout>
  );
};
