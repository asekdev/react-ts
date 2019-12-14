import * as React from "react";

export interface Props {
  laughType: string;
  numLaughs?: number;
}

const Laugh = ({ laughType, numLaughs = 3 }: Props) => {
  const [isLaughing, setIsLaughing] = React.useState(false);

  if (numLaughs <= 0) {
    throw new Error("Laughs cant be 0 or less");
  }

  const startLaughing = () => {
    setIsLaughing(true);
  };

  return (
    <div className="hello">
      <button onClick={startLaughing}>Pess me to laugh</button>
      {isLaughing && (
        <h1 className="laughText">{laughType.repeat(numLaughs)}</h1>
      )}
    </div>
  );
};

export default Laugh;
