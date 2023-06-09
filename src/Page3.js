import React from 'react';
import { useSelector } from 'react-redux';

const Page3 = () => {
  const name = useSelector((state) => state.name);
  const age = useSelector((state) => state.age);

  return (
    <div>
      <h1>Page 3</h1>
      <p>Your name {name} aged {age} has been added to the student system.</p>
      <p>You may now exit.</p>
    </div>
  );
};

export default Page3;
