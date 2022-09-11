import { useState, useEffect } from "react";
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue(((prev) => prev + 1))
  const onChange = (event) => setKeyword(event.target.value);
  console.log("I run all the time");
  useEffect(() => {
    console.log("I run only once");
  }, []); // watch nothing. runs only once when first rendered
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
    console.log("I run when 'keyword' changes.");
    }
  }, [keyword]); // if keyword changes, you wanna run this code.(if counter changes, it does not run)
  useEffect(() => {
    console.log("I run when 'counter' changes.", keyword);
  }, [counter]);

  return (
    <div>
      <input 
        value={keyword}  
        onChange={onChange}
        type="text" 
        placeholder="Search here..." 
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

export default App;
