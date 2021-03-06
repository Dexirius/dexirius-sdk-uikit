import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <defs>
        <clipPath id="clip-path">
          <rect id="Rectángulo_1113" data-name="Rectángulo 1113" width="31.68" height="32" transform="translate(3623 1244)" fill="none" />
        </clipPath>
      </defs>
      <g id="Enmascarar_grupo_5" data-name="Enmascarar grupo 5" transform="translate(-3623 -1244)" clip-path="url(#clip-path)">
        <path id="Trazado_41384" data-name="Trazado 41384" d="M872.658,300.854l-5.666-5.693a1.547,1.547,0,0,0-1.072-.473h-2.339a1.591,1.591,0,0,0-.445-1.042l-5.891-5.876a2.037,2.037,0,0,0-1.271-.586.626.626,0,0,0-.078,0c-.034,0-.07,0-.106,0h-2.316c-.036,0-.07,0-.106,0a.579.579,0,0,0-.077.006,2.045,2.045,0,0,0-1.272.593l-5.507,5.531c-.013.013-.028.067-.039.067h5.375l3.945-3.969a.315.315,0,0,1,.447-.012l5.356,5.351-5.356,5.353a.315.315,0,0,1-.447-.006l-3.94-3.944h-5.375c.01,0,.023.029.034.042l5.507,5.508a.005.005,0,0,0,0,0,2.05,2.05,0,0,0,1.454.6c-.036,0-.07,0-.1,0a.616.616,0,0,0-.078.005,2.048,2.048,0,0,0-1.272.6l-5.507,5.47c-.013.013-.024.006-.038.006h5.377l3.943-3.906a.314.314,0,0,1,.445.018l5.357,5.366-5.357,5.36a.314.314,0,0,1-.445.021l-3.943-3.922h-5.378a.064.064,0,0,1,.039.024l5.507,5.5,0-.042a2.006,2.006,0,0,0,1.454.558h2.318a2.036,2.036,0,0,0,1.455-.564l5.889-5.88a1.351,1.351,0,0,0,.445-1.06h2.339a1.511,1.511,0,0,0,1.072-.436l5.666-5.659a2.058,2.058,0,0,0,0-2.909m-1.38,1.68-5.134,5.134a.316.316,0,0,1-.445,0l-5.135-5.134a.318.318,0,0,1,0-.447l5.135-5.134a.316.316,0,0,1,.445,0l5.134,5.134a.318.318,0,0,1,0,.447" transform="translate(2778.673 957.673)" fill="#0097da" />
      </g>
    </Svg>
  );
};

export default Icon;
