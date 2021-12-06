import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

	@Input() deviceName: string;
	@Input() deviceStatus: string;
	
	constructor() {
		this.deviceName = 'd';
		this.deviceStatus = 'off';
	}

	ngOnInit(): void {
	}
	
	getStatus() {
		return this.deviceStatus;
	}

}
