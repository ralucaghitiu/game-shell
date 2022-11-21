import { useSelector } from 'react-redux';

export const StatsList = () => {
  // aliased selector values
  const { played, won, lost } = useSelector(({ profile }) => {
    const { stats } = profile;
    const { gamesWon, gamesLost, gamesPlayed } = stats;

    return {
      played: gamesPlayed,
      won: gamesWon,
      lost: gamesLost,
    };
  });

  return (
    <ul className="border rounded-md shadow">
      <li className="border-b p-3">{played} games played.</li>

      <li className="border-b p-3">{won} games won.</li>

      <li className="p-3">{lost} games lost.</li>
    </ul>
  );
};
