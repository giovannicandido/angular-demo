import { EventEmitter, OnInit, Output, ViewChild } from "@angular/core";
import { PageFilterActionsComponent } from "../page-filter-actions/page-filter-actions.component";
import { AbstractControl, FormControl, NgForm } from "@angular/forms";

export class AbstractFormFilter implements OnInit {

  @Output()
  onSearch = new EventEmitter<any>()


  @ViewChild(PageFilterActionsComponent)
  pageFilterActions: PageFilterActionsComponent

  @ViewChild(NgForm)
  form: NgForm

  ngOnInit(): void {
    this.pageFilterActions.onClean.subscribe(() => {
      this.form.reset()
    })

    this.pageFilterActions.onFilter.subscribe(() => {
      if (this.form.valid) {
        this.onSearch.emit(this.form.value)
      } else {
        this.markAllDirty(this.form.control)
      }
    })
  }

  markAllDirty(control: AbstractControl) {
    if (control.hasOwnProperty('controls')) {
      control.markAsDirty({onlySelf: true}) // mark group
      let ctrl = <any>control;
      for (let inner in ctrl.controls) {
        this.markAllDirty(ctrl.controls[inner] as AbstractControl);
      }
    }
    else {
      (<FormControl>(control)).markAsDirty({onlySelf: true});
    }
  }


}
