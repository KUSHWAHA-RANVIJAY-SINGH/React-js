import React from 'react';
// import { Link, useLoaderData } from 'react-router-dom';

function Job() {
    // let jobdatas = useLoaderData();

    return (

        <div>
            {/* {jobdatas.map((job) => {
                return (
                    <Link  key={job.id}>
                    <div>
                        <h2>{job.name}</h2>
                        <p>{job.age}</p>
                        <p>{job.email}</p>
                        </div>
                    </Link>
                );
            })}  */}
        </div>
    );
}

export default Job;

// export const Jobloader = async () => {
//     const res = await fetch('http://localhost:3000/jobs');
//     return res.json();
//   }