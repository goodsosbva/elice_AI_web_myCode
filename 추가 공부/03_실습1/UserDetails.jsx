import React from "react";
import styled from "styled-components";
import { colors } from "../style/colors";

export default function UserDetail({
  email,
  bitcoinAddress,
  bitcoinBalance,
  className,
}) {
  return (
    <Container className={className}>
      <Email>
        <h4>Email</h4>
        <span>{email}</span>
      </Email>

      <Bitcoin>
        <div>
          <strong className="title">Bitcoin Address</strong>
          <span className="content">{bitcoinAddress}</span>
        </div>

        <div>
          <strong className="title">Bitcoin Balance</strong>
          <span className="content">{bitcoinBalance} BTC</span>
        </div>
      </Bitcoin>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${colors.pink0};

  width: 500px;
  padding: 24px;

  border-radius: 10px;
`;

// 실행 결과를 참고하여 스타일을 설정해보세요.
const Email = styled.div`
  display: flex;

  h4 {
    display: inline-block;
    width: 120px;
    margin: 0;
    font-size: 1.1rem;
  }

  span {
    font-size: 0.85rem;
    font-weight: bold;
    align-self: flex-end;
  }
`;

const Bitcoin = styled.div`
  padding: 6px 0;

  & > div + div {
    margin-top: 4px;
  }

  .title {
    display: inline-block;
    font-size: 0.9rem;
    color: ${colors.pink5};
    width: 120px;
  }

  .content {
    color: ${colors.pink9};
    font-size: 0.8rem;
  }
`;

