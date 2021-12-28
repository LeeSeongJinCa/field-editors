import * as React from 'react';
import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';
import { RenderElementProps } from 'slate-react';

const style = css({
  margin: '0 0 1.3125rem',
  borderLeft: `6px solid ${tokens.gray200}`,
  paddingLeft: '0.875rem',
  fontStyle: 'normal',
  '& a': {
    color: 'inherit',
  },
});

export function Quote(props: RenderElementProps) {
  return (
    <blockquote {...props.attributes} className={style}>
      {props.children}
    </blockquote>
  );
}
