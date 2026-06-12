import Card from "./components/Card";
const App = () => {
  const jobs = [
    {
      companyLogo:
        "https://img.magnific.com/free-psd/google-icon-isolated-3d-render-illustration_47987-9777.jpg?semt=ais_hybrid&w=740&q=80",
      companyName: "Google",
      jobPosition: "Frontend Developer",
      jobType: "Full-Time",
      level: "Mid-Level",
      salaryPerHour: 45,
      location: "Mountain View, CA, USA",
    },
    {
      companyLogo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/3840px-Microsoft_logo.svg.png",
      companyName: "Microsoft",
      jobPosition: "Backend Engineer",
      jobType: "Full-Time",
      level: "Senior",
      salaryPerHour: 60,
      location: "Redmond, WA, USA",
    },
    {
      companyLogo:
        "https://imgs.search.brave.com/rBJGYDQ86FF9W9wwcJYriySyE_cJ1FRt4y02t3hde9o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dmVjdG9ybG9nby56/b25lL2xvZ29zL2Ft/YXpvbi9hbWF6b24t/aWNvbi5zdmc",
      companyName: "Amazon",
      jobPosition: "Software Development Engineer",
      jobType: "Full-Time",
      level: "Entry-Level",
      salaryPerHour: 40,
      location: "Seattle, WA, USA",
    },
    {
      companyLogo:
        "https://imgs.search.brave.com/oHSbMJYbE1fHveSfxg9OWoo3HJhqvhAVNaJDtIIU6A8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2YwLzMx/LzI2L2YwMzEyNjEy/MjRjMjFmNjg0YTBh/YmU3N2I3ZTU3MTc5/LmpwZw",
      companyName: "Netflix",
      jobPosition: "UI/UX Designer",
      jobType: "Part-Time",
      level: "Mid-Level",
      salaryPerHour: 35,
      location: "Los Gatos, CA, USA",
    },
    {
      companyLogo:
        "https://imgs.search.brave.com/sEVAqcZOgcVNA49r860w7_t35uDx0l9vcWK6KghGnV4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL3RodW1icy82/MWZhZTJkMzk1ZTZj/YTAwMDQ3YjRmMTIu/cG5n",
      companyName: "Meta",
      jobPosition: "React Developer",
      jobType: "Full-Time",
      level: "Senior",
      salaryPerHour: 55,
      location: "Menlo Park, CA, USA",
    },
    {
      companyLogo:
        "https://imgs.search.brave.com/0pbAjdXdDiEUsNdxwrhnx8j4Ytj8My4DKFHWZfOwql4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMTMvU3Bv/dGlmeS1Mb2dvLVBO/Ry1QaG90b3MucG5n",
      companyName: "Spotify",
      jobPosition: "Mobile App Developer",
      jobType: "Part-Time",
      level: "Mid-Level",
      salaryPerHour: 38,
      location: "Stockholm, Sweden",
    },
    {
      companyLogo:
        "https://imgs.search.brave.com/DaONTt_LMJS0y-F6IyOzC8pwbedIcVZm31UdMA2wdA8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/aGlzdG9yeS5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjMv/MDkvQWlyYm5iLUxv/Z28ucG5n",
      companyName: "Airbnb",
      jobPosition: "Data Analyst",
      jobType: "Full-Time",
      level: "Entry-Level",
      salaryPerHour: 32,
      location: "San Francisco, CA, USA",
    },
    {
      companyLogo:
        "https://imgs.search.brave.com/nD3yKjOY9c2xNAOXoGzR2sFxNjutwgRAjaqLjhWa1pA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDYvQWRvYmUtTG9n/by0xOTkzLTIwMTQt/NzAweDM5NC5wbmc",
      companyName: "Adobe",
      jobPosition: "Full Stack Developer",
      jobType: "Full-Time",
      level: "Senior",
      salaryPerHour: 58,
      location: "San Jose, CA, USA",
    },
    {
      companyLogo:
        "https://imgs.search.brave.com/JrISasEoYEJ5IgPUC15ToQu7dtm1P9qGEU3a9zlt8EQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z2VueHlzLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvT3JhY2xl/LUxvZ28ucG5n",
      companyName: "Oracle",
      jobPosition: "Cloud Engineer",
      jobType: "Full-Time",
      level: "Mid-Level",
      salaryPerHour: 50,
      location: "Austin, TX, USA",
    },
    {
      companyLogo:
        "https://imgs.search.brave.com/Hwic-rQ7t3GUJyU71jRVksFi1MZwpLHY5PX55QBercA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/bG9nby5kZXYvc2Fs/ZXNmb3JjZS5jb20_/dG9rZW49bGl2ZV82/YTFhMjhmZC02NDIw/LTQ0OTItYWViMC1i/Mjk3NDYxZDlkZTIm/c2l6ZT0xMjgmcmV0/aW5hPXRydWUmZm9y/bWF0PXBuZw",
      companyName: "Salesforce",
      jobPosition: "DevOps Engineer",
      jobType: "Part-Time",
      level: "Senior",
      salaryPerHour: 52,
      location: "Chicago, IL, USA",
    },
  ];
  return (
    <div className="parent">
      {jobs.map((ele) => {
        return (
          <Card
            company={ele.companyName}
            post={ele.jobPosition}
            logo={ele.companyLogo}
            salary={ele.salaryPerHour}
            level={ele.level}
            jobType={ele.jobType}
            place={ele.location}
          />
        );
      })}
    </div>
  );
};

export default App;
