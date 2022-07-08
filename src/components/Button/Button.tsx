import React from 'react';
import './Button.css';

type ButtonProps = {
  text: string;
  onClick: (e: React.MouseEvent) => void;
};

export function Button(props: ButtonProps) {
  return (
    <button
      className="button"
      data-tid="button"
      onClick={props.onClick}
    >
        {props.text}
    </button>
  );
}
