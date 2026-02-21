import { useState, useEffect } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../lib/firebase";

export function useOtherSkills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    async function fetchSkills() {
      try {
        const q = query(
          collection(db, "otherSkills"),
          orderBy("order", "asc")
        );
        const snapshot = await getDocs(q);
        const list = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSkills(list);
      } catch (err) {
        console.error("Firestore otherSkills fetch error:", err);
        setError(err.message || "Failed to load skills");
      } finally {
        setLoading(false);
      }
    }

    fetchSkills();
  }, []);

  return { skills, loading, error };
}
