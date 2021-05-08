export const Practice4 = () => {
  // 暗黙any
  const calculateFee = (num) => {
    const total = num * 1.1;
    console.log(total);
  };

  const onClickPractice = () => calculateFee(1000);

  return (
    <div>
      <p>練習問題：設定ファイルを触ってみる</p>
      <button onClick={onClickPractice}>練習問題4を実行</button>
    </div>
  );
};
