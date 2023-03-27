import { useEffect, useState } from "react";
import {
  collection,
  query,
  onSnapshot,
  DocumentData,
  Query,
} from "firebase/firestore";
import { db } from "../firebase";

interface Channels {
  id: string;
  channel: DocumentData;
}

const useCollection = (data: string) => {
  const [documents, setDocuments] = useState<Channels[]>();
  const collectionRef: Query<DocumentData> = query(collection(db, "channels"));

  useEffect(() => {
    const unsubscribe = onSnapshot(collectionRef, (querySnapshot) => {
      const channelsResults: Channels[] = [];
      querySnapshot.docs.forEach((doc) =>
        channelsResults.push({
          id: doc.id,
          channel: doc.data(),
        })
      );
      setDocuments(channelsResults);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return { documents };
};

export default useCollection;
