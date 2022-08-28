interface ImportMeta {
    readonly glob: any;
}
declare var route: any;

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

type Post = {
    id: number;
    title: string;
    detail: string;
    game_id: number;
    game: Game;
};

type SendPost = {
    game_id: string | any;
    title: string;
    detail: string;
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

type PostSortByMatched = {
    id: number;
    home_team: Team;
    away_team: Team;
    home_team_point: number;
    away_team_point: number;
    posts: Array<Post>;
    matched_at: string;
};
