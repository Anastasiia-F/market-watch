import { Chart, ChartOptions } from 'chart.js';
import { LineAnnotationOptions } from 'chartjs-plugin-annotation';

interface IChartOptions extends ChartOptions<'line'> {
    plugins: {
        annotation: {
            annotations: {
                line1: LineAnnotationOptions;
            };
        };
    };
}
type IChart = Chart<'line', number[], unknown> & { options: IChartOptions };

interface IChartData {
    xData: number[];
    yData: number[];
}

export type { IChartOptions, IChart, IChartData };
