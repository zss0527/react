import { useSearchParams } from "react-router-dom";

const Article = () => {
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
