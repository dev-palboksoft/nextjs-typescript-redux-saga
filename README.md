# Next.js + typescript + redux-saga 조합의 샘플 입니다. ^^ 
##	- 김서진 (kim@palboksoft.com) -


요즘 웹 개발 방법 중에 React + Typescript 조합으로 하는 프로젝트들의 점유율이 상당히 높은 것으로 알고 있습니다. 
그런데 설치에서 부터 막히신 분들 많으시죠? 그 마음 다 이해합니다. 

크~~ 

내가 만들지도 않은 컴퍼넌트들의 타입은 어떻게 해야 할지도 모르겠고, redux wrapper는 어디에 어떻게 씌워야 할지 도저히 감도 안 오고, 폴더 구성은 어떻게 해야 할지 막막하고 그렇죠?
(초보자분께 하는 말…히히)

React가 제법 초반 진입 장벽이 쫌 있거든요. 

그래서 조금이라도 도움을 드리고자 제가 쓰던 코드 패턴으로 기본 설치와 동작하는 기본 샘플 몇 개를 준비 해봤습니다. 

제가 짠 코드도 좋은 코드는 아니지만 초반 설치 부터 막히신 분들은 참고하면 아주아주 유용 할 것이라 생각 됩니다. 

꼭 도움이 되셨으면 좋겠네요~ ^^ 



# 참고 

Next.js

-	React의 SSR(server side rendering)을 도와주는 프레임워크 입니다.


Typescript

-	Javascript의 type을 엄격하게 지킬 수 있도록 도와줍니다.


Redux-saga

-	비동기 처리를 쉽게 도와줍니다.



# Quick start

// 패키지 설치 
<pre>
<code>
  npm install 
</code>
</pre>


// eslint 
<pre>
<code>
  npm run lint 
</code>
</pre>


// 개발 모드 실행
<pre>
<code>
  npm run dev 
</code>
</pre>


// 빌드 후 실행
<pre>
<code>
  npm run build
  npm run start
</code>
</pre>



# Example 

1.	Redux를 이용한 카운트 예제
2.	Redux-saga delay를 이용한 무한 루프 예제
3.	API Request 예제
4.	getStaticProps에서 API Request 예제 


<img src="https://user-images.githubusercontent.com/54313551/91852006-213db680-ec9b-11ea-8934-4bd5fe0b6e4a.JPG" width="90%" />

