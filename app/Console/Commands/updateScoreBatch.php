<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Services\ScoreUpdateService;

class updateScoreBatch extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:updateScoreBatch';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '試合の点数を更新';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        logger("バッチ処理開始");

        ScoreUpdateService::outputLatestGamesDataToJson();
        ScoreUpdateService::updateTodayGameScore();

        logger("バッチ処理終了");
    }
}
