import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core'
import { Key } from 'ts-keycode-enum'
// import { MdDialogRef } from "@angular/material"

// Generate Random UID
function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

@Component({
  selector: 'vader-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() title: string
  @Input() confirmTxt = 'Salvar'
  @Input() cancelTxt = 'Cancelar'
  @Input() modalId: string
  @Input() confirmButtonDisabled = false
  @Input() confirmButtonRemoved = false
  @Input() width: number
  @Input() height: number
  @Input() breakpoint: number = 640
  @Input() styleClass: string

  @Output() onConfirmAction = new EventEmitter()
  @Output() onShow = new EventEmitter()
  @Output() onHide = new EventEmitter()

  display = false

  /**
   * If user press Ctrl + Enter confirm the modal
   * @param $event
   */
  @HostListener('keydown', ['$event'])
  onKeyDown($event) {
    if ($event.ctrlKey && $event.keyCode == Key.Enter) {
      if (!this.confirmButtonDisabled) {
        this.confirm()
      }
    }
  }

  constructor() {

  }

  ngOnInit() {
    if (this.modalId == null || this.modalId == undefined || this.modalId.trim() == "") {
      this.modalId = "modal-" + guid()
    }
  }

  show() {
    this.display = true
    this.onShow.emit()
  }

  hide() {
    this.display = false
    this.onHide.emit()
  }

  confirm() {
    this.onConfirmAction.next()
  }

}
