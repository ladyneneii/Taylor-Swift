

type Props = {
  textAlign: "left" | "right" | "center" | "justify" | "start" | "end";
  color: string;
  fontSize: string;
  titleAuthor: string;
};

const TitleAuthor = ({textAlign, color, fontSize, titleAuthor }: Props) => {
  return (
    <div style={{textAlign}}>
      <span className="titleAuthor-span" style={{ color, fontSize }}>
        {titleAuthor}
      </span>
    </div>
  );
};

export default TitleAuthor;
