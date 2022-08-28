import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ContactEmergencyIcon from "@mui/icons-material/ContactEmergency";

function Heading() {
  return (
    <>
      <div className="container d-flex justify-content-between mt-4">
        <div className="left fs-1 fw-normal">Pavithran</div>
        <div className=" mt-lg-4 mt-md-5 d-flex justify-content-between ">
          <LinkedInIcon
            className="fs-2 me-4 right linkedin"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/pavithran-b-8026071a3/",
                "_blank"
              )
            }
          />
          <GitHubIcon
            className="fs-2 me-4 right github"
            onClick={() =>
              window.open("https://github.com/PavithranBaskaran", "_blank")
            }
          />
          <ContactEmergencyIcon
            className="fs-2 right profile"
            onClick={() =>
              window.open("https://pavithran-portfolio.netlify.app/", "_blank")
            }
          />
        </div>
      </div>
      <div className="container mt-5 d-flex justify-content-center">
        <h3 className="Title fw-normal">Unsplash Infinite Scroll</h3>
      </div>
      
    </>
  );
}

export default Heading;
