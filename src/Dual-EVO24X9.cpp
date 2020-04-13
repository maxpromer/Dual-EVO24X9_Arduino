#ifndef __DUAL_EVO24X9_CPP__
#define __DUAL_EVO24X9_CPP__

#include "Dual-EVO24X9.h"

DualEVO24X9::DualEVO24X9(int addr, TwoWire *bus) {
	this->_addr = addr;
	this->_wire = bus;
}

void DualEVO24X9::setup() {
	this->_wire->beginTransmission(this->_addr);
	this->_wire->write(0x83);
	this->_wire->write((uint8_t) 0x00);
	this->_wire->write(0x01);
	return this->_wire->endTransmission(false) == 0;
}

bool DualEVO24X9::motor(uint8_t ch, uint8_t dir, uint8_t speed) {
	if (error) {
		return false;
	}
	
	if (ch < 1 || ch > 2) {
		return false;
	}
	speed = max(speed, 0);
	speed = min(speed, 100);
	
	this->_wire->beginTransmission(this->_addr);
	this->_wire->write(ch == 1 ? 0x85 : 0x86);
	this->_wire->write(dir);
	this->_wire->write((uint8_t)(speed / 100.0 * 255.0));
	return this->_wire->endTransmission(false) == 0;
}

#endif