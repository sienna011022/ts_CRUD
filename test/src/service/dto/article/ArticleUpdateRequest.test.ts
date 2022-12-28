import ArticleUpdateRequest from "../../../../../src/service/dto/article/ArticleUpdateArticleRequest";

describe("articleUpdateRequest test", () => {
  it("articleUpdateRequest 객체 생성", () => {
    const request = {
      params: {
        user_id: "sienna1022",
        article_id: 1,
      },

      body: {
        title: "수정한 내용의 제목",
        content: "수정 내용",
      },
    };
    expect(new ArticleUpdateRequest(request)).toBeInstanceOf(
      ArticleUpdateRequest
    );
  });
});
