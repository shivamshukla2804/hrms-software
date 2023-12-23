import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonTextEditorComponent } from './common-text-editor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';



@NgModule({
  declarations: [
    CommonTextEditorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    EditorModule

  ],
  exports:[CommonTextEditorComponent]
})
export class CommonTextEditorModule { }
