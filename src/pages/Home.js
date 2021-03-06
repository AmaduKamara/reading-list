import BookList from "../components/BookList";
import BookForm from "../components/BookForm";

import { useCollection } from "../hooks/useCollection";

// import { db } from "../firebase/config";
// import { collection, getDocs } from "firebase/firestore";

export default function Home() {
  const { documents: books } = useCollection("books");

  // const [books, setBooks] = useState(null);
  // useEffect(() => {
  //   const ref = collection(db, "books");
  //   getDocs(ref).then((snapshot) => {
  //     let books = [];
  //     snapshot.forEach((doc) => {
  //       books.push({ id: doc.id, ...doc.data() });
  //     });
  //     setBooks(books);
  //   });
  // }, []);

  return (
    <div className="App">
      {books && <BookList books={books} />}
      <BookForm />
    </div>
  );
}
