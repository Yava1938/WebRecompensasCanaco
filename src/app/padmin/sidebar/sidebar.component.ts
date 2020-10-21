import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  private _linkValue: string = 'yourAddress';
  public get linkValue(): string {
    return this._linkValue;
  }

  opened = false;

  constructor(private render: Renderer2, private elem: ElementRef) { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.opened = !this.opened;
  }
  @ViewChild('link')
  private linkElement;

  public buttonAction(buttonElement: HTMLElement): void {
    switch (buttonElement.id) {
      case 'ver comercios': {
        this.render.setProperty(buttonElement, 'id', 'guardar comercios');
        this.render.removeStyle(this.linkElement.nativeElement, 'display'); break;

      }
      case 'guardar comercios': {
        this.render.setProperty(buttonElement, 'id', 'ver comercios');
        this.render.setStyle(this.linkElement.nativeElement, 'display', 'none');break;
      }
    }
  }

}
