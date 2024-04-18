<?php

namespace App\Http\Controllers;

use App\Models\Game;
use Illuminate\Http\Request;

class GamesController extends Controller
{
    public function index(Request $request)
    {
        $query = Game::query();

        // Filtrar por estado de ánimo
        if ($request->has('mood')) {
            $mood = $request->input('mood');
            $query->where('mood', $mood);
        }
    
        // Otros filtros...
    
        $games = $query->get();
        return response()->json($games);
    }

    public function store(Request $request)
    {
        // Lógica para almacenar un nuevo juego
    }

    public function show($id)
    {
        $game = Game::findOrFail($id);
        return response()->json($game);
    }

    public function update(Request $request, $id)
    {
        // Lógica para actualizar un juego existente
    }

    public function destroy($id)
    {
        // Lógica para eliminar un juego
    }
}