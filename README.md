# BIRD_VIEW 김성윤 과제

## ✨기술 스택

> 해당 프로젝트를 수행하며 사용할 기술 스택입니다.

- NodeJs
- Express JS
- TypeScript
- TypeORM

## ✨기능

> 각 모듈 별 기능을 나열하였습니다

- 회원을 등록한다
- 전체 회원을 조회한다

- 전체 게시물을 조회한다
- 전체 사진을 조회한다

- 회원이 게시물을 등록한다
- 회원의 게시물을 조회한다
- 회원이 게시물을 삭제한다

- 게시물을 수정한다
- 게시물을 삭제한다
- 게시물에 사진을 등록한다
- 게시물에 사진을 전체 삭제한다
- 특정 사진을 조회한다
- 특정 사진을 수정한다
- 특정 사진을 삭제한다




## ✨API 명세서
| 기능 | Method | URL | Request Body / Header | **StatusCode** / Response Body | Exception[**StatusCode** ,ErrorType] |
| --- | --- | --- | --- | --- | --- |
| 회원 등록 | POST | /users | {회원 정보} | **StatusCode**  201 |  |
| 전체 회원조회 | GET | /users |  | **StatusCode**  200 <br> **ResponseBody** <br>{전체 회원 <br>조회} &nbsp;|  |
| 전체 게시물 조회 | GET | /articles |  | **StatusCode** 200 <br>**Response Body** <br> {전체 게시물 조회} |  |
| 전체 사진 조회 | GET | /pictures |  | **StatusCode** 200 **Response Body** <br> {전체 게시물<br>조회} |  |
| 게시물 등록 | POST  | /users/:user_id/articles |  {게시물} | **StatusCode**  201  |  |
| 회원 게시물 전체 조회 | GET | /users/:user_id/articles |  | **StatusCode**  200 <br> **Response Body** <br> {전체 게시물 조회} |NotFoundUserException[400,A001]: 해당 유저가 존재하지 않을 경우  NotFoundArticlesException[400,A002]: 게시물이 존재하지 않을 경우 |
| 회원 게시물 전체 삭제 | DELETE | /users/:user_id/articles |  | **StatusCode**  204 | CannotDeleteException[401,A003] :  로그인 사용자와 게시자가 같지 않은 경우 |
| 회원게시물 수정| UPDATE | /users/:user_id/articles/:article_id | {수정된 게시물 내용} | |StatusCode 204 |  |
|  회원 게시물 삭제 | DELETE | /users/:user_id/articles/:article_id |  | **StatusCode**  204 | CannotDeleteException[401,A003] :  로그인 사용자와 게시자가 같지 않은 경우 |
| 게시물 사진 등록 | POST | /users/:user_id/articles/article_id/pictures | {사진 파일} | **StatusCode**  201   |NotFoundArticlesException[400,A002]: 게시물이 존재하지 않을 경우|
| 게시물 사진 전체 조회 | GET | /users/:user_id/articles/article_id/pictures |  | **StatusCode**  200 <br>**Response Body** <br> {전체 사진 조회} | NotFoundPicturesException[400,A004]: 사진이 존재하지 않을 경우|
|  게시물 사진 전체 삭제 | DELETE | /users/:user_id/articles/article_id/pictures |  | **StatusCode**  204 | CannotDeleteException[401,A003] :  로그인 사용자와 게시자가 같지 않은 경우 |
| 특정 사진 조회 | GET | /users/:user_id/articles/article_id/pictures/:picture_id |  | **StatusCode** 200 <br> **Response Body** <br>{특정 사진 조회} | NotFoundPicturesException[400,A004]: 사진이 존재하지 않을 경우 | 특정 사진 수정 | UPDATE | /users/:user_id/articles/article_id/pictures/:picture_id | {수정된 사진} | **StatusCode**  204 |  |
| 특정 사진 삭제 | DELETE | /users/:user_id/articles/article_id/pictures/:picture_id |  | **StatusCode**  204 | CannotDeleteException[401,A003] :  로그인 사용자와 게시자가 같지 않은 경우 |
