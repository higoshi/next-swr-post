import React from 'react';
import {NextPage} from 'next';
import Link from 'next/link';

const indexPage: NextPage = () => {
  return <>
    <h1>Index</h1>
    <ul>
      <li>
        <Link href="./basic-usage-1/" passHref>基本的使い方①</Link>
      </li>
      <li>
        <Link href="./basic-usage-2/" passHref>基本的使い方②</Link>
      </li>
    </ul>
    <ul>
      <li>
        <Link href="./profile/" passHref>プロフィール(デモ)</Link>
      </li>
    </ul>
  </>;
};

export default indexPage;
