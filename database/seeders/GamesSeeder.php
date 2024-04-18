<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Game;

class GamesSeeder extends Seeder
{
    public function run()
    {
        $games = [
            ['name' => 'Mario Bros', 'url' => 'https://i.pinimg.com/564x/72/94/35/7294359524a9f97fd25c56891d5656e9.jpg', 'moods' => ['alegre']],
            ['name' => 'WarCraft', 'url' => 'https://i.pinimg.com/564x/e7/d9/bf/e7d9bffe395108f058361048884e03d5.jpg', 'moods' => ['triste', 'alegre']],
            ['name' => 'Crash Bandicoot', 'url' => 'https://i.blogs.es/d4d988/460742-crash-bandicoot-n-sane-trilogy-playstation-4-front-cover/650_1200.jpeg', 'moods' => ['triste', 'alegre']],
            ['name' => 'DOOM', 'url' => 'https://uvejuegos.com/img/caratulas/686/Caratula-Doom-3-Xbox.jpg', 'moods' => ['triste']],
            ['name' => 'NBA 2k', 'url' => 'https://as.com/ocio/imagenes/2016/06/02/juegos/1464887113_304316_1464887415_sumario_normal.jpg', 'moods' => ['alegre']],
            ['name' => 'League of Legends', 'url' => 'https://sm.ign.com/ign_es/game/l/league-of-/league-of-legends_q2kj.png', 'moods' => ['triste']],
            ['name' => 'Darksiders', 'url' => 'https://uvejuegos.com/img/caratulas/57402/darksiders-warmastered-edition-cover.jpg', 'moods' => ['alegre']],
            ['name' => 'League of Legends', 'url' => 'https://assets.spartangeek.com/cc/league-of-leyends-cover.png', 'moods' => ['triste', 'alegre']],
            ['name' => 'Warcraft', 'url' => 'https://uvejuegos.com/img/caratulas/59904/wowbfa.jpg', 'moods' => ['alegre']],
            ['name' => 'Grand Theft Auto', 'url' => 'https://1.bp.blogspot.com/_3SA8RC6xbJ8/TKDjg1qxaSI/AAAAAAAAAKU/bOXesi4vzZ8/w1200-h630-p-k-no-nu/gta4krk.jpg', 'moods' => ['triste']],
            // Agregar otros registros a la base de datos de juegos
        ];

        foreach ($games as $game) {
            Game::create($game);
        }
    }
}
