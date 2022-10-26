import React, { useState, useEffect } from "react";
import * as authAPI from "../service/auth";
import styled from "styled-components";
import UserDetail from "./UserDetail";
// RegisterForm을 이용해 유저 정보를 가져와 화면을 업데이트하세요.

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
    authAPI.getUsers().then((data) => {
      console.log(data);
      setUsers(data);
    });
  }, []);

  if (!users) {
    return <div>유저 정보를 불러오는 중입니다...</div>;
  }

  return (
    <div>
      {users.map((user) => (
        <WrappedUserDetail {...user} />
      ))}
    </div>
  );
}
