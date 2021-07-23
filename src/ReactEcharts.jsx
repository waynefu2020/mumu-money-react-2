import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts'

export function ReactEcharts(props){
    const {option} = props;
    const container = useRef(null)
    const chart = useRef(null)
    useEffect(()=>{
        console.log(container.current);
        const width = document.documentElement.clientWidth
        container.current.style.width = `${width - 20}px`
        container.current.style.height = `${(width - 20) * 1.2}px`
        chart.current = echarts.init(container.current,'dark')
    },[])
    useEffect(()=>{
        chart.current.setOption(option)
    },[option])
    return (
        <div ref={container}/>
    )
}

