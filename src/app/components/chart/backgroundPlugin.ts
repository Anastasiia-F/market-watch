import { Plugin } from 'chart.js';
import { IChart } from './models';

const backgroundPlugin: Plugin = {
    id: 'backgroundPlugin',
    beforeDatasetsDraw(chart: IChart): boolean | void {
        const {ctx, chartArea: { top, height},
            scales: {x}} = chart;

        ctx.fillStyle = '#2a323d';
        ctx.fillRect(x.getPixelForValue(0), top, x.getPixelForValue(120) - x.getPixelForValue(0), height);

        ctx.fillStyle = '#2a323d';
        ctx.fillRect(x.getPixelForValue(240), top, x.getPixelForValue(360) - x.getPixelForValue(240), height);
    },
}

export default backgroundPlugin;
