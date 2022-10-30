<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Services\ScoreUpdateService;

class deletePastJsonBatch extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:deletePastJsonBatch';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = '過去のjsonデータを削除';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        logger("バッチ処理開始");

        ScoreUpdateService::deletePastJson();

        logger("バッチ処理終了");
    }
}
