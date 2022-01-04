#!/usr/bin/env node
import { rulesOfTheGame, generateRound } from '../src/games/brain-even.js';
import playGames from '../src/index.js';

playGames(rulesOfTheGame, generateRound);
