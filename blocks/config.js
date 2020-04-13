module.exports = [{
	name : "Motor Driver (Dual-EVO24X9)",
	blocks : [{
		xml:
			`<block type="dual_evo24x9_motor">
				<value name="speed">
					<shadow type="math_number">
						<field name="NUM">50</field>
					</shadow>
				</value>
			</block>`
	}]
	}
];