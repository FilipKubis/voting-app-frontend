import React from "react";
import styles from './Logo.module.css'

const Logo = () => {
  return (
  <div className={styles.Topnav} data-testid='Topnav'>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      version="1.1"
      viewBox="0 0 31.75 31.75"
    >
      <g>
        <g
          fillRule="nonzero"
          strokeLinecap="round"
          strokeLinejoin="round"
          clipRule="evenodd"
          transform="matrix(.05292 0 0 .05292 -10.313 -11.673)"
        >
          <g
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="20"
            transform="translate(23.772 -26.942)"
          >
            <path
              fill="none"
              strokeDasharray="50, 50, 50, 50"
              d="M471.207 322.56c-124.145 0-224.78 100.73-224.78 224.969 0 124.24 100.635 224.969 224.78 224.969s224.781-100.73 224.781-224.97c0-124.238-100.636-224.968-224.78-224.968z"
              opacity="1"
            ></path>
            <path
              fill="#000"
              d="M471.114 357.654c-104.81 0-189.781 85.009-189.781 189.875s84.972 189.875 189.78 189.875c104.809 0 189.782-85.01 189.782-189.875 0-104.866-84.972-189.875-189.781-189.875z"
              opacity="1"
            ></path>
          </g>
        </g>
      </g>
    </svg>
    </div>
  );
}

export default Logo