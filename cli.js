#! /usr/bin/env node

//Import dependencies
var bedJS = require('bedjs');
var getArgs = require('get-args');

//Import libs
var SaveFasta = require('./lib/save-fasta.js');

//Client object
var Client =
{
	//Commands
	commands: require('./config/commands.json'),

	//Main function
	Main: function()
	{
		//Get the client arguments
		var args = getArgs();

		//Get the command
		var command = (args.command === '') ? 'help' : args.command;

		//Check the command
		if(typeof Client.commands[command] === 'undefined')
		{
			//Show error
			console.log('ERROR: unknow command ' + command);
			console.log('Use "bedjs help" to display the list with all the commands.');

			//Exit
			return ;
		}

		//Get the command function
		var fun = Client.commands[command].run;

		//Run the command
		Client[fun](args);
	}
};

//Run the init function
Client.Main();
