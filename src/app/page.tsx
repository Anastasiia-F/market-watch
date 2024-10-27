"use client"

import Header from '@/app/ui/header';
import Chart from '@/app/ui/chart/chart';
import Panel from '@/app/ui/panel/panel';


export default function Home() {

    return (
        <div>
            <header className="">
                <Header />
            </header>
            <main className="container mx-auto max-w-screen-xl">
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
            </main>
            <footer className="container mx-auto max-w-screen-xl">

            </footer>
        </div>
    );
}
