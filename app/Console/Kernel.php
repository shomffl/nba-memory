<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use App\Console\Commands\updateScoreBatch;
use App\Console\Commands\deletePastJsonBatch;

class Kernel extends ConsoleKernel
{
    protected $commands = [
       updateScoreBatch::class,
       deletePastJsonBatch::class
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        $schedule->command("command:updateScoreBatch")->dailyAt('15:00');
        $schedule->command("command:deletePastJsonBatch")->weekly();
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
