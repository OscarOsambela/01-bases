import React, { useState } from "react";

function SearchForm({onSubmit}) {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({keyword});
  };
  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} type="text" value={keyword} />
      <button>Buscar gif</button>
    </form>
  );
}
//React.memo .- el componente no se va a renderizaer si sus props no cambian 
export default React.memo(SearchForm)