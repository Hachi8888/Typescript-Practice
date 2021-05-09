import { todoType } from "./types/todo";

export const Todo = (props: Omit<todoType, "id">) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "完" : "未";
  return <p>{`[${completeMark}] ${title}(ユーザー:${userId})`}</p>;
};
