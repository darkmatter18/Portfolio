import React from "react";
import PropTypes from 'prop-types'
import anime from "animejs";
import LoaderIcon from "../icons/loader";
import clsx from "clsx";

// const StyledLoader = styled.div`
//   position: fixed;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   width: 100%;
//   height: 100%;
//   background-color: var(--dark-navy);
//   z-index: 99;
//   .logo-wrapper {
//     color: black
//     width: max-content;
//     max-width: 200px;
//     transition: var(--transition);
//     opacity: ${props => (props.isMounted ? 1 : 0)};
//     svg {
//       display: block;
//       width: 100%;
//       height: 100%;
//       margin: 0 auto;
//       fill: none;
//       user-select: none;
//       #A {
//         opacity: 0;
//       }
//       #B {
//         opacity: 0;
//       }
//     }
//   }
// `;

const Loader = ({finishLoading}) => {
  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });

    loader
      .add({
        targets: '#logo path',
        delay: 300,
        duration: 1500,
        easing: 'easeInOutQuart',
        strokeDashoffset: [anime.setDashoffset, 0],
      })
      .add({
        targets: '#logo #A',
        duration: 700,
        easing: 'easeInOutQuart',
        opacity: 1,
      })
      .add({
        targets: '#logo #B',
        duration: 700,
        easing: 'easeInOutQuart',
        opacity: 1,
      })
      .add({
        targets: '#logo',
        delay: 500,
        duration: 300,
        easing: 'easeInOutQuart',
        opacity: 0,
        scale: 0.1,
      })
  };

  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div className={
        clsx("container", isMounted ? "opacity-100" : "opacity-0", "min-h-screen",
          "flex", "justify-center", "items-center")}>
        <LoaderIcon/>

      </div>
    </>
  )
}

Loader.propTypes = {
  finishLoading: PropTypes.func.isRequired
}

export default Loader