import { Apply } from './apply.model';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApplyService } from './apply.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
    selector: 'apply',
    templateUrl: 'apply.component.html',
    styleUrls: ['apply.component.scss']
})

export class ApplyComponent implements OnInit {
    constructor(private applyService: ApplyService) {     }

    application: Apply;

    ngOnInit() { }

    onSubmit() {
        // this.applyService.postApplication(this.application).subscribe(data => {
        //     if (data == true){
        //         console.log("true")
        //     }
        // })
    }
}