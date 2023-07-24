import React from "react";

function RepoList({ repos }) {
  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
      <div className="card-body">
        <h2 className="text-3xl my-4 font-bold card-title">Repositories</h2>
        {repos.map((repo) => (
          <p className='lista' key={repo.id}>{repo.name}</p>
        ))}
      </div>
    </div>
  );
}

export default RepoList;
