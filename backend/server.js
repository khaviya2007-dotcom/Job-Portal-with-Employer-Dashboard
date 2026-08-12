const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const jobs = [
  {
    id: 1,
    title: "Software Developer",
    company: "ABC Technologies",
    location: "Chennai",
    salary: "₹5 - 8 LPA"
  },
  {
    id: 2,
    title: "Web Developer",
    company: "XYZ Solutions",
    location: "Bangalore",
    salary: "₹4 - 7 LPA"
  },
  {
    id: 3,
    title: "Data Analyst",
    company: "Data Corp",
    location: "Hyderabad",
    salary: "₹5 - 9 LPA"
  }
];

app.get("/", (req, res) => {
  res.send("Job Portal Backend is Running!");
});

app.get("/api/jobs", (req, res) => {
  res.json(jobs);
});

app.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});