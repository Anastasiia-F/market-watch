'use client';
import React, { Fragment } from 'react';
import { useParams } from 'next/navigation'
import { useQueryClient } from '@tanstack/react-query';
import { useQuery } from  "@tanstack/react-query";
import { gql, request } from 'graphql-request';
import { ILaunch } from '@/app/launches/models';

const API_URL = `https://spacex-production.up.railway.app/`;

const document = gql`
    query Launch($launchId: ID!) {
        launch(id: $launchId) {
            details
            mission_name
            links {
                flickr_images
            }
            launch_year
            id
        }
    }
`;

const LaunchDetail = () => {
    const queryClient = useQueryClient();
    const data = queryClient.getQueryData<[ILaunch]>(['launches']);
    const { id } = useParams<{id: string}>();

    if (data) {
        const launch = data.find((item) => item.id === id);
        if (launch) {
            return <LaunchDetailComponent data={launch} />
        }
        return <p>Nothing found</p>
    } else {
        const LaunchDetailWithRequest = WithRequest(LaunchDetailComponent, id);
        return <LaunchDetailWithRequest />
    }
}

const WithRequest = <T,>(WrappedComponent: React.FC<{data: ILaunch}>, id: string) => {
    const variables = {
        launchId: id,
    }
    const {data, isPending} = useQuery<{launch: ILaunch}>({
        queryKey: [id],
        queryFn: async () => request(API_URL, document, variables),
    });
    // eslint-disable-next-line react/display-name
    return (props: T) => {
        if (isPending) {
            return <p>Loading...</p>
        }

        if (data) {
            return <WrappedComponent {...props} data={ data?.launch }  />
        }
    }
}

const LaunchDetailComponent: React.FC<{data: ILaunch}> = ({ data }) => {
    const {mission_name, launch_year, links, details } = data;
    return (
        <Fragment>
            <h1 className="text-3xl">{mission_name} {launch_year}</h1>
            <div className="page-content p-8 lg:p-16 flex flex-wrap mb-4">
                <div className="lg:w-[50%] pl-0 lg:pr-5 lg:pb-0 pb-5 flex items-stretch">
                    <div className="image-wraper relative w-full">
                        <img src={links.flickr_images[1]}
                               className="border-round"
                               alt="Company image" />
                    </div>
                </div>
                <div className="lg:w-[50%] pl-0 lg:pl-5">
                    <p className="mb-4">{details}</p>
                </div>
            </div>
        </Fragment>
    );
}

export default LaunchDetail;

