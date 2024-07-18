import React from 'react'

type Props = {
    color: string;
    children: React.ReactNode
}

const Title = ({color, children}: Props) => {
  return (
    <div className="title__container">
      <h1 style={{color: color}}>
        {children}
      </h1>
    </div>
  );
}

export default Title