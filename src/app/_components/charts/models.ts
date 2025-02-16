import { Chart, ChartOptions } from 'chart.js';
import { LineAnnotationOptions } from 'chartjs-plugin-annotation';
import IChartItem from '@/app/_models/IChartItem';

interface IChartOptions extends ChartOptions<'line'> {
    plugins: {
        annotation: {
            annotations: {
                line1: LineAnnotationOptions;
            };
        };
    };
}
type ILineChart = Chart<'line', number[], unknown> & { options: IChartOptions };
type IBarChart = Chart<'bar', number[], unknown> & { options: IChartOptions };

interface IChartData {
    xData: Array<number | string>;
    yData: Array<number | string>;
}

interface IBarChartData {
    data: IChartItem[],
    callBack: (data: number) => void;
}

export type { IChartOptions, ILineChart, IChartData, IBarChart, IBarChartData };
