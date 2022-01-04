#!/usr/bin/env node
import { rulesOfTheGame, generateRound } from '../src/games/brain-progression.js';
import playGames from '../src/index.js';

playGames(rulesOfTheGame, generateRound);
