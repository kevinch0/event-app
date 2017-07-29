import { Component, Input } from '@angular/core'

@Component({
    selector: 'event-thumbnail',
    template: `
    <div class='well hoverwell thumbnail'>
        <h2>{{event?.name}}</h2>
        <div>Date: {{event?.date}}</div>
        <div [ngStyle]="isEightAm()" [ngSwitch]="event?.time">
            Time: {{event?.time}}
            <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
            <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
            <span *ngSwitchDefault>(Normal Start)</span>  
        </div>
        <div>Price: \${{event?.price}}</div>
        <div *ngIf="event.location">
            <span>Location: {{event?.location?.address}}</span>
            <span class='pad-left'>{{event?.location?.city}},{{event?.location?.country}}</span>
        </div>
        <div *ngIf='event.onlineUrl'>
            Online Url: {{event?.onlineUrl}}
        </div>
    </div>
    `,
    styles: [`
        .thumbnail { min-height: 210px; }
        .pad-left { margin-left: 10px; }
        .well div { color: #bbb; }
        .green { color: #00ad00 !important; }
        .bold { font-weight: bold; }
    `]
})

export class EventThumbnailComponent {
    @Input() event:any
    someProperty:any = "some value"
    
    isEightAm():any {
        if (this.event && this.event.time === '8:00 am')
            return {color: '#00ad00', 'font-weight': 'bold'}
        return {}
    }
}