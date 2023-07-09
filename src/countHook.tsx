import "./styles.css";
import { useEffect, useState } from "react";

const ComponentOutsideApp = () => {
  const [childOutsideInput, setChildOutsideInput] = useState("");
  const [data, setData] = useState(0);

  useEffect(() => {
    setData(data + 1);
  }, []);

  return (
    <div className="childOutside">
      <p>外側のコンポーネント</p>
      <input
        onChange={(e) => {
          setChildOutsideInput(e.target.value);
        }}
        value={childOutsideInput}
      />
    </div>
  );
};

const CountHook = () => {
  const [parentCount, setParentCount] = useState(0);

  const ComponentInsideApp = () => {
    const [childInsideInput, setChildInsideInput] = useState("");
    const [data, setData] = useState(null);

    useEffect(() => {}, []);

    return (
      <div className="childInside">
        <p>内側のコンポーネント</p>
        <input
          onChange={(e) => {
            setChildInsideInput(e.target.value);
          }}
          value={childInsideInput}
        />
      </div>
    );
  };

  return (
    <div className="parent">
      <p>親コンポーネント</p>
      <button
        onClick={() => {
          setParentCount(parentCount + 1);
        }}
      >
        再描画
      </button>
      <button
        onClick={() => {
          setTimeout(() => {
            setParentCount(parentCount + 1);
          }, 3000);
        }}
      >
        3秒後に再描画
      </button>
      <div className="flex">
        <ComponentInsideApp />
        <ComponentOutsideApp />
      </div>
    </div>
  );
};
export default CountHook;
