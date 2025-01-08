import React, { useRef } from 'react';
import { Bar } from "react-chartjs-2";
import ChartJS, { ActiveElement } from "chart.js/auto";
import { ChartOptions, Plugin, CategoryScale, ChartEvent, ChartData } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';
import { ILineChart, IChartData, IBarChart } from './models';

ChartJS.register(CategoryScale);
ChartJS.register(annotationPlugin);
ChartJS.defaults.font.family = "'Lato', sans-serif";

const BarChart: React.FC<IChartData> = ({ xData, yData, className, callBack }) => {
    const chart = useRef<IBarChart | null>(null);

    const chartData = {
        labels: xData,
        datasets: [
            {
                label: 'Sales',
                data: yData,
                backgroundColor: [
                    'rgba(255, 159, 64, 0.4)',
                    'rgba(75, 192, 192, 0.4)',
                    'rgba(54, 162, 235, 0.4)',
                    'rgba(153, 102, 255, 0.4)'
                ],
                hoverBackgroundColor: [
                    'rgb(255, 159, 64)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)'
                ],
                borderColor: [
                    'rgb(255, 159, 64)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)'
                ],
                borderWidth: 1
            }
        ]
    } as ChartData<'bar'>;

    const chartOptions: ChartOptions<'bar'> = {
        aspectRatio: 1,
        scales: {
            x: {
                ticks: {
                    color: '#fff',
                }
            },
            y: {
                ticks: {
                    color: '#fff',
                },
                beginAtZero: true,
            },
        },
        interaction: {
            mode: 'index',
            intersect: false,
        },
        plugins: {
            annotation: {
                annotations: {
                    line1: {
                        type: 'line',
                        scaleID: 'y',
                        borderColor: 'rgb(192,73,73)',
                        borderWidth: 1,
                        value: undefined,
                    }
                }
            },
            legend: {
                display: false,
            },
            tooltip: {
                displayColors: false,
                bodyColor: (data) => {
                    if (data.chart.tooltip!.labelColors) {
                        return  data.chart.tooltip!.labelColors[0].borderColor;
                    }
                },
            },
            title: {
                display: true,
                text: 'Change bar and text label color on hover',
                font: {
                    size: 16
                }
            }
        },
        animation: {
            duration: 300
        },
        onHover: (event: ChartEvent, item: ActiveElement[]) => {
            if (item.length && callBack) {
                callBack(item[0].index);
            }
        },
    }

    const onLeave: Plugin = {
        id: 'onLeave',
        beforeEvent(chart: ILineChart, args: {event: {type: string}}) {
            if (args.event.type === 'mouseout') {
                if (callBack) {
                    setTimeout(() => {
                        callBack(-1);
                    }, 0);
                }
            }
        }
    };

    return (
        <div className={`chart-wrap ${className}`}>
            <Bar ref={chart}
                  className="chart"
                  data={chartData}
                  options={chartOptions}
                 plugins={[onLeave]} />
        </div>
    );
};

export default BarChart;
