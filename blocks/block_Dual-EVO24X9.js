Blockly.Blocks['dual_evo24x9_motor'] = {
	init: function() {
		this.jsonInit({
			"type": "dual_evo24x9_motor",
			"message0": "%1 Dual EVO24X9 address %2 motor %3 move %4 at speed %5 %%",
			"args0": [{
				"type": "field_image",
				"src": "https://sv1.picz.in.th/images/2020/04/13/U7p9TJ.png",
				"width": 15,
				"height": 15,
				"alt": "*",
				"flipRtl": false
			}, {
				"type": "field_dropdown",
				"name": "addr",
				"options": [
 					[ "0x50", "0x50" ],
					[ "0x51", "0x51" ],
					[ "0x52", "0x52" ],
					[ "0x53", "0x53" ],
					[ "0x54", "0x54" ],
					[ "0x55", "0x55" ],
					[ "0x56", "0x56" ],
					[ "0x57", "0x57" ]
				]
			}, {
				"type": "field_dropdown",
				"name": "ch",
				"options": [
					[ "1", "1" ],
					[ "2", "2" ]
				]
			}, {
				"type": "field_dropdown",
				"name": "dir",
				"options": [
					[ "Forward", "1" ],
					[ "Backward", "2" ],
					[ "Stop", "3" ]
				]
			}, {
				"type": "input_value",
				"name": "speed",
				"check": "Number"
			}],
			"inputsInline": true,
			"previousStatement": null,
			"nextStatement": null,
			"colour": 60,
			"tooltip": "",
			"helpUrl": ""
		});
	}
};
