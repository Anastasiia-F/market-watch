"use client"

import Chart from '@/app/ui/chart/chart';
import Header from '@/app/ui/header';


export default function Home() {
    return (
        <div>
            <header className="">
                <Header />
            </header>
            <main className="container mx-auto max-w-screen-xl">
                <h1 className="text-3xl">Market Data Center</h1>
                <section>
                    <h2>
                        <span className="label">U.S.</span>
                    </h2>
                    <div className="charts flex flex-wrap">
                        <Chart />
                        <Chart />
                        <Chart />
                    </div>
                </section>
                <section>
                    <h2>
                        <span className="label">Europe</span>
                    </h2>
                    <div className="charts flex flex-wrap">
                        <Chart />
                        <Chart />
                        <Chart />
                    </div>
                </section>
            </main>
            <footer className="container mx-auto max-w-screen-xl">

            </footer>
        </div>
    );
}
