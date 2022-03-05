import { useState } from "react";

// 1. Import firebase db and firestore functions
import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";

export default function BookForm() {
  const [newBook, setNewBook] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 2. create a ref of the collection and pass in db and the name of the ref
    const ref = collection(db, "books");

    // 3. use the addDoc function and pass in ref, and the data object to be added
    await addDoc(ref, {
      title: newBook,
    });

    setNewBook("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Add a new book title:</span>
        <input
          required
          type="text"
          onChange={(e) => setNewBook(e.target.value)}
          value={newBook}
        />
      </label>
      <button>Add</button>
    </form>
  );
}
