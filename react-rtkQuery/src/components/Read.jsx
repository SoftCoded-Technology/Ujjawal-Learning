import React from "react";
import { useGetStudentsQuery } from "../features/student/studentSlice";

const Read = () => {

    const {data : students, isSuccess, isError, error,isLoading} = useGetStudentsQuery();
    console.log("data --> ", students);
  return (
    <div className="container mx-auto">
      <h2>Read Operation</h2>
      <div className="row">
      {isLoading && <span>Loading...</span>}
      {isError && <span>Something went wrong</span>}
       {students?.map((student) => (
        <div key={student?.id} className="col-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{student?.studentName}</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">
                {student?.studentEmail}
              </h6>
              <a href="#" class="card-link">
                Card link
              </a>
              <a href="#" class="card-link">
                Another link
              </a>
            </div>
          </div>
        </div>
       ))
        }
      </div>
    </div>
  );
};

export default Read;
