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
type ILineChart = Chart<'line', number[], unknown> & { options: IChartOptions };
type IBarChart = Chart<'bar', number[], unknown> & { options: IChartOptions };

interface IChartData {
    xData: Array<number | string>;
    yData: Array<number | string>;
}

interface IBarChartData extends IChartData {
    callBack: (data: number) => void;
    activeIndex: number | null;
}

export type { IChartOptions, ILineChart, IChartData, IBarChart, IBarChartData };
