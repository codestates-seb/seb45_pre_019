import React from "react"; // eslint-disable-line no-unused-vars
import { styled } from "styled-components";
import { ReactComponent as LogoIcon } from "../assets/icons/logo.svg";

const FooterContainer = styled.footer`
  background-color: #232629;
  color: #babfc3;
  /* margin-top: 24px; */
  display: block;
  > .footer {
    box-sizing: border-box;
    width: 100%;
    max-width: 1264px;
    margin: 0 auto;
    padding: 32px 12px 12px 12px;
    display: flex;
    flex-flow: row wrap;

    li,
    ul {
      margin: 0;
      padding: 0;
    }

    > .footerLogo {
      flex: 0 0 64px;
      margin: -12px 0 32px 0;
    }

    > .footerNav {
      display: flex;
      flex: 2 1 auto;
      flex-wrap: wrap;
      > .footerNavColumn {
        padding: 0 12px 24px 0;
        flex: 1 0 auto;
        > h5 {
          margin-top: 0;
          margin-bottom: 12px;
          font-size: 13px;
          font-weight: bolder;
          color: #babfc4;
        }
        > ul {
          font-size: 13px;
          color: #686f75;
          > li {
            margin: 0;
            padding: 4px 0;
          }
        }
      }
    }

    > .footerCopyright {
      display: flex;
      flex: 1 1 150px;
      flex-direction: column;
      box-sizing: border-box;
      font-size: 11px;
      > ul {
        display: flex;
        flex-direction: row;
        vertical-align: baseline;
        > li {
          padding: 4px 0;
          margin-left: 12px;
          font-size: 11px;
          /* line-height: calc(17 / 13); */
          :first-child {
            margin-left: 0;
          }
        }
      }
      > p {
        margin-top: auto;
        margin-bottom: 24px;
        line-height: 1.4;
        vertical-align: baseline;
      }
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer">
        {/* 로고 아이콘 */}
        <div className="footerLogo">
          <LogoIcon />
        </div>
        {/* nav columns */}
        <nav className="footerNav">
          <div className="footerNavColumn">
            <h5>
              <a href="https://stackoverflow.com">STACK OVERFLOW</a>
            </h5>
            <ul>
              <li>Questions</li>
              <li>Help</li>
            </ul>
          </div>
          <div className="footerNavColumn">
            <h5>
              <a href="https://stackoverflow.co">PRODUCTS</a>
            </h5>
            <ul>
              <li>Teams</li>
              <li>Advertising</li>
              <li>Collectives</li>
              <li>Talent</li>
            </ul>
          </div>
          <div className="footerNavColumn">
            <h5>
              <a href="https://stackoverflow.co">COMPANY</a>
            </h5>
            <ul>
              <li>About</li>
              <li>Press</li>
              <li>Work Here</li>
              <li>Legal</li>
              <li>Privacy Plicy</li>
              <li>Terms of Service</li>
              <li>Contact Us</li>
              <li>Cookie Settings</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
          <div className="footerNavColumn">
            <h5>
              <a href="https://stackexchange.com">STACK EXCHANGE NETWORK</a>
            </h5>
            <ul>
              <li>Technology</li>
              <li>Culture & recreation</li>
              <li>Life & arts</li>
              <li>Science</li>
              <li>Professional</li>
              <li>Business</li>
              <li>API</li>
              <li>Data</li>
            </ul>
          </div>
        </nav>
        {/* sns channels & copyright */}
        <div className="footerCopyright">
          <ul>
            <li>
              <a
                href="https://stackoverflow.blog/?blb=1&_ga=2.166416958.161708468.1692151237-1641430801.1691383801"
                target="_blank"
                rel="noreferrer"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/officialstackoverflow/"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/stackoverflow"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/stack-overflow"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a href="Instagram" target="_blank">
                Instagram
              </a>
            </li>
          </ul>
          <p>
            Site design / logo © 2023 Stack Exchange Inc; user contributions
            licensed under CC BY-SA.
            <span>rev 2023.8.15.43579</span>
          </p>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
