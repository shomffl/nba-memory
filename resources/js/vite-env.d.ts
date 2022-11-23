interface ImportMeta {
    readonly glob: any;
    readonly env: ImportMetaEnv;
}

interface ImportMetaEnv {
    readonly VITE_APP_URL: string;
}

declare var route: any;

type User = {
    id: number;
    email: string;
    email_verified_at: any;
    created_at: string;
    updated_at: string;
};

type Session = {
    calendar: number;
    show: number;
};

type Team = {
    id: number;
    name: string;
    logo: string;
};

type Game = {
    id: number;
    home_team_id: number;
    away_team_id: number;
    home_team_point: number;
    away_team_point: number;
    home_team: Team;
    away_team: Team;
    matched_at: string;
    series_id: number;
};

type GameDate = {
    matched_at: string;
};

type Post = {
    id: number;
    title: string;
    detail: string;
    game_id: number;
    game: Game;
    links: Array<Link>;
};

type Link = {
    id: number;
    title: string;
    url: string;
};

type SendPost = {
    game_id: string | any;
    title: string;
    detail: string;
    links: Array<Link>;
};

type Schedule = {
    display: string;
    date: string;
    match: string;
};

type Season = {
    id: number;
    season: string;
};

type PostsSortByPosted = {
    id: number;
    title: string;
    detail: string;
    game_id: number;
    game: Game;
    links: Array<Link>;
};

type PostSortByMatched = {
    id: number;
    home_team: Team;
    away_team: Team;
    home_team_point: number;
    away_team_point: number;
    posts: Array<Post>;
    matched_at: string;
};
