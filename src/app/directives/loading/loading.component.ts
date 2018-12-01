import { Component } from '@angular/core';

@Component({
    selector: 'app-waiting',
    template: `<div id="preloader">
                    <div id="preloader-content">
                        <div class="preloader-wrapper small active">
                            <div class="spinner-layer spinner-blue-only">
                                <div class="circle-clipper left">
                                    <div class="circle"></div>
                                    </div><div class="gap-patch">
                                    <div class="circle"></div>
                                </div>
                                <div class="circle-clipper right">
                                <div class="circle"></div>
                            </div>
                            </div>
                        </div>
                        <div class="clear clearfix"></div>
                    </div>   
                </div>`,
    styleUrls: ['./loading.component.css']
})
export class WaitingComponent {

    constructor() { }
}