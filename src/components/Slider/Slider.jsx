// import React, { useState } from 'react';
// import './Slider.css';

// const Slider = ({ cards }) => {
//   const [scrollX, setScrollX] = useState(0);

//   const handleMouseDown = (e) => {
//     const initialX = e.clientX;
//     document.addEventListener('mousemove', handleMouseMove);
//     document.addEventListener('mouseup', handleMouseUp);

//     function handleMouseMove(e) {
//       const deltaX = e.clientX - initialX;
//       setScrollX(scrollX - deltaX);
//     }

//     function handleMouseUp() {
//       document.removeEventListener('mousemove', handleMouseMove);
//       document.removeEventListener('mouseup', handleMouseUp);
//     }
//   };

//   return (
//     <div className="slider" onMouseDown={handleMouseDown}>
//       <div
//         className="slider-inner"
//         style={{ transform: `translateX(${scrollX}px)` }}
//       >
//         {cards.map((content, index) => (
//           <div key={index} className="card">
//             {content}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slider;





// import React, { useRef, useState } from 'react';
// import './Slider.css';

// const Slider = ({ cards }) => {
//   const sliderRef = useRef(null);
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const cardWidth = 588;
//   const numVisibleCards = Math.ceil(window.innerWidth / cardWidth);

//   const handleScroll = () => {
//     setScrollPosition(sliderRef.current.scrollLeft);
//   };

//   return (
//     <div className="slider" ref={sliderRef} onScroll={handleScroll}>
//       <div
//         className="slider-inner"
//         style={{ transform: `translateX(${scrollPosition}px)` }}
//       >
//         {[...Array(numVisibleCards * 2)].map((_, index) => (
//           <div key={index} className="card">
//             {cards[index % cards.length]}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slider;





import React, { useRef, useState } from 'react';
import './Slider.css';
import content from '../../mock/content'

const Slider = ({ cards }) => {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="slider"
      ref={sliderRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className="slider-inner">
        {cards.map((content, index) => (
          <div key={index} className="card">
            {/* <p>{content.reviewText}</p> */}
            <img src={content.imageSrc1} alt="" className='one'/>
            <img src={content.imageSrc2} alt="" className='two' />
            <img src={content.imageSrc3} alt="" className='three' />
            <p>{content.reviewText}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;






// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [showLeftDetails, setShowLeftDetails] = useState(false);
//   const [showRightDetails, setShowRightDetails] = useState(false);

//   const toggleLeftDetails = () => {
//     setShowLeftDetails(!showLeftDetails);
//   };

//   const toggleRightDetails = () => {
//     setShowRightDetails(!showRightDetails);
//   };

//   return (
//     <div className="App">
//       <div className="background-image">
//         <img src="background.jpg" alt="Background" />
//         <div className="image-container">
//           <img
//             src="image-left.jpg"
//             alt="Left Image"
//             className={`image-left ${showLeftDetails ? 'active' : ''}`}
//             onClick={toggleLeftDetails}
//           />
//           {showLeftDetails && (
//             <div className="details-left">
//               {/* Details for left image */}
//             </div>
//           )}
//         </div>
//         <div className="image-container">
//           <img
//             src="image-right.jpg"
//             alt="Right Image"
//             className={`image-right ${showRightDetails ? 'active' : ''}`}
//             onClick={toggleRightDetails}
//           />
//           {showRightDetails && (
//             <div className="details-right">
//               {/* Details for right image */}
//             </div>
//           )}
//         </div>
//       </div>
//       <div className="caption">
//         {/* Caption or description */}
//       </div>
//     </div>
//   );
// }

// export default App;
















