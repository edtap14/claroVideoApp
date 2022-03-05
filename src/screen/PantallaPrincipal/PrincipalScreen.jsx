import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import "./PrincipalScreen.css";
import { getAllFilms } from "../../actions";

function PrincipalScreen() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllFilms());
  }, [dispatch]);

  const films = useSelector((state) => state?.films?.films?.response?.groups);

  return (
    <div className="divPrincipal">
      <div className="divSearch">
        <form>
          <input className="searchInput" type="text" placeholder="Buscar..." />
          <div>
            <button className="buttonSearch" type="submit">
              Buscar
            </button>
          </div>
        </form>
        <div className="divFilms">
          {films?.map((f) => {
            return (
              <Card id={f.id} title={f.title} portada={f.image_background} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PrincipalScreen;
