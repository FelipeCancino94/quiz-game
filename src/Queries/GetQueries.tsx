import { collection, getDocs } from "firebase/firestore";
import { db } from '../connections/fbConnect.js';

function GetQueries() {
  /* INTERFACE */
  interface Options {
    id: number,
    is_response: boolean,
    label: string
  }

  interface Question {
    id: string,
    options: Options,
    question: string
  }

  /* VARIABLES */
  const quizListRef = collection(db, 'quiz_questions');

  /* GET */
  const getData = async () => {
    const querySnapshot:any = await getDocs(quizListRef);
    const data:Question[] = querySnapshot.docs.map((doc:any) => ({ ...doc.data(), id: doc.id }));
    console.log(data);
    return data;
  };

  return getData();
}

export default GetQueries;