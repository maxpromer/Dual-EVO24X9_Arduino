#ifndef __DUAL_EVO24X9_H__
#define __DUAL_EVO24X9_H__

#include <Arduino.h>
#include <Wire.h>

class DualEVO24X9 {
	private:
		uint8_t _addr;
		TwoWire *_wire;

	public:
		DualEVO24X9(int addr, TwoWire *bus = &Wire) ;
		
		bool setup() ;
		bool motor(uint8_t ch, uint8_t dir, uint8_t speed) ;
		
};

#endif