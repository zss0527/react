import { useSearchParams } from "react-router-dom";

const Article = () => {
  //用于接收url?k=v的形式
  const [params] = useSearchParams();

  const id = params.get("id");
  const name = params.get("name");

  return (
    <div>
      我是文章页
      <br />
      {id}
      <br />
      {name}
    </div>
  );
};

export default Article;
