import { useEffect } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  useEffect(() => {
    const bigBall = document.querySelector(".cursor__ball--big");
    const socialIcons = document.querySelectorAll(".social");
    const profilePhoto = document.getElementById("profilePhoto");

    // Listeners
    document.body.addEventListener("mousemove", onMouseMove);
    for (let i = 0; i < socialIcons.length; i++) {
      socialIcons[i].addEventListener("mouseenter", onMouseHover);
      socialIcons[i].addEventListener("mouseleave", onMouseHoverOut);
    }

    profilePhoto.addEventListener("mouseenter", profileMouseHover);
    profilePhoto.addEventListener("mouseleave", onMouseHoverOut);

    // Move the cursor
    function onMouseMove(e) {
      gsap.to(bigBall, {
        opacity: 1,
        duration: 0.4,
        x: e.pageX - 15,
        y: e.pageY - 15,
      });
    }

    // Hover profile photo:
    function profileMouseHover() {
      bigBall.style.display = "none";
    }

    // Hover an element
    function onMouseHover(e) {
      bigBall.style.display = "none";
      gsap.to(bigBall, {
        duration: 0.3,
        opacity: 0,
        ease: "Power2.easeInOut",
      });
      gsap.to(e.target.querySelector(".icon-wrapper"), {
        duration: 0.3,
        scale: 1.1,
        ease: "Power3.easeInOut",
      });
      gsap.to(e.target.querySelector("img"), {
        duration: 0.3,
        scale: 0.9,
        ease: "Power3.easeInOut",
      });
    }
    function onMouseHoverOut(e) {
      bigBall.style.display = "block";
      gsap.to(bigBall, {
        duration: 0.3,
        opacity: 1,
        ease: "Power2.easeInOut",
      });
      gsap.to(e.target.querySelector(".icon-wrapper"), {
        duration: 0.3,
        scale: 1,
        ease: "Power3.easeInOut",
      });
      gsap.to(e.target.querySelector("img"), {
        duration: 0.3,
        scale: 1,
        ease: "Power3.easeInOut",
      });
    }
  }, []);

  return (
    <div class="cursor hidden xl:block">
      <svg
        width="44"
        height="42"
        viewBox="0 0 54 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="cursor__ball cursor__ball--big opacity-0"
      >
        <path
          d="M53.5 26C53.5 40.0656 41.6535 51.5 27 51.5C12.3465 51.5 0.5 40.0656 0.5 26C0.5 11.9344 12.3465 0.5 27 0.5C41.6535 0.5 53.5 11.9344 53.5 26Z"
          stroke="#EEA1BE"
          strokeWidth={1.1}
        />
      </svg>
    </div>
  );
};

export default CustomCursor;
