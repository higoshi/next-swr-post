import React from 'react';
import {NextPage} from 'next';
import useSWR from 'swr';

const basicUsage1: NextPage = () => {
  const {data, mutate} = useSWR<number>('example/key');

  return <>
    <h1>基本的使い方②</h1>
    <p>値: {data}</p>
    <hr/>
    <button onClick={() => {
      mutate(Math.random() * 10000 | 0);
    }}>
      mutate
    </button>
  </>;
};

export default basicUsage1;
