import { useState, useEffect } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../lib/firebase";

export function useProjects() {
  const [projects, setProjects] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    async function fetchProjects() {
      try {
        const q = query(
          collection(db, "projects"),
          orderBy("order", "asc")
        );
        const snapshot = await getDocs(q);
        const all = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProjects(all.filter((p) => !p.inProgress));
        setInProgress(all.filter((p) => p.inProgress === true));
      } catch (err) {
        console.error("Firestore projects fetch error:", err);
        setError(err.message || "Failed to load projects");
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  return { projects, inProgress, loading, error };
}
