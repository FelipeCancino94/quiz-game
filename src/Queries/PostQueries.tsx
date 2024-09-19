import { collection, addDoc } from "firebase/firestore";
import { db } from '../connections/fbConnect.js';

/* INTERFACE */
interface Options {
  id: number,
  is_response: boolean,
  label: string
}

interface Params {
  question:string,
  options:Options[]
}

function PostQueries(params:Params) {
  /* VARIABLES */
  const questionRef = collection(db, 'quiz_questions');

  /* POST */
  const postData = async () => {
    const send = await addDoc(questionRef, params);
    return send.id;
  }

  return postData();
}

export default PostQueries;