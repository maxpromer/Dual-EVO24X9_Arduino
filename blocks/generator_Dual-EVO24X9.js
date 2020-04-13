Blockly.JavaScript['dual_evo24x9_motor'] = function(block) {
	var dropdown_addr = block.getFieldValue('addr');
	var dropdown_ch = block.getFieldValue('ch');
	var dropdown_dir = block.getFieldValue('dir');
	var value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC) || '0';
	
	var WIRE_OBJ = 'Wire';
	var SDA_PIN = 21, SCL_PIN = 22; 

	var board_name = Vue.prototype.$global.board.board_info.name;
	if (board_name == 'kidbright-arduino' || board_name == 'openkb') {
		WIRE_OBJ = 'Wire1';
		SDA_PIN = 4;
		SCL_PIN = 5;
	} else if (board_name == 'ipst-wifi') {

	}

	var code = '';
	code += `#EXTINC#include <DHT12.h>#END\n`;
	code += `#EXTINC#include <Wire.h>#END\n`;
	code += `#VARIABLE DualEVO24X9 driver(${dropdown_addr}, &${WIRE_OBJ});#END\n`;
	code += `#SETUP ${WIRE_OBJ}.begin(${SDA_PIN}, ${SCL_PIN}); #END`;
	code += `driver.motor(${dropdown_ch}, ${dropdown_dir}, ${value_speed});`;

	return code;
};
