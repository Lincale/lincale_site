import { css } from 'linaria'
import { styled } from 'linaria/react'

export const clickableName = css`
  font-size: 1.5rem;
  line-height: 1.4;
  margin: 1rem 0;
`;

export const blogTitle = css`
  font-size: 1.5rem;
  line-height: 1.4;
  margin: 1rem 0;
`;

export const Section = styled.section<{ paddingTop?: string}>`
  font-size: 1.2rem;
  line-height: 1.5;
  padding-top: ${(props) => props.paddingTop}
`;

export const articleTitle = css`
  font-size: 2rem;
  line-height: 1.3;
  font-weight: 800;
  letter-spacing: -0.05rem;
  margin: 1rem 0;
`;

export const blogColumn = css`
  list-style: inside;
  padding: 0;
  margin: 0;
`;

export const lightText = css`
  color: #999;
`;

export const articleList = css`
  margin: 0 0 1.25rem;
`;

export const divContainer = css`
  max-width: 36rem;
  padding: 0 1rem;
  margin: 3rem auto 6rem;
`

export const layoutHeader = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const nameInHome = css`
  font-size: 2.5rem;
  line-height: 1.2;
  font-weight: 800;
  letter-spacing: -0.05rem;
  margin: 1rem 0;
`

export const backToHome = css`
  margin: 3rem 0 0;
`

export const colorInherit = css`
  color: inherit;
`

export const borderRadius = css`
  border-radius: 9999px;
`
