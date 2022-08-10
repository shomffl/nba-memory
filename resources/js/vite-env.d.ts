interface ImportMeta {
    readonly glob: any;
}
declare var route: any;

type Team = {
    id: number;
    name: string;
};

type Game = {
    id: number;
    home_team_id: number;
    away_team_id: number;
    home_team: Team;
    away_team: Team;
    matched_at: string;
    series_id: number;
};

type Post = {
    id: number;
    title: string;
    detail: string;
    game: Game;
};
