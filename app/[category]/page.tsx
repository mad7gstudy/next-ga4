// app/[category]/[article]/page.tsx
type Props = {
    params: {
      category: string;
    };
  };
  
  export default function Page({ params }: Props) {
    const { category } = params;
  
    return (
      <div>
        <h1>Category: {category}</h1>
      </div>
    );
  }
  