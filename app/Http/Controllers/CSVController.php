<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\CSVService;

class CSVController extends Controller
{
    public function outputCSV()
    {
        dd(CSVService::output());
    }
}
