import * as swr from 'swr';
import { SWRConfiguration } from 'swr';

declare type LanyardResponse = {
    success: true;
    data: Data;
} | {
    success: false;
    error: {
        message: string;
        code: string;
    };
};
interface Data {
    spotify: Spotify | null;
    kv: {
        [key: string]: string;
    };
    listening_to_spotify: boolean;
    discord_user: DiscordUser;
    discord_status: string;
    activities: Activity[];
    active_on_discord_mobile: boolean;
    active_on_discord_desktop: boolean;
}
interface Spotify {
    track_id: string;
    timestamps: Timestamps;
    song: string;
    artist: string;
    album_art_url: string;
    album: string;
}
interface Timestamps {
    start: number;
    end: number;
}
interface DiscordUser {
    username: string;
    public_flags: number;
    id: number;
    discriminator: string;
    avatar: string;
}
interface Activity {
    type: number;
    state: string;
    name: string;
    id: string;
    emoji?: Emoji;
    created_at: number;
    timestamps?: Timestamps;
    sync_id?: string;
    session_id?: string;
    party?: Party;
    flags?: number;
    details?: string;
    assets?: Assets;
    application_id?: string;
}
interface Emoji {
    name: string;
    id: number;
    animated: boolean;
}
interface Party {
    id: string;
}
interface Assets {
    small_text: string;
    small_image: string;
    large_text: string;
    large_image: string;
}

declare function useLanyardWs(snowflake: string | string[], instance?: string): Data | undefined;

declare class LanyardError extends Error {
    readonly request: Request;
    readonly response: Response;
    readonly code: number;
    constructor(request: Request, response: Response, message: string);
}
declare type Options = Omit<SWRConfiguration<Data, LanyardError>, 'fetcher'>;
declare function useLanyard(snowflake: string, instance: string, options?: Options): swr.SWRResponse<Data, LanyardError>;

export { Activity, Assets, Data, DiscordUser, Emoji, LanyardError, LanyardResponse, Options, Party, Spotify, Timestamps, useLanyard, useLanyardWs };
