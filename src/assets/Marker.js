import React from 'react';

const Marker = ({width, height, fill}) => (
  <svg width={width} height={height} viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.18331 2.89781C3.93636 2.10564 4.9503 1.66732 5.99996 1.66732C7.04962 1.66732 8.06355 2.10564 8.81661 2.89781C9.57075 3.69113 9.99996 4.77399 9.99996 5.90974C9.99996 7.56333 8.97575 9.17743 7.83791 10.4409C7.2807 11.0596 6.72147 11.5664 6.30103 11.9186C6.18969 12.0118 6.08844 12.094 5.99996 12.1642C5.91148 12.094 5.81023 12.0118 5.69889 11.9186C5.27844 11.5664 4.71922 11.0596 4.16201 10.4409C3.02417 9.17743 1.99996 7.56333 1.99996 5.90974C1.99996 4.77399 2.42917 3.69113 3.18331 2.89781ZM5.61683 13.5462C5.61701 13.5464 5.61718 13.5465 5.99996 13.0007L5.61718 13.5465C5.84693 13.7076 6.15299 13.7076 6.38274 13.5465L5.99996 13.0007C6.38274 13.5465 6.38291 13.5464 6.38309 13.5462L6.38354 13.5459L6.38477 13.545L6.38849 13.5424L6.40091 13.5336L6.44494 13.5018C6.48252 13.4744 6.53624 13.4347 6.60378 13.3834C6.7388 13.2808 6.92945 13.1315 7.15722 12.9407C7.61178 12.5599 8.21922 12.0099 8.82868 11.3332C10.0242 10.0057 11.3333 8.07434 11.3333 5.90974C11.3333 4.44155 10.7792 3.02711 9.78297 1.97917C8.78569 0.930073 7.42565 0.333984 5.99996 0.333984C4.57426 0.333984 3.21423 0.930073 2.21694 1.97917C1.22075 3.02711 0.666626 4.44155 0.666626 5.90974C0.666626 8.07434 1.97575 10.0057 3.17124 11.3332C3.7807 12.0099 4.38814 12.5599 4.8427 12.9407C5.07047 13.1315 5.26112 13.2808 5.39614 13.3834C5.46368 13.4347 5.51739 13.4744 5.55498 13.5018L5.599 13.5336L5.61143 13.5424L5.61515 13.545L5.61638 13.5459L5.61683 13.5462ZM5.33329 5.66732C5.33329 5.29913 5.63177 5.00065 5.99996 5.00065C6.36815 5.00065 6.66663 5.29913 6.66663 5.66732C6.66663 6.03551 6.36815 6.33398 5.99996 6.33398C5.63177 6.33398 5.33329 6.03551 5.33329 5.66732ZM5.99996 3.66732C4.89539 3.66732 3.99996 4.56275 3.99996 5.66732C3.99996 6.77189 4.89539 7.66732 5.99996 7.66732C7.10453 7.66732 7.99996 6.77189 7.99996 5.66732C7.99996 4.56275 7.10453 3.66732 5.99996 3.66732Z"
      fill={fill}
    />
  </svg>
);

Marker.defaultProps = {
  width: 12,
  height: 14,
  fill: 'black'
};

export default Marker;
