import { VFC } from "react"; // コンポーネント自体の型定義の仕方 ーーー> FC: childrenを暗黙的に含むが、VFCは含まない
type Props = {
  color: string;
  fontSize: string;
};

export const Text: VFC<Props> = (props) => {
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>テキストです</p>;
};
