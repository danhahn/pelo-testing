import React from 'react';
import './App.css';

type ButtonProps = {
  onClick: () => void;
  className?: string;
};

type AppProps = {
  values?: string[];
};

const Button: React.FC<ButtonProps> = ({ onClick, className }) => (
  <button className={className} onClick={onClick}>
    Button
  </button>
);

const App: React.FC<AppProps> = ({ values = ['clicked', 'not clicked'] }) => {
  const [state, setState] = React.useState(false);
  const [clicked, notClicked] = values;
  return (
    <div className="App">
      <h1>
        {state ? clicked : notClicked}
        <br />
      </h1>
      <Button onClick={() => setState(state => !state)} />
    </div>
  );
};

export default App;
