import { useCallback, useEffect, useState } from "react";
import { FigureColor } from "../types/figureTypes";
import { useTypedSelector } from "./useTypedSelector";

interface UseTimer {
  white: string;
  black: string;
}

export const useTimer = ():UseTimer => {
  const { timer, currentPlayer } = useTypedSelector((store) => store.board);
  const [timerWhite, setTimerWhite] = useState(timer.white);
  const [timerBlack, setTimerBlack] = useState(timer.black);
  const [currentInterval, setCurrentInterval] = useState(0);

  const runTimer = useCallback((timer, setTimer, setCurrentInterval) => {
    const interval = setInterval(() => {
      setTimer(++timer);
    }, 1000);
    setCurrentInterval(interval);
  }, []);

  const stopTimer = useCallback((currentInterval) => {
    clearInterval(currentInterval);
  }, []);

  useEffect(() => {
    if (currentPlayer === FigureColor.WHITE) {
      runTimer(timerWhite, setTimerWhite, setCurrentInterval);
      stopTimer(currentInterval);
    } else {
      runTimer(timerBlack, setTimerBlack, setCurrentInterval);
      stopTimer(currentInterval);
    }

    return stopTimer(currentInterval);
  }, [currentPlayer]); // eslint-disable-line react-hooks/exhaustive-deps

  const timerToString = (countDown: number): string => {
    const hours = Math.floor((countDown % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((countDown % (60 * 60)) / 60);
    const seconds = Math.floor(countDown % 60);

    return (
      `${hours >= 10 ? hours : "0" + hours}` +
      `:${minutes >= 10 ? minutes : "0" + minutes}` +
      `:${seconds >= 10 ? seconds : "0" + seconds}`
    );
  };

  return {
    white: timerToString(timerWhite),
    black: timerToString(timerBlack),
  };
};
