import React from "react";

type Article = {
  nameArticle: string;
  title: string;
  imgUrl: string;
  author: string;
  date: Date;
  tags: string[];
  category: string;
  slug: string;
  status: string;
};

interface ArticleProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleProps> = ({ article }) => {
  const {
    nameArticle,
    title,
    imgUrl,
    author,
    date,
    tags,
    category,
    slug,
    status,
  } = article;

  return (
    <div className="article">
      <h1>{title}</h1>
      <p>
        <strong>Author:</strong> {author}
      </p>
      <p>
        <strong>Date:</strong> {date.toDateString()}
      </p>
      <p>
        <strong>Category:</strong> {category}
      </p>
      <p>
        <strong>Status:</strong> {status}
      </p>
      {imgUrl && <img src={imgUrl} alt={nameArticle} />}
      <p>
        <strong>Slug:</strong> {slug}
      </p>
      <div className="tags">
        <strong>Tags:</strong>
        <ul>
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ArticleCard;
