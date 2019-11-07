import React from "react";

const Controller = ({handleInput, handleSubmit, newInput}) => {
  return (
    <div>
      <div>
        <form
          onSubmit={handleSubmit}
          className="form-inline my-2 my-lg-0"
        >
          <input
            onChange={e => handleInput(e)}
            value={newInput}
            className="form-control mr-sm-2"
            type="search"
            placeholder="Ingrese una palabra"
            aria-label="Search"
          />

          <button
            className="btn boton"
            type="submit"
          >
          Buscar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Controller;
