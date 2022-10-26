import React from 'react';
import styled from 'styled-components';
import UserDetail from './UserDetail';
import * as usersAPI from '../service/auth';
import { useState, useEffect } from 'react';

const WrappedUserDetail = styled(UserDetail)`
  & + & {
    margin-top: 12px;
  }
`;

// 유저 정보를 받아온 정보를 UserDetail에 넘겨 화면에 출력하세요.
// 데이터가 로딩 중인 경우 유저 정보를 불러오고 있다는 안내문을 띄웁니다.
export default function BitcoinApp() {
  const [users, setUsers] = useState(undefined);

  useEffect(() => {
    usersAPI.getUsers().then(data => {
      console.log(data);
      setUsers(data);
    });
  }, []);

  return (
    <div>
      {users.map(user => (
        <WrappedUserDetail
          email={user.email}
          bitcoinAddress={user.bitcoinAddress}
          bitcoinBalance={user.bitcoinBalance}
        />
      ))}
    </div>
  );
}


{/* <WrappedUserDetail
          email={user.email}
          bitcoinAddress={user.bitcoinAddress}
          bitcoinBalance={user.bitcoinBalance}
        /> */}