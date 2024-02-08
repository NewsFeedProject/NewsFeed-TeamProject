import { useEffect, useState } from "react";
import { addDoc, collection, getDocs, query } from "firebase/firestore";
import { db } from "../firebasePark/firebaseConfigPark";
import DetailListItem from "../components/layout/DetailListItem";

const DetailPark = () => {
  const [todos, setTodos] = useState([
    { id: 1, isDone: false, text: "강의듣기" },
    { id: 2, isDone: false, text: "잠자기" }
  ]);

  const [text, setText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      // collection 이름이 todos인 collection의 모든 document를 가져옵니다.
      const q = query(collection(db, "todos"));
      const querySnapshot = await getDocs(q);

      const initialTodos = [];

      // document의 id와 데이터를 initialTodos에 저장합니다.
      // doc.id의 경우 따로 지정하지 않는 한 자동으로 생성되는 id입니다.
      // doc.data()를 실행하면 해당 document의 데이터를 가져올 수 있습니다.
      querySnapshot.forEach((doc) => {
        const data = {
          id: doc.id,
          ...doc.data()
        };
        console.log(data);
        initialTodos.push(data);
      });

      setTodos(initialTodos);
    };

    fetchData();
  }, []);

  const onChange = (event) => {
    const {
      target: { name, value }
    } = event;
    if (name === "text") {
      setText(value);
    }
  };

  const addTodo = async (event) => {
    event.preventDefault();
    const newTodo = { text: text, isDone: false };
    const collectionRef = collection(db, "todos");
    const { id } = await addDoc(collectionRef, newTodo);
    setTodos([...todos, { ...newTodo, id }]);
    setText("");
  };

  return (
    <div>
      <h2>할 일 컴포넌트</h2>
      <form>
        <div>
          <label>할 일 : </label>
          <input type="text" value={text} name="text" onChange={onChange} required></input>
          <button onClick={addTodo}>추가</button>
        </div>
      </form>
      <h3>Working</h3>
      {todos
        .filter((todo) => !todo.isDone)
        .map((todo) => {
          return <DetailListItem key={todo.id} todos={todos} todo={todo} setTodos={setTodos} />;
        })}
      <h3>Done</h3>
      {todos
        .filter((todo) => todo.isDone)
        .map((todo) => {
          return <DetailListItem key={todo.id} todos={todos} todo={todo} setTodos={setTodos} />;
        })}
    </div>
  );
};

export default DetailPark;
