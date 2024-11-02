"use client"

import React, { Fragment, useState } from 'react';
import LineChart from '@/app/components/charts/lineChart';
import classNames from 'classnames';
import DJIA from '@/app/components/charts/chartsData/DJIA.json';
import NASDAQ from '@/app/components/charts/chartsData/NASDAQ.json';
import GDOW from '@/app/components/charts/chartsData/GDOW.json';
import Message from '@/app/components/message/message';
import BarChart from '@/app/components/charts/barChart';
import { Card } from 'primereact/card';

const DJIAData = DJIA.Series[0].DataPoints.flat();
const NASDAQData = NASDAQ.Series[0].DataPoints.flat();
const GDOWData = GDOW.Series[0].DataPoints.flat();


export default function Home() {

    const [blocl_1, setBlock_1] = useState(false);
    const [blocl_2, setBlock_2] = useState(false);
    const [blocl_3, setBlock_3] = useState(false);
    const [blocl_4, setBlock_4] = useState(false);

    const makeBlockActive = (index: number) => {
        switch(index) {
            case 0:
                setBlock_1(true);
                setBlock_2(false);
                setBlock_3(false);
                setBlock_4(false);
                break;
            case 1:
                setBlock_1(false);
                setBlock_2(true);
                setBlock_3(false);
                setBlock_4(false);
                break;
            case 2:
                setBlock_1(false);
                setBlock_2(false);
                setBlock_3(true);
                setBlock_4(false);
                break;
            case 3:
                setBlock_1(false);
                setBlock_2(false);
                setBlock_3(false);
                setBlock_4(true);
                break;

            default:
                    setBlock_1(false);
                    setBlock_2(false);
                    setBlock_3(false);
                    setBlock_4(false);
        }

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
                    <LineChart xData={DJIA.TimeInfo.Ticks} yData={DJIAData} className="w-[33.33%]" />
                    <LineChart xData={GDOW.TimeInfo.Ticks} yData={GDOWData} className="w-[33.33%]" />
                    <LineChart xData={NASDAQ.TimeInfo.Ticks} yData={NASDAQData} className="w-[33.33%]" />
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
                                      callBack={makeBlockActive}
                                      className="grow h-[100%]" />
                        </div>
                    </div>
                    <div className="card-wrap w-[50%]">
                        <Card className={classNames({ 'p-card-active': blocl_1 })} title="First block" subTitle="Card subtitle">
                            <p className="m-0">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                                numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                            </p>
                        </Card>
                        <Card className={classNames({ 'p-card-active': blocl_2 })} title="Second block" subTitle="Card subtitle">
                            <p className="m-0">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                                numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                            </p>
                        </Card>
                        <Card className={classNames({ 'p-card-active': blocl_3 })} title="Third block" subTitle="Card subtitle">
                            <p className="m-0">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                                numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                            </p>
                        </Card>
                        <Card className={classNames({ 'p-card-active': blocl_4 })} title="Fourth block" subTitle="Card subtitle">
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
