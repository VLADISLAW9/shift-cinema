import React from 'react';

interface UseCountDownParams {
  countStart: number;
  interval?: number;
  enabled?: boolean;
}

export const useCountDown = ({ interval = 1000, countStart }: UseCountDownParams) => {
  const intervalRef = React.useRef<ReturnType<typeof setInterval>>();
  const [count, setCount] = React.useState(countStart);

  const [enabled, setEnabled] = React.useState(true);

  React.useEffect(() => {
    if (!enabled) return;
    intervalRef.current = setInterval(() => {
      setCount((count) => count - 1);
    }, interval);

    return () => clearInterval(intervalRef.current);
  }, [enabled]);

  React.useEffect(() => {
    if (count === 0) {
      setEnabled(false);
      clearInterval(intervalRef.current);
    }
  }, [count]);

  const startCountDown = (time?: number) => {
    setCount(time ?? countStart);
    setEnabled(true);
  };

  return [count, { startCountDown }] as const;
};
