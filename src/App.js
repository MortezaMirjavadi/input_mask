import React from 'react';
import Input from "./Input";
import cities from "./cities.json";

function App() {

   const [hint, setHint] = React.useState("");

   function handleChange(e) {
      const _input = e.target.value;
      if (_input === "") {
         setHint("");
         return;
      }
      const _find = cities.find(x => x.startsWith(_input));
      _find ? setHint(_find) : setHint("");
      // if (_find) {
      //    setHint(_find);
      // }

   }

   return <div>
      <Input handleChange={handleChange} hint={hint}/>
   </div>
}

export default App;
