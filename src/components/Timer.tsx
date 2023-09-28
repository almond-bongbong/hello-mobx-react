import { observer } from 'mobx-react-lite';
import TimerStore from '../store/TimerStore.ts';

interface TimerProps {
  timer: TimerStore;
}

const Timer = observer(({ timer }: TimerProps) => {
  return (
    <div>
      <h2>Timer: {timer.secondPassed}</h2>
    </div>
  );
});

export default Timer;
