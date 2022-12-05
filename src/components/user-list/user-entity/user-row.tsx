import React from 'react';
import styled from 'styled-components';
import User from '../../../models/user';
import AppUserScore from './user-score';

const Ranking = styled.span`
  min-width: 2rem;
  text-align: right;
`;

const Avatar = styled.img`
  border-radius: 50%;
  max-height: 50px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
`;

const Name = styled.span`
  flex: 1
`;

type Props = {
  user: User;
  index: number;
};

const AppUserRow: React.FC<Props> = ({user, index}) => {
  
  return <>
          <Ranking>{index}</Ranking>
          <Avatar src={user.picture}></Avatar>
          <Name>{user.displayName}</Name>
          <AppUserScore score={user.score} prevScore={user.prevScore}></AppUserScore>
         </>;
};

export default AppUserRow;