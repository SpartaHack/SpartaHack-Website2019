import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Rsvp } from './rsvp.model';
import { RsvpService } from './rsvp.service';
import {FileValidator} from './file-input.validator';

class Item {
    item_id: number = 0;
    item_text: string = "";
}

@Component({
    selector: 'rsvp',
    templateUrl: 'rsvp.component.html',
    styleUrls: ['rsvp.component.scss']
})

export class RsvpComponent {
    
    @Input() showing: boolean = false;
    @Input() oldRsvp: Rsvp = null;
    @Output() closed = new EventEmitter<boolean>();

    rsvp: Rsvp = new Rsvp();

    error: string = ""; 
    finished: boolean = false;

    dietaryList: Item[] = [
        { item_id: 1, item_text: 'None' },
        { item_id: 2, item_text: 'Gluten Free' },
        { item_id: 3, item_text: 'Halal' },
        { item_id: 4, item_text: 'Kosher' },
        { item_id: 5, item_text: 'Lactose Intolerant' },   
        { item_id: 6, item_text: 'Nut Allergy' },
        { item_id: 7, item_text: 'Vegan' },
        { item_id: 8, item_text: 'Vegitarian' },
        { item_id: 9, item_text: 'Other' }
    ]
    selectedDietary: Item[] = [ ]
    dietaryDropdownSettings = {
        singleSelection: false,
        idField: 'item_id',
        textField: 'item_text',
        itemsShowLimit: 3,
        allowSearchFilter: false,
        enableCheckAll: false,
    }

    @ViewChild("resume_data") resume;

    shirtSizes: string[] = [
        'Unisex XS',
        'Unisex S',
        'Unisex M',
        'Unisex L',
        'Unisex XL',
        'Unisex XXL',
        "Women's XS",
        "Women's S",
        "Women's M",
        "Women's L",
        "Women's XL",
        "Women's XXL"
    ]

    jobs: string[] = [
        "Internship Opportunities", 
        "Full-Time Opportunities", 
        "Both", 
        "Neither"
    ]

    resumeRawData: any;

    constructor(private rsvpService: RsvpService) { }

    onSubmit() {

        let fi = this.resumeRawData;
        //Convert resume to Base64 string
        if (fi[0]) {
            let file: File = fi[0];
            var reader:FileReader = new FileReader();

            reader.onloadend = (e) => {
                this.rsvp.resume = reader.result.toString();
                this.sendRsvp();
            }
            reader.readAsDataURL(file);
        }
        
    }

    sendRsvp() {
        this.rsvp.dietary_restrictions = [];
        for (let restriction of this.selectedDietary) {
            this.rsvp.dietary_restrictions.push(restriction.item_text)
        }

        this.error = "";

        //There's a past rsvp, this is an update!
        if(this.oldRsvp != null) {
            this.rsvpService.putRsvp(this.rsvp, this.oldRsvp.id).subscribe(
                data => {
                    this.finished = true;
                },
                error => {
                    if(!this.isEmpty(error.error_list))
                    {
                        console.log('here');
                        for (var key in error.error_list) {
                            if (error.error_list.hasOwnProperty(key)) {
                                this.error = error.error_list[key];
                            }
                        }
                    }
                    else
                    {
                        this.error = "Something is not right! Double check your info and try again."
                    }
                }
            )
        }

        //This is a new rsvp!
        else {
            delete this.rsvp.id;
            this.rsvpService.addRsvp(this.rsvp).subscribe(
                data => {
                    this.finished = true;
                },
                error => {
                    if(!this.isEmpty(error.error_list))
                    {
                        console.log('here');
                        for (var key in error.error_list) {
                            if (error.error_list.hasOwnProperty(key)) {
                                this.error = error.error_list[key];
                            }
                        }
                    }
                    else
                    {
                        this.error = "Something is not right! Double check your info and try again."
                    }
                }
            )
        }
    }

    onClose() {
        //reset fields and close
        this.rsvp = new Rsvp();

        this.selectedDietary = [ ];
        
        this.finished = false;
        this.closed.emit(true);
    }

    isEmpty(obj) {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    otherSelected() {
        for(let item of this.selectedDietary) {
            if(item.item_text == "Other") {
                return true;
            }
        }
        return false;
    }
}