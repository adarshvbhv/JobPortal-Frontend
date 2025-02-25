import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://jobportal-backend-5p6.onrender.com/jobs/";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get(API_URL)
      .then(response => setJobs(response.data))
      .catch(error => console.error("Error fetching jobs:", error));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Fresher Job Listings</h1>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {jobs.map((job) => (
          <li key={job.id} style={{
            marginBottom: "20px",
            padding: "15px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            position: "relative",  // Position relative to allow absolute positioning of button
          }}>
            {/* Apply Now Button - Positioned in Top Right */}
            <a 
              href={job.job_url} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                padding: "8px 12px",
                backgroundColor: "#007bff",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "5px",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              Apply Now
            </a>

            {/* Job Details */}
            <h2>{job.title}</h2>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p style={{ whiteSpace: "pre-line" }}>{job.description}</p> 
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
