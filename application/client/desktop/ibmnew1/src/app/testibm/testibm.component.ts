import { Component, OnInit } from '@angular/core';
import { TestibmService } from './testibm.service';

@Component({
  selector: 'app-testibm',
  templateUrl: './testibm.component.html',
  styleUrls: ['./testibm.component.scss'],
})

export class TestibmComponent implements OnInit {
    public test = {
        name: '',
    }

    constructor (
        private testibmService: TestibmService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.testibmService.GpCreate(this.test).subscribe(data => {
            this.test.name = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}