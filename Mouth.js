export const Mouth = ({mouthRadius, mouthWidth, startAngle, endAngle}) => {
    const mouthArc = d3.arc()
        .innerRadius(mouthRadius)
        .outerRadius(mouthRadius + mouthWidth)
        .startAngle(startAngle)
        .endAngle(endAngle);
    return <path d={mouthArc()} />
}
