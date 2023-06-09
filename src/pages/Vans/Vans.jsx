import React from "react";
import {
  useSearchParams,
  Link,
  useLoaderData,
  defer,
  Await,
} from "react-router-dom";
import { getVans } from "../../api";

export function loader() {
  return defer({ vans: getVans() });
}

function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = React.useState(null);
  const dataPromise = useLoaderData();

  const typeFilter = searchParams.get("type");

  if (error) {
    return <h1>There was an error: {error.message}</h1>;
  }

  return (
    <>
      <div className="van-list-container">
        <h1>Explore our van options</h1>
        <Await resolve={dataPromise.vans}>
          {(vans) => {
            const displayedVans = typeFilter
              ? vans.filter((van) => van.type === typeFilter)
              : vans;
            const vanElements = displayedVans.map((van) => (
              <div key={van.id} className="van-tile">
                <Link
                  to={van.id}
                  state={{
                    search: `?${searchParams.toString()}`,
                    type: typeFilter,
                  }}
                >
                  <img src={van.imageUrl} />
                  <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>
                      ${van.price}
                      <span>/day</span>
                    </p>
                  </div>
                  <i className={`van-type ${van.type} selected`}>{van.type}</i>
                </Link>
              </div>
            ));
            return (
              <>
                <div className="van-list-filter-buttons">
                  <button
                    onClick={() => setSearchParams({ type: "simple" })}
                    className={`van-type simple ${
                      typeFilter === "simple" ? "selected" : ""
                    }`}
                  >
                    Simple
                  </button>
                  <button
                    onClick={() => setSearchParams({ type: "luxury" })}
                    className={`van-type luxury ${
                      typeFilter === "luxury" ? "selected" : ""
                    }`}
                  >
                    Luxury
                  </button>
                  <button
                    onClick={() => setSearchParams({ type: "rugged" })}
                    className={`van-type rugged ${
                      typeFilter === "rugged" ? "selected" : ""
                    }`}
                  >
                    Rugged
                  </button>
                  {typeFilter ? (
                    <button
                      onClick={() => setSearchParams({})}
                      className="van-type clear-filters"
                    >
                      Clear Filter
                    </button>
                  ) : null}
                </div>
                <div className="van-list">{vanElements}</div>
              </>
            );
          }}
        </Await>
      </div>
    </>
  );
}
export default Vans;
