import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailFilm } from "../../actions";
import { Button } from "@mui/material";
import "./DetailFilms.css";
import { Link } from "react-router-dom";

function DetailFilsm() {
  const pagina = window.location.href.split("/")[3];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetailFilm(pagina));
  }, [pagina]);

  const data = useSelector(
    (state) => state?.detail?.detailFilm?.response?.group?.common
  );

  const actors = data?.extendedcommon?.roles?.role[0]?.talents.talent;
  const director = data?.extendedcommon?.roles?.role[1]?.talents.talent;
  console.log(director);

  return (
    <div className="divGeneralDetail">
      <div className="titleDiv">{data?.title}</div>
      <div className="divAux">
        <div className="boxContainer">
          <div className="boxImg">
            <img className="imgHorizontal" src={data?.image_base_vertical} />
          </div>
          <div>
            <div className="boxDescription">
              <p>{data?.large_description}</p>
            </div>
            <div className="prueba">
              {data?.extendedcommon?.genres?.genre?.map((g) => {
                return <div className="gernes">{g.name}</div>;
              })}
            </div>
            <div className="duration">
              <span>Duración: </span>
              {data?.extendedcommon?.media?.duration}
            </div>
            <div className="duration">
              <span>Clasificación: </span>
              {data?.extendedcommon?.media?.rating?.code}
            </div>
            <div className="duration">
              <span>Directores: </span>
              {director?.map((d) => {
                return (
                  <>
                    {d.name} {d.surname}
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <h3 style={{ color: "white" }}>Actores:</h3>
      </div>
      <div className="actorsBox">
        {actors?.map((a) => {
          return (
            <div className="cardActor">
              <img alt={a.name} className="imgActors"></img>
              <span>Nombre: </span>
              {a.name} {a.surname}
            </div>
          );
        })}
      </div>
      <div className="divButton">
        <Link to="/">
          <button>Regresar</button>
        </Link>
      </div>
    </div>
  );
}

export default DetailFilsm;
