import { SVGProps } from 'react';
import './FX.css';

interface FXProps {
  /**
   * color
   */
  currentColor?: string;
  /**
   * stroke color
   */
  stroke?: string;
}

/**
 * FX SVG
 */
const FX = ({
  stroke = '#ffffff',
  currentColor = 'transparent',
}: FXProps): SVGProps<SVGSVGElement> => (
  <svg
    id="svg"
    className="fxSvg"
    xmlns="http://www.w3.org/2000/svg"
    width="400"
    height="400"
    viewBox="-200, -200, 800,800"
  >
    <g id="svgg">
      <path
        id="path0"
        className="fxPath"
        d="M12.218 90.039 C 12.544 90.576,19.991 100.596,28.767 112.305 L 44.725 133.594 121.877 133.594 L 199.030 133.594 223.686 166.476 L 248.342 199.357 207.374 253.970 C 184.842 284.007,166.406 308.936,166.406 309.369 C 166.406 309.885,177.801 310.156,199.516 310.156 L 232.626 310.156 257.134 277.377 C 270.612 259.348,281.816 244.597,282.031 244.597 C 282.246 244.597,293.450 259.348,306.929 277.377 L 331.436 310.156 364.983 310.156 C 391.615 310.156,398.408 309.955,397.938 309.180 C 397.612 308.643,378.979 283.712,356.531 253.778 L 315.717 199.353 357.080 144.208 L 398.443 89.063 364.651 89.095 L 330.859 89.127 306.648 121.517 C 293.332 139.331,282.254 153.906,282.031 153.906 C 281.808 153.906,270.731 139.331,257.414 121.517 L 233.203 89.127 122.415 89.095 C 33.983 89.069,11.746 89.260,12.218 90.039 M61.719 155.393 C 61.719 155.786,67.702 164.132,75.014 173.938 C 82.326 183.745,88.135 192.222,87.922 192.777 C 87.710 193.331,68.016 219.749,44.158 251.483 C 20.301 283.217,0.781 309.400,0.781 309.668 C 0.781 309.937,15.811 310.146,34.180 310.133 L 67.578 310.109 108.954 255.054 L 150.331 200.000 183.759 200.000 C 202.145 200.000,217.188 199.703,217.188 199.340 C 217.188 198.976,209.521 188.869,200.151 176.879 L 183.114 155.078 122.416 154.878 C 86.076 154.758,61.719 154.965,61.719 155.393 "
        stroke={stroke}
        fill={currentColor}
        fillRule="evenodd"
      />
    </g>
  </svg>
);

FX.defaultProps = {
  stroke: '#ffffff',
  currentColor: 'transparent',
};

export default FX;
