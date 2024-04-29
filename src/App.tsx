import { useMemo, useState } from 'react';

function App() {
  const [disable, setDisable] = useState(false);

  const colorValue = useMemo(() => {
    return disable ? 200 : 500;
  }, [disable]);

  return (
    <>
      <button onClick={setDisable.bind(null, !disable)}>
        Click {disable.toString()} {`text-zinc-${colorValue}`}
      </button>
      <p className={`text-zinc-${colorValue}`}>Hello React.js</p>
    </>
  );
}

export default App;
