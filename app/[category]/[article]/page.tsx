// app/[category]/[article]/page.tsx
type Props = {
    params: {
      category: string;
      article: string;
    };
  };
  
  export default function Page({ params }: Props) {
    const { category, article } = params;
  
    return (
      <div>
        <h1>Category: {category}</h1>
        <h2>Article: {article}</h2>
      </div>
    );
  }
  