import React from "react";

function Navbar () {
    return (
        <nav
        class="navbar navbar-expand-lg navbar-dark bg-success fixed-top"
        // id="sideNav"
      >
        <a class="navbar-brand js-scroll-trigger" href="#page-top">
          <span class="d-block d-lg-none">Tyler Davis</span>
          <span class="d-none d-lg-block"
            ><img
              class="img-fluid rounded-circle mx-auto mb-5"
              src="assets/img/Pictureofme.jpg"
              alt="me wearing a bowtie and suspenders"
          /></span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#portfolio"
                >Portfolio</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#skills">Skills</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link js-scroll-trigger"
                href="https://drive.google.com/file/d/1PbNHkxQcckvl6Gboy-FxdFcFCCXEKAxU/view?usp=sharing"
                target="_blank" rel="noreferrer"
                >Resume</a
              >
            </li>
          </ul>
        </div>
      </nav>
  
    )
}

export default Navbar;
