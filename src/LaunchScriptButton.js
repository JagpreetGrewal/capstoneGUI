import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { spawn } from 'child_process';

const LaunchScriptButton = () => {
  const [output, setOutput] = useState('');

  const handleClick = () => {
    const pythonScript = spawn('python', ['./example1.py']);

    pythonScript.stdout.on('data', (data) => {
      setOutput((prevOutput) => prevOutput + data);
    });

    pythonScript.stderr.on('data', (data) => {
      setOutput((prevOutput) => prevOutput + data);
    });
  };

  return (
    <div>
      <Button onClick={handleClick}>Launch Script</Button>
      <p>{output}</p>
    </div>
  );
};

export default LaunchScriptButton;
