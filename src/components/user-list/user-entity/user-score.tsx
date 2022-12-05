import React, { useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';

const Score = styled.span`
  animation-duration: 2s;
  animation-timing-function: linear;
  transition-duration: 1s;
`;

type Props = {
  score: number;
  prevScore: number;
};

const AppUserScore: React.FC<Props> = ({ score, prevScore }) => {
  const [displayScore, setDisplayScore] = useState(score);

  const diff = useMemo(() => {
    const temp = Math.floor((score - prevScore) / 10);
    return temp ? temp : 1;
  }, [prevScore, score]);

  useEffect(() => {
    if (score === prevScore || prevScore === 0)
      return;
      
    const id = requestAnimationFrame(() => {
      if (prevScore) {
        if (displayScore + diff <= score) {
          setDisplayScore(displayScore + diff);
        } else {
          setDisplayScore(score);
        }
      } else {
        setDisplayScore(score);
      }
    });
    return () => {
      cancelAnimationFrame(id);
    };
  }, [score, displayScore, diff, prevScore]);

  return <Score>{displayScore}pt</Score>;
};

export default AppUserScore;