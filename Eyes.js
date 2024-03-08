export const Eyes = ({ radius, offsetX, offsetY }) => (
    // <> defines fragments
    <>
        <LeftEye radius={radius} offsetX={offsetX} offsetY={offsetY} />
        <RightEye radius={radius} offsetX={offsetX} offsetY={offsetY} />
    </>
)

const LeftEye = ({ radius, offsetX, offsetY }) => (
    <circle
        cx={- offsetX}
        cy={- offsetY}
        r={radius}
    />
);

const RightEye = ({ radius, offsetX, offsetY }) => (
    <circle
        cx={offsetX}
        cy={- offsetY}
        r={radius}
    />
);