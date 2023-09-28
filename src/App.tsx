import TimerStore from './store/TimerStore.ts';
import Timer from './components/Timer.tsx';
import { useEffect } from 'react';
import RenderComponent from './components/RenderComponent.tsx';
import { Observer } from 'mobx-react-lite';

const timerStore = new TimerStore();

function App() {
  useEffect(() => {
    const interval = setInterval(() => {
      timerStore.increaseTimer();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Mobx playground</h1>
      <Timer timer={timerStore} />

      {/* Not update */}
      <RenderComponent>
        {() => <h2>Render Component: {timerStore.secondPassed}</h2>}
      </RenderComponent>

      {/* Update */}
      <RenderComponent>
        {() => (
          <Observer>
            {() => <h2>Render Component: {timerStore.secondPassed}</h2>}
          </Observer>
        )}
      </RenderComponent>
    </div>
  );
}

export default App;
