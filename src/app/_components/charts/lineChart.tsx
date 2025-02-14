import React, { useRef } from 'react';
import { Line } from "react-chartjs-2";
import ChartJS, { TooltipItem } from "chart.js/auto";
import { ChartOptions, Plugin, CategoryScale, ChartEvent, ChartData, } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';
import { ILineChart, IChartData } from './models';
import backgroundPlugin from './backgroundPlugin';

ChartJS.register(CategoryScale);
ChartJS.register(annotationPlugin);
ChartJS.defaults.font.family = "'Lato', sans-serif";

const LineChart: React.FC<IChartData> = ({ xData, yData }) => {
    const chart = useRef<ILineChart | null>(null);

    const chartData = {
        labels: xData,
        datasets: [{
            data: yData,
            fill: 'start',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgb(75,178,178)',
            borderWidth: 1,
            pointRadius: 0,
            label: '',
        }],
    } as ChartData<'line'>;

    const chartOptions: ChartOptions<'line'> = {
        scales: {
            x: {
                ticks: {
                    color: '#fff',
                    callback: (tickValue: string | number, index: number) => {
                        const step = 2 * 60 * 60 * 1000;
                        if (chartData.labels) {
                            const label = chartData.labels[index] as number;
                            const label0 = chartData.labels[0] as number;
                            if (index === 0) {
                                return new Date(label0).toLocaleTimeString('en-US', {timeStyle: 'short'});
                            }
                            else if (label === label0 + step) {
                                return new Date(label).toLocaleTimeString('en-US', {timeStyle: 'short'});
                            }
                            else if (label === label0 + step * 2) {
                                return new Date(label).toLocaleTimeString('en-US', {timeStyle: 'short'});
                            }
                            else if (label === label0 + step * 3) {
                                return new Date(label).toLocaleTimeString('en-US', {timeStyle: 'short'});
                            }
                            else if (label === label0 + step * 4) {
                                return new Date(label).toLocaleTimeString('en-US', {timeStyle: 'short'});
                            }
                        }
                    }
                }
            },
            y: {
                ticks: {
                    color: '#fff',
                    count: 3,
                }
            }
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
                        scaleID: 'x',
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
                bodyColor: 'rgb(75,178,178)',
                callbacks: {
                    title: (data: TooltipItem<'line'>[]) => {
                        return new Date(Number(data[0].label)).toLocaleTimeString();
                    },
                }
            }
        },
        animation: false,
        onHover: (event: ChartEvent) => {
            const _chart = chart!.current;
            const xPos = event!.x; // Отримуємо позицію миші на осі x

            const xScale = _chart!.scales['x']; // Отримуємо шкалу x
            if (xPos) {
                _chart!.options.plugins.annotation.annotations.line1.value = xScale.getValueForPixel(xPos);
                _chart!.update('none'); // Оновлюємо графік
            }
        },
    }

    const removeLine: Plugin = {
        id: 'removeLine',
        beforeEvent(chart: ILineChart, args: {event: {type: string}}) {
            if (args.event.type === 'mouseout') {
                setTimeout(() => {
                    chart.options.plugins.annotation.annotations.line1.value = undefined;
                    chart.update();
                }, 0);
            }
        }
    };

    return (
        <div className='chart-wrap w-[33.33%]'>
            <Line ref={chart}
                  className="chart"
                  data={chartData}
                  options={chartOptions}
                  plugins={[removeLine, backgroundPlugin]} />
        </div>
    );
};

export default LineChart;
