#!/usr/bin/env node

// at the beginning of the program it will import the json file
// when a test is added it will write the the program and terminate

import { getTestArray, writeTestArray } from './store.js';

let emptyArray = [];
writeTestArray(emptyArray)
