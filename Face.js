import { BackgroundCircle } from './BackgroundCircle';
import { Eyes } from './Eyes';
import { Mouth } from './Mouth';

export const Face = ({
    width,
    height,
    centerX,
    centerY,
    strokeWidth,
    eyeRadius,
    offsetX,
    offsetY,
    mouthRadius,
    mouthWidth,
    startAngle,
    endAngle }) => (
    <svg width={width} height={height}>
        <g transform={`translate(${centerX}, ${centerY})`}>
            <BackgroundCircle
                radius={centerY - strokeWidth}
                strokeWidth={strokeWidth}
            />

            <Eyes
                radius={eyeRadius}
                offsetX={offsetX}
                offsetY={offsetY}
            />

            <Mouth
                mouthRadius={mouthRadius}
                mouthWidth={mouthWidth}
                startAngle={startAngle}
                endAngle={endAngle}
            />
        </g>
    </svg>
)