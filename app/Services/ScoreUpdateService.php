<?php

namespace App\Services;
use Illuminate\Http\Request;
use Carbon\Carbon;
use App\Models\Game;
use App\Models\Season;
use Illuminate\Support\Facades\Storage;

class ScoreUpdateService {

    // 点数の更新処理
    public static function updateTodayGameScore()
    {
        // ファイル名の取得
        $date = Carbon::now();
        $file_name = $date->year . "-" . $date->month . "-" . $date->day . ".json";

        $json = Storage::get($file_name);
        $games = json_decode($json);

        foreach($games as $key => $value)
        {
            $game_data_in_db = Game::where("id", $value->id)->first();

            // 試合が未実施の場合はパス
            if (Carbon::parse($value->matched_at)->isFuture()){
                continue;
            }

            // jsonに格納されたデータがDBに存在しなかった場合はパス
            if ($game_data_in_db == null){
                continue;
            }

            // 試合の組み合わせがDBに存在しているデータと一致しなかったらパス
            if ($game_data_in_db->home_team_id != $value->home_team_id || $game_data_in_db->away_team_id != $value->away_team_id){
                continue;
            }

            // 試合の日時がDBに保存されている値と一致しなかったらパス
            if ($game_data_in_db->matched_at != $value->matched_at){
                continue;
            }

            // 点数が入力されていた場合はパス
            if ($game_data_in_db->home_team_point != null && $game_data_in_db->away_team_point != null){
                continue;
            }

            //　点数の更新
            $game_data_in_db->update(["home_team_point" => $value->home_team_point, "away_team_point" => $value->away_team_point]);
        }

    }

    // 最新の試合データをjsonファイルとして書き出し
    public static function outputLatestGamesDataToJson(){

        $latest_season = Season::orderBy("id", "DESC")->first();

        $team_list = ["ATL" => 1, "BOS" => 2, "BKN" => 3, "CHA" => 4, "CHI" => 5, "CLE" => 6, "DAL" => 7, "DEN" => 8, "DET" => 9, "GSW" => 10,
            "HOU" => 11, "IND" => 12, "LAC" => 13, "LAL" => 14, "MEM" => 15, "MIA" =>  16, "MIL" => 17, "MIN" => 18, "NOP" => 19, "NYK" => 20,
			"OKC" => 21, "ORL" => 22, "PHI" => 23, "PHX" => 24, "POR" => 25, "SAC" => 26, "SAS" => 27, "TOR" => 28, "UTA" => 29, "WAS" => 30];

        $client = new \GuzzleHttp\Client();
        $option = [
            'headers' => [
                'X-RapidAPI-Key' => config("services.nba.token"),
                'X-RapidAPI-Host' => config("services.nba.host")
            ],
        ];
        $response = $client->request(
            'GET',
            'https://api-nba-v1.p.rapidapi.com/games?season=' . $latest_season->season,
            $option,
        );

        $games = json_decode($response->getBody(), true);

        $games_list = [];
        $game_id = Game::where("season_id", $latest_season->id)->orderBy("id", "ASC")->first()->id;

        // データの成形
        foreach($games["response"] as $game)
        {
            try {
                $home_team_id = $team_list[$game["teams"]["home"]["code"]];
                $away_team_id = $team_list[$game["teams"]["visitors"]["code"]];
                $home_team_point = $game["scores"]["home"]["points"];
                $away_team_point = $game["scores"]["visitors"]["points"];
                $formated_date = Carbon::parse($game["date"]["start"])->timezone("Asia/Tokyo");
                preg_match_all("/[0-9]{4}-[0-9]{2}-[0-9]{2}/", $formated_date, $data, PREG_SET_ORDER);
                $matched_at = $data[0][0];
                array_push($games_list, ["id" => $game_id, "home_team_id" => $home_team_id, "away_team_id" => $away_team_id, "home_team_point" => $home_team_point, "away_team_point" => $away_team_point, "matched_at" => $matched_at]);
                $game_id += 1;
            } catch (\Exception $e){
                logger("not data");
            }

        }

        // ファイル名の取得
        $date = Carbon::now();
        $file_name = $date->year . "-" . $date->month . "-" . $date->day . ".json";

        $arr = json_encode($games_list);
        Storage::put($file_name, $arr);
    }
}
