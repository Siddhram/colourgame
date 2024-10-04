import { useState } from "react";
import Card from "./components/Card";

export default function App() {
  const [Mess, setMess] = useState("white");

  // Function to accept data from the child
  const functoaccdata = (data) => {
    console.log("Received data from Card:", data);  // Log to verify the data is received
    setMess(data);
  };

  return (
    <div className={`${Mess} min-h-screen`} >
     <Card val={functoaccdata} colour="bg-red-500" />
      <Card val={functoaccdata} colour="bg-blue-500" />
      <Card val={functoaccdata} colour="bg-green-500" />
      <Card val={functoaccdata} colour="bg-yellow-500" />
      <Card val={functoaccdata} colour="bg-purple-500" />
      <Card val={functoaccdata} colour="bg-pink-500" />
      <Card val={functoaccdata} colour="bg-orange-500" />
      <Card val={functoaccdata} colour="bg-teal-500" />
    </div>
  );
}
