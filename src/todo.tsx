import { VFC } from "react";
import { todoType } from "./types/todo";

export const Todo: VFC<Omit<todoType, "id">> = (props) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "完" : "未";
  return <p>{`[${completeMark}] ${title}(ユーザー:${userId})`}</p>;
};
