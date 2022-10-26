# Filezilla를 통해 빌드한 React, Express 파일 배포하기

putty를 사용해서 nginx를 설치하면 기본적으로 /var/www/html 폴더에 빌드 파일을 넣어 배포할 수 있습니다.

## React 파일 빌드하기

---

![28C3651D-FCF2-41AF-B5C4-65FC5A766F12.jpeg](Filezilla%E1%84%85%E1%85%B3%E1%86%AF%20%E1%84%90%E1%85%A9%E1%86%BC%E1%84%92%E1%85%A2%20%E1%84%87%E1%85%B5%E1%86%AF%E1%84%83%E1%85%B3%E1%84%92%E1%85%A1%E1%86%AB%20React,%20Express%20%E1%84%91%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AF%20%E1%84%87%205e27c2ef51f6406bb42a2944426e492b/28C3651D-FCF2-41AF-B5C4-65FC5A766F12.jpeg)

빌드하고 싶은 파일에 터미널 창을 열어줍니다.

다음 명령어를 통해 리엑트 파일을 빌드합니다.

```jsx
npm run build
```

![64BDA124-ECCD-490D-826E-23CAD11F7885.jpeg](Filezilla%E1%84%85%E1%85%B3%E1%86%AF%20%E1%84%90%E1%85%A9%E1%86%BC%E1%84%92%E1%85%A2%20%E1%84%87%E1%85%B5%E1%86%AF%E1%84%83%E1%85%B3%E1%84%92%E1%85%A1%E1%86%AB%20React,%20Express%20%E1%84%91%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AF%20%E1%84%87%205e27c2ef51f6406bb42a2944426e492b/64BDA124-ECCD-490D-826E-23CAD11F7885.jpeg)

빌드가 완료되면 파일에 build 폴더가 생깁니다.

![1C4644F6-551E-4CAD-A66A-449E078693ED.jpeg](Filezilla%E1%84%85%E1%85%B3%E1%86%AF%20%E1%84%90%E1%85%A9%E1%86%BC%E1%84%92%E1%85%A2%20%E1%84%87%E1%85%B5%E1%86%AF%E1%84%83%E1%85%B3%E1%84%92%E1%85%A1%E1%86%AB%20React,%20Express%20%E1%84%91%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AF%20%E1%84%87%205e27c2ef51f6406bb42a2944426e492b/1C4644F6-551E-4CAD-A66A-449E078693ED.jpeg)

그러면 배포를 하기 위한 빌드 파일을 생성 했으므로 이 폴더 내부에 있는 파일들을 

/var/www/html 안에다가 끌어서 넣어줍니다.

![DC57C5A6-69A8-4000-89D1-03FC326F6925.jpeg](Filezilla%E1%84%85%E1%85%B3%E1%86%AF%20%E1%84%90%E1%85%A9%E1%86%BC%E1%84%92%E1%85%A2%20%E1%84%87%E1%85%B5%E1%86%AF%E1%84%83%E1%85%B3%E1%84%92%E1%85%A1%E1%86%AB%20React,%20Express%20%E1%84%91%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AF%20%E1%84%87%205e27c2ef51f6406bb42a2944426e492b/DC57C5A6-69A8-4000-89D1-03FC326F6925.jpeg)

![BA0DC725-B99B-4961-9775-05A6E94A40CE.jpeg](Filezilla%E1%84%85%E1%85%B3%E1%86%AF%20%E1%84%90%E1%85%A9%E1%86%BC%E1%84%92%E1%85%A2%20%E1%84%87%E1%85%B5%E1%86%AF%E1%84%83%E1%85%B3%E1%84%92%E1%85%A1%E1%86%AB%20React,%20Express%20%E1%84%91%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AF%20%E1%84%87%205e27c2ef51f6406bb42a2944426e492b/BA0DC725-B99B-4961-9775-05A6E94A40CE.jpeg)

빌드 파일을 넣은 후, 공인 아이피를 브라우저에 입력하여 정상적으로 파일이 나오는지 확인합니다.

## Express 파일 배포하기

---

AWS를 사용해서 배포하기 → [https://youtu.be/cOUhREAWJNw](https://youtu.be/cOUhREAWJNw)

보통은 서버에서 usr/local/ 경로에 서버 관련 파일을 배포하기도 합니다.

일단 그냥 / 경로에 server 폴더 하나를 생성해줍니다.

![E031F0B6-BAAE-43B4-884B-86530B806A31.jpeg](Filezilla%E1%84%85%E1%85%B3%E1%86%AF%20%E1%84%90%E1%85%A9%E1%86%BC%E1%84%92%E1%85%A2%20%E1%84%87%E1%85%B5%E1%86%AF%E1%84%83%E1%85%B3%E1%84%92%E1%85%A1%E1%86%AB%20React,%20Express%20%E1%84%91%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AF%20%E1%84%87%205e27c2ef51f6406bb42a2944426e492b/E031F0B6-BAAE-43B4-884B-86530B806A31.jpeg)

그 후 작성했던 server 폴더의 전체를 가져와서 넣어줍니다.

![25E064ED-B71B-46A4-AB05-88014D612F68.jpeg](Filezilla%E1%84%85%E1%85%B3%E1%86%AF%20%E1%84%90%E1%85%A9%E1%86%BC%E1%84%92%E1%85%A2%20%E1%84%87%E1%85%B5%E1%86%AF%E1%84%83%E1%85%B3%E1%84%92%E1%85%A1%E1%86%AB%20React,%20Express%20%E1%84%91%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AF%20%E1%84%87%205e27c2ef51f6406bb42a2944426e492b/25E064ED-B71B-46A4-AB05-88014D612F68.jpeg)

![5F29376A-458D-4C69-99EB-16F86A0F1A9C.jpeg](Filezilla%E1%84%85%E1%85%B3%E1%86%AF%20%E1%84%90%E1%85%A9%E1%86%BC%E1%84%92%E1%85%A2%20%E1%84%87%E1%85%B5%E1%86%AF%E1%84%83%E1%85%B3%E1%84%92%E1%85%A1%E1%86%AB%20React,%20Express%20%E1%84%91%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AF%20%E1%84%87%205e27c2ef51f6406bb42a2944426e492b/5F29376A-458D-4C69-99EB-16F86A0F1A9C.jpeg)

우분투에 node를 설치해서 서버를 실행시킵니다. → [https://velog.io/@ywoosang/Node.js-설치](https://velog.io/@ywoosang/Node.js-%EC%84%A4%EC%B9%98)

(블로그에서 3가지 방식으로 사용했는데 원하시는 방식 한가지를 사용하여 node를 설치하면됩니다.)

→[https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwiUwKmz1uH6AhWO7WEKHQl1C_UQFnoECA8QAQ&url=https%3A%2F%2Fgoodlucknua.tistory.com%2F42&usg=AOvVaw2hA40MxKSFs6-MZf2jlILe](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwiUwKmz1uH6AhWO7WEKHQl1C_UQFnoECA8QAQ&url=https%3A%2F%2Fgoodlucknua.tistory.com%2F42&usg=AOvVaw2hA40MxKSFs6-MZf2jlILe) 16버전 설치 법

하단 방식으로 저는 node를 설치했는데 안되시면 검색해서 다른 방식으로 설치하시면 될 것 같습니다.

```jsx
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash

source ~/.bashrc

nvm list-remote

nvm install v14.10.0 (원하는 버전)

nvm install lts/fermium

nvm use v14.10.0 (설치한 버전)

node -v
```

다음 서버 폴더를 putty로 접근하여, npm i → node app.js 를 사용해서 서버를 동작시킵니다.