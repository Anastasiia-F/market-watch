"use client"

import { Fragment } from 'react';
import Chart from '@/app/components/chart/chart';
import Panel from '@/app/components/panel/panel';
import { xData, yData} from '@/app/components/chart/chartData';

export default function Home() {
    return (
        <Fragment>
            <h1 className="text-3xl">Market Data Center</h1>
            <section>
                <Panel label="U.S.">
                    <div className="charts flex flex-wrap">
                        <Chart xData={xData} yData={yData} />
                        <Chart xData={xData} yData={yData} />
                        <Chart xData={xData} yData={yData} />
                        <Chart xData={xData} yData={yData} />
                        <Chart xData={xData} yData={yData} />
                        <Chart xData={xData} yData={yData} />
                    </div>
                </Panel>
            </section>
            <section>
                <Panel label="Europe">
                    <div className="charts flex flex-wrap">
                        <Chart xData={xData} yData={yData} />
                        <Chart xData={xData} yData={yData} />
                        <Chart xData={xData} yData={yData} />
                        <Chart xData={xData} yData={yData} />
                        <Chart xData={xData} yData={yData} />
                        <Chart xData={xData} yData={yData} />
                    </div>
                </Panel>
            </section>
            <section>
                <Panel label="Asia">
                    <div className="charts flex flex-wrap">
                        <Chart xData={xData} yData={yData} />
                        <Chart xData={xData} yData={yData} />
                        <Chart xData={xData} yData={yData} />
                        <Chart xData={xData} yData={yData} />
                        <Chart xData={xData} yData={yData} />
                        <Chart xData={xData} yData={yData} />
                    </div>
                </Panel>
            </section>
        </Fragment>
    );
}
