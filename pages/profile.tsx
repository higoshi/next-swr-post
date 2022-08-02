import React from 'react';
import {NextPage} from 'next';
import {useUsername} from '@/lib/hooks/useUsername';

const ProfilePage: NextPage = () => {
  const {username, setUsername} = useUsername();
  const [newUsername, setNewusername] = React.useState('');

  return (
    <>
      <h1>Demo Profile Page</h1>
      <p>名前:{username}</p>
      <hr />
      <label>
        新しい名前を入力
        <input
          onChange={e => {
            setNewusername(e.target.value);
          }}
        />
      </label>
      <button
        onClick={() => {
          setUsername(newUsername);
        }}
      >
        送信
      </button>
    </>
  );
};

export default ProfilePage;
