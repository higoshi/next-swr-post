import React from 'react';
import {NextPage} from 'next';
import useSWR, {mutate} from 'swr';

const BasicUsage1: NextPage = () => {
  const {data} = useSWR<number>('example/key');

  return (
    <>
      <h1>基本的使い方①</h1>
      <p>値: {data}</p>
      <hr />
      <button
        onClick={() => {
          mutate('example/key', (Math.random() * 10000) | 0);
        }}
      >
        mutate
      </button>
    </>
  );
};

export default BasicUsage1;
