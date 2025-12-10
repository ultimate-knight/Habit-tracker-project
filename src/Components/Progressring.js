export default function Progressring({stroke,progress,radius,children}){
    let normalizedradius=radius-stroke*2;
    let circumference=2*Math.PI*normalizedradius;
    let strokeDashoffset=circumference-(progress/100)*circumference
    return (
        <>
        <svg height={radius*2} width={radius*2}>
            <circle className="opacity-40" r={normalizedradius} cx={radius} strokeWidth={stroke} cy={radius} stroke="white" fill="transparent"/>
            <circle r={normalizedradius} cx={radius} cy={radius} stroke="white" fill="transparent" strokeDasharray={circumference} strokeDashoffset={strokeDashoffset} style={{strokeDashoffset:strokeDashoffset}} strokeWidth={stroke} transform={`rotate(-90 ${radius} ${radius})`}/>
        </svg>
        <div className="flex flex-col items-center justify-center -mt-40">
            {children}
        </div>
        </>
    )
}