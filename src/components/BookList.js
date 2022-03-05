// 1. Import firebase db and firestore functions
import { db } from "../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";

export default function BookList({ books }) {
  // In the function, pass in the id of the doc to be deleted
  const handleClick = async (id) => {
    // 2. create a docRef and pass in the db, collection name and id of the doc to be deleted that comes from the function
    const docRef = doc(db, "books", id);
    await deleteDoc(docRef);
  };

  return (
    <div className="book-list">
      <ul>
        {books.map((book) => (
          <li key={book.id} onDoubleClick={() => handleClick(book.id)}>
            {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
