"use client"

import React, { Fragment, useState } from 'react';
import LineChart from '@/app/_components/charts/lineChart';
import classNames from 'classnames';
import DJIA from '@/app/_mocks/chartMocks/DJIA.json';
import NASDAQ from '@/app/_mocks/chartMocks/NASDAQ.json';
import GDOW from '@/app/_mocks/chartMocks/GDOW.json';
import Message from '@/app/_components/message/message';
import BarChart from '@/app/_components/charts/barChart';
import { Card } from 'primereact/card';

const DJIAData = DJIA.Series[0].DataPoints.flat();
const NASDAQData = NASDAQ.Series[0].DataPoints.flat();
const GDOWData = GDOW.Series[0].DataPoints.flat();

interface Blocks {
    [key: string]: boolean;
}

export default function Home() {

    const [blocks, setBlocks] = useState<Blocks>({
        block_0: false,
        block_1: false,
        block_2: false,
        block_3: false,
    });

    const makeBlockActive = (id: number) => {setBlocks({
            block_0: id === 0,
            block_1: id === 1,
            block_2: id === 2,
            block_3: id === 3,
        });
    };

    return (
        <Fragment>
            <h1 className="text-3xl">Market Data Center</h1>
            <section>
                <h2 className="flex items-center">
                    <span className="label flex-none">Line charts with annotation</span>
                    <span className="bg grow"></span>
                </h2>
                <div className="charts flex flex-wrap">
                    <LineChart xData={DJIA.TimeInfo.Ticks} yData={DJIAData} />
                    <LineChart xData={GDOW.TimeInfo.Ticks} yData={GDOWData} />
                    <LineChart xData={NASDAQ.TimeInfo.Ticks} yData={NASDAQData} />
                </div>
            </section>
            <section>
                <h2 className="flex items-center">
                    <span className="label flex-none">Bar chart with hover events</span>
                    <span className="bg grow"></span>
                </h2>
                <div className="flex">
                        <div className="flex w-[50%]">
                            <div className="charts grow flex flex-wrap">
                                <BarChart xData={['Q1', 'Q2', 'Q3', 'Q4']}
                                          yData={[540, 325, 702, 620]}
                                          callBack={makeBlockActive} />
                            </div>
                        </div>
                        <div className="card-wrap w-[50%]">
                        <Card className={classNames({ 'p-card-active': blocks.block_0 })} title="First block" subTitle="Card subtitle">
                            <p className="m-0">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                                numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                            </p>
                        </Card>
                        <Card className={classNames({ 'p-card-active': blocks.block_1 })} title="Second block" subTitle="Card subtitle">
                            <p className="m-0">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                                numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                            </p>
                        </Card>
                        <Card className={classNames({ 'p-card-active': blocks.block_2 })} title="Third block" subTitle="Card subtitle">
                            <p className="m-0">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                                numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                            </p>
                        </Card>
                        <Card className={classNames({ 'p-card-active': blocks.block_3 })} title="Fourth block" subTitle="Card subtitle">
                            <p className="m-0">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                                numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            <Message />
        </Fragment>
    );
}
