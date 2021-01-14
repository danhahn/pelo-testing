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

const App: React.FC<AppProps> = ({ values = ['Active', 'Inactive'] }) => {
  const [state, setState] = React.useState(false);
  const [clicked, notClicked] = values;
  return (
    <div className="App">
      <div className="row">
        <Button onClick={() => setState(state => !state)} />
        <p>{state ? clicked : notClicked}</p>
      </div>
    </div>
  );
};

export default App;
