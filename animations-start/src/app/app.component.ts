import { Component, trigger, state, style, transition, animate, keyframes, group } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('divState', [
      state('normal', style({
        backgroundColor: 'red',
        transform : 'translateX(0)'
      })),
      state('highlighted', style({
        backgroundColor: 'blue',
        transform : 'translateX(100px)'
      })),
      transition( 'normal <=> highlighted', animate(300))
    ]),
    trigger('wildState', [
      state('normal', style({
        backgroundColor: 'red',
        transform : 'translateX(0) scale(1)',
        borderRadius: '0px'
      })),
      state('highlighted', style({
        backgroundColor: 'blue',
        transform : 'translateX(100px) scale(1)',
        borderRadius: '0px'
      })),
      state('shrunken', style({
        backgroundColor: 'black',
        transform : 'translateX(0) scale(0.41)',
        borderRadius: '0px'
      })),
      transition( 'normal => highlighted', animate(300)),
      transition( 'highlighted => normal', animate(600)),
      // transition( 'shrunken <=> *', animate(600))
      transition( 'shrunken <=> *', [
        style({
          backgroundColor: 'orange'
        }),
        animate(1000, style({
          borderRadius: '50px'
        })),
        animate(4000, style({
          borderRadius: '10px'
        })),
        animate(500)
      ])
    ]),
    trigger('list1', [
      state('in', style({
        opacity: '1',
        transform : 'translateX(0)'
      })),
      transition( 'void => *', [
        style({
          opacity: '0',
          transform : 'translateX(-100px)'
        }),
        animate(300)
      ]),
      transition( '* => void', [
        animate(300, style({
          opacity: '0',
          transform : 'translateX(100px)'
        }))
      ])
    ]),
    ,
    trigger('list2', [
      state('in', style({
        opacity: '1',
        transform : 'translateX(0)'
      })),
      transition( 'void => *', [        
        animate(1000, keyframes([
          style({
            opacity: '0',
            transform : 'translateX(-100px)',
            offset: 0
          }),
          style({
            opacity: '0.5',
            transform : 'translateX(-500px)',
            offset: 0.3
          }),
          style({
            opacity: '1',
            transform : 'translateX(-20px)',
            offset: 0.8
          }),
          style({
            opacity: '1',
            transform : 'translateX(0px)',
            offset: 1
          })
        ]))
      ]),
      transition( '* => void', [
        group([
          animate(300, style({
            color: 'red'
          })),
          animate(600, style({
            opacity: '0',
            transform : 'translateX(100px)'
          }))
        ])        
      ])
    ])
  ]
})
export class AppComponent {
  state = "normal";
  wildState = "normal";
  list: string[] = ['item 1', 'item 2', 'item 3'];

  onAdd(item: string) {
    this.list.push(item);
  }

  onDelete(item: string) {
    this.list.splice(this.list.indexOf(item), 1);
  }

  onAnimate() {
    this.state = this.state == 'normal' ? 'highlighted' : 'normal';
    this.wildState = this.wildState == 'normal' ? 'highlighted' : 'normal';
  }

  onShrink() {
    this.wildState = 'shrunken';
  }

  animationStarted(event) {
    console.log(event);
  }

  animationEnded(event) {
    console.log(event);
  }

}
