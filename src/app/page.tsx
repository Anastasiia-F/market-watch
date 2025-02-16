"use client"

import React, { Fragment, useState, useCallback } from 'react';
import classNames from 'classnames';
import { Card } from 'primereact/card';
import LineChart from '@/app/_components/charts/lineChart';
import DJIA from '@/app/_mocks/chartMocks/DJIA.json';
import NASDAQ from '@/app/_mocks/chartMocks/NASDAQ.json';
import GDOW from '@/app/_mocks/chartMocks/GDOW.json';
import Message from '@/app/_components/message/message';
import BarChart from '@/app/_components/charts/barChart';
import cardsMock from '@/app/_mocks/cardsMock.json';
import IChartItem from '@/app/_models/IChartItem';

const DJIAData = DJIA.Series[0].DataPoints.flat();
const NASDAQData = NASDAQ.Series[0].DataPoints.flat();
const GDOWData = GDOW.Series[0].DataPoints.flat();

const mapData = (data) => {
    return {
        ...data,
        isActive: false
    }
}

export default function Home() {

    const [barChartItems, setBarChartItems] = useState<IChartItem[]>(
        cardsMock.data.map((item) => mapData(item))
    );

    const barHoverHandler = useCallback((() => {
        let prevIndex = -1;

        return (index: number) => {
            if(index !== prevIndex) {
                prevIndex = index;
                setBarChartItems((items) => {
                    return items.map((item) => {
                        return {
                            ...item,
                            isActive: item.id === index + 1
                        }
                    })
                });
            }
        }
    })(), []);


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
                                <BarChart data={barChartItems}
                                          callBack={barHoverHandler} />
                            </div>
                        </div>
                        <div className="card-wrap w-[50%]">
                            {
                                barChartItems.map((item, index) => {
                                    return (
                                        <Card className={classNames({ 'p-card-active': item.isActive })}
                                              key={item.id}
                                              onMouseEnter={() => {barHoverHandler(index)}}
                                              onMouseLeave={() => {barHoverHandler(-1)}}
                                              title={item.title}
                                              subTitle={item.subTitle}>
                                            <p className="m-0">{item.text}</p>
                                        </Card>
                                    )
                                })
                            }
                    </div>
                </div>
            </section>

            <Message />

        </Fragment>
    );
}
