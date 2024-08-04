import books from './books.json';

export default function Home() {
  return (
    <main>
      <h1>Hello in Books World! </h1>
      <ul>
        {books.map((book) => {
          return <li key={book.id}>
            <h2>{book.title}</h2>
            {book.author} 
          </li>
        })}
      </ul>
    </main>
  );
}
