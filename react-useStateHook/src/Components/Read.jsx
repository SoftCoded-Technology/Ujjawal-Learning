import React from "react";
import { useGetCitiesQuery } from "../features/citySlice";

function Read() {
  const {
    data: cities,
    isError,
    isLoading,
    isSuccess,
    error,
  } = useGetCitiesQuery();
  console.log(cities);
  return (
    <>
      <h1>Read Operation</h1>
      {cities?.data.map((city) => (
        <div style={{margin:"20px"}}>
        <li>{city.id}</li>
        <li>{city.name}</li>
        <li>{city.code}</li>
        <br/>
        </div>
      )
      )}
    </>
  );
}

export default Read;
