import React, { useCallback, useEffect, useLayoutEffect, useState, useTransition } from 'react';
import styled from 'styled-components';
import User from '../../models/user';
import { getUsersData } from '../../services/streamers-data.service';
import AppUserRow from './user-entity/user-row';

const List = styled.ol`
  list-style-type: none;
  position: relative;
  min-width: 350px;
  max-height: 100%;
  padding: 0;
`;

const ListItem = styled.li`
  & {
    display: list-item;
    padding: 5px 0px;
    border-radius: 5px;
    -webkit-box-shadow: 0px 3px 10px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 3px 10px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 3px 10px 0px rgba(34, 60, 80, 0.2);
    width: 100%;
    transition: transform 0.4s ease;
    position: absolute;
    background: white;
  }

  & * {
    padding: 0px 5px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-between;
  align-items: center;
`;

const AppUserList: React.FC<{}> = () => {
  const [list, setList] = useState<User[]>([]);

  const calculateRank = (items : User[]) => {
    const modifiedData = [...items].sort((a,b) => {return b.score - a.score}).map((user, index) => {
      const newUser = {
        ...user,
        prevRank: user.rank,
        rank: index
      };

      return newUser;
    });

    return modifiedData;
  };

  useEffect(() => {
    if (!list.length) {
      getUsersData().then(data => {
        setList(calculateRank(data));
      });
    }
  });

  useLayoutEffect(() => {
    const interval = setInterval(() => {
      let modifiedData = list.map(user => {
        // simulate the update for only 33% of users at a time
        if (Math.floor(Math.random() * 3) !== 2) {
          return user;
        }

        const newUser = {
          ...user,
          prevScore: user.score,
          score: user.score + Math.floor(Math.random() * 10000)
        };

        return newUser;
      });

      const sortedData = calculateRank(modifiedData);

      modifiedData.forEach(user => {
        const rankedUser = sortedData.find(x => x.userID === user.userID);
        user.prevRank = rankedUser?.prevRank ?? 0;
        user.rank = rankedUser?.rank ?? 0;
      });

      setList(modifiedData);
    }, 2000);

    return () => clearInterval(interval);
  }, [list]);
  
  return (
          <List>
            {list.map((user, index) => (
              <ListItem key={user.userID} style={{
                transform: `translateY(${user.rank * 65 + "px"})`,
              }}>
                <Container>
                  <AppUserRow user={user} index={user.rank + 1}></AppUserRow>
                </Container>
              </ListItem>
            ))}
          </List>
        );
};

export default AppUserList;