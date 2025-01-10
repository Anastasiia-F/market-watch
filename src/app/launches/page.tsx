'use client';
import { useQuery } from "@tanstack/react-query";
import { gql, request } from 'graphql-request'
import React from 'react';
import { DataView } from 'primereact/dataview';
import Link from 'next/link';
const API_URL = `https://spacex-production.up.railway.app/`;

const variables = {
    launchId_1: '5eb87cfdffd86e000604b34c',
    launchId_2: '5eb87cfeffd86e000604b34e',
    launchId_3: '5eb87d00ffd86e000604b34f',
    launchId_4: '5eb87d03ffd86e000604b352',
    launchId_5: '5eb87d06ffd86e000604b355',
    launchId_6: '5eb87d07ffd86e000604b356',
    launchId_7: '5eb87d08ffd86e000604b357',
    launchId_8: '5eb87d0cffd86e000604b35a',
    launchId_9: '5eb87d0dffd86e000604b35b',
}

const fragment = gql`
    fragment LaunchDetails on Launch {
        details
        mission_name
        links {
            flickr_images
        }
        launch_year
        id
    }
`;

const document = gql`
    ${fragment}
    query Launch(
        $launchId_1: ID!,
        $launchId_2: ID!,
        $launchId_3: ID!,
        $launchId_4: ID!,
        $launchId_5: ID!,
        $launchId_6: ID!,
        $launchId_7: ID!,
        $launchId_8: ID!,
        $launchId_9: ID!
    ) {
        launch_1: launch(id: $launchId_1) {
            ...LaunchDetails
        }
        launch_2: launch(id: $launchId_2) {
            ...LaunchDetails
        }
        launch_3: launch(id: $launchId_3) {
            ...LaunchDetails
        }
        launch_4: launch(id: $launchId_4) {
            ...LaunchDetails
        }
        launch_5: launch(id: $launchId_5) {
            ...LaunchDetails
        }
        launch_6: launch(id: $launchId_6) {
            ...LaunchDetails
        }
        launch_7: launch(id: $launchId_7) {
            ...LaunchDetails
        }
        launch_8: launch(id: $launchId_8) {
            ...LaunchDetails
        }
        launch_9: launch(id: $launchId_9) {
            ...LaunchDetails
        }
    }
`;

const Launches = () => {
    const { data, isPending } = useQuery({
    queryKey: ['launches'],
    queryFn: async () => {
        const response = await request(API_URL, document, variables);
        const result = [];
        for (const item in response) {
            result.push(response[item]);
        }
        return result;
    }
    });

    if(isPending) {
        return <p>Loading...</p>
    }

    const gridItem = (product) => {
        return (
            <Link
                href={`/launches/${product.id}`}
                className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2" key={product.id}>
                <div className="p-4 border-1 surface-border surface-card border-round">
                    <div className="flex flex-column align-items-center gap-3 py-5">
                        <img className="w-9 shadow-2 border-round" src={product.links.flickr_images[1]}
                             alt={product.name}/>
                        <div className="text-2xl font-bold">{product.mission_name}</div>
                    </div>
                    <div className="flex align-items-center justify-content-between">
                        <span className="text-2xl font-semibold">{product.launch_year}</span>
                    </div>
                </div>
            </Link>
        );
    };

    const listTemplate = (products) => {
        return (
            <div className="grid grid-nogutter">
                {
                    products.map((product) => gridItem(product))
                }
            </div>);
    };

    return (
        <div className="card">
            <h1 className="text-3xl">SpaceX Launches</h1>
            <DataView value={data} listTemplate={listTemplate} layout="grid" />
        </div>
    )
}

export default Launches;
