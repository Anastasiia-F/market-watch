interface ILaunch {
    details: string;
    mission_name: string;
    links: {
        flickr_images: Array<string>
    }
    launch_year: string
    id: string
}

export type { ILaunch };
