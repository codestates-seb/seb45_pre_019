import { styled } from "styled-components";
import { Tags } from "./Tags";

const Block = styled.div`
  padding-right: 16px;
`;

const Body = styled.div`
  p {
    margin: 0 0 16px 0;
  }
`;

const QuestionTags = styled(Tags)`
  margin: 24px 0 25px 0;
`;

const Detail = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-wrap: wrap;
  margin: 16px 0;
  padding-top: 4px;

  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
  }
`;

const PostMenu = styled.ul`
  display: flex;
  flex-wrap: wrpa;
  flex: 1 auto;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;
  margin: 4px 16px 4px 0;
  margin-right: 16px;

  li {
    margin: 0 4px;
    font-size: 13px;
    color: #6a737c;
    height: 1rem;
    cursor: pointer;

    &:hover,
    &:active {
      color: #d1d4d7;
    }
  }

  h6 {
    font-size: 11px;
  }
`;

export const PostUser = styled.ul`
  width: 200px;
  margin: 4px 0;
  padding: 5px 6px 7px 7px;
  background: ${(props) => props.background && props.background}
  border-radius: 3px;

  h5 {
    margin: 1px 0 4px 0;
    color: #828d97;
    font-size: 12px;
  }
`;

const UserInfo = styled.div`
  display: flex;

  img {
    width: 32px;
    height: 32px;
    cursor: pointer;
  }

  > div {
    margin-left: 8px;
  }

  h6 {
    color: #0275cc;
    font-size: 13px;
    cursor: pointer;

    &:hover,
    &:active {
      color: #1597e6;
    }

    ul {
      display: flex;
      flex-direction: row;

      span:first-of-type {
        margin-left: 2px;
        font-weight: bold;
        font-size: 10px;
        color: #6a737c;
      }
      span:not(:first-of-type) {
        color: #a4afba;
        margin: 0px 3px 0px 2px;
        font-size: 10px;
      }
    }
  }
`;

// gold/silver/bronze badge
const Badge = styled.span`
  display: inline-block;
  margin: 0px 3px 0px 2px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

// Post-layout-right
export const QuestionContent = (type) => {
  return (
    <Block>
      <Body>
        {/* 내용 임의 생성 lorem ipsum */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <pre>
          <code></code>
        </pre>
      </Body>

      {/* 질문 게시글 태그 */}
      {type.type === "question" && (
        <QuestionTags>
          <li>
            {/* eslint-disable-line no-unused-vars */}
            <a href="https://stackoverflow.com/questions/tagged/python">
              python
            </a>
          </li>
          <li>
            {/* eslint-disable-line no-unused-vars */}
            <a href="https://stackoverflow.com/questions/tagged/pandas">
              pandas
            </a>
          </li>
        </QuestionTags>
      )}

      {/* [질문/답변] 작성자 정보 */}
      <Detail>
        <PostMenu>
          <li>Share</li>
          <li>Edit</li>
          <li>Follow</li>
        </PostMenu>
        {type.type === "question" ? (
          <div>
            {/* 질문 작성자 정보 */}
            <PostUser background="#d9eaf7">
              <h5>asked Mar 17 at 6:46</h5>
              <UserInfo>
                <img
                  src="	https://www.gravatar.com/avatar/aa0d95b3830549589afbbc79d886c466?s=64&d=identicon&r=PG"
                  alt="author avatar img"
                />
                <div>
                  <h6>질문자 이름</h6>
                  <ul>
                    <span>7,030</span>
                    <span title="requtation score">
                      <Badge color="#ffcc01" />1
                    </span>
                    <span>
                      <Badge color="#b4b8bc" />
                      35
                    </span>
                    <span>
                      <Badge color="#d1a684" />
                      52
                    </span>
                  </ul>
                </div>
              </UserInfo>
            </PostUser>
          </div>
        ) : (
          // 답변 작성자 정보
          <PostUser>
            <h5>answered 7 mins ago</h5>
            <UserInfo>
              <img
                src="https://www.gravatar.com/avatar/5b23414bad0323fc9258c50a931edf1a?s=64&d=identicon&r=PG"
                alt="user avatar img"
              />
              <div>
                <h6>답변자 이름</h6>
                <ul>
                  <span>4,030</span>
                  <span title="requtation score">
                    <Badge color="#ffcc01" />2
                  </span>
                  <span>
                    <Badge color="#b4b8bc" />
                    29
                  </span>
                  <span>
                    <Badge color="#d1a684" />
                    49
                  </span>
                </ul>
              </div>
            </UserInfo>
          </PostUser>
        )}
      </Detail>
    </Block>
  );
};
