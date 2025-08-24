// import React from "react";
// import "./CustomCheckbox.css";

// const CustomCheckbox = ({ id, checked, onChange, label }) => {
//   return (
//     <div className="checkbox-container">
//       <div className="checkbox-wrapper">
//         <input
//           type="checkbox"
//           id={id}
//           checked={checked}
//           onChange={onChange}
//         />
//         <label htmlFor={id}>
//           <div className="tick_mark" />
//         </label>
//       </div>
//       <span className="checkbox-text">{label}</span>
//     </div>
//   );
// };

// export default CustomCheckbox;


import React from "react";
import "./CustomCheckbox.css";

const CustomCheckbox = ({ id, name, checked, onChange, label }) => {
  return (
    <div className="checkbox-wrapper">
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id}>
        <div className="tick_mark" />
      </label>
      <span className="checkbox-text">{label}</span>
    </div>
  );
};

export default CustomCheckbox;