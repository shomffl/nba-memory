<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\CSVService;
use Carbon\Carbon;

class CSVController extends Controller
{
    public function outputCSV()
    {
        $date = new Carbon("2022-10-08T06:20:40.000000Z");
        dd($date);
        dd("2023-01-18 00:41:25");
        CSVService::output();
    }
}
