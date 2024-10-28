"use client"

import { Fragment } from 'react';
import Chart from '@/app/components/chart/chart';
import Panel from '@/app/components/panel/panel';


export default function Home() {

    return (
        <Fragment>
            <h1 className="text-3xl">Market Data Center</h1>
            <section>
                <Panel label="U.S.">
                    <div className="charts flex flex-wrap">
                        <Chart />
                        <Chart />
                        <Chart />
                        <Chart />
                        <Chart />
                        <Chart />
                    </div>
                </Panel>
            </section>
            <section>
                <Panel label="Europe">
                    <div className="charts flex flex-wrap">
                        <Chart />
                        <Chart />
                        <Chart />
                        <Chart />
                        <Chart />
                        <Chart />
                    </div>
                </Panel>
            </section>
            <section>
                <Panel label="Asia">
                    <div className="charts flex flex-wrap">
                        <Chart />
                        <Chart />
                        <Chart />
                        <Chart />
                        <Chart />
                        <Chart />
                    </div>
                </Panel>
            </section>
        </Fragment>
    );
}
