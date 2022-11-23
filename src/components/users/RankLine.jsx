import { memo } from 'react';

export const RankLine = ({ user }) => {
  const { id, stats } = user;

  return (
    <li className="border-b p-3">
      {id}
      Games won: {stats.gamesWon}
    </li>
  );
};

export const MemoedRankLine = memo(RankLine);
