import { NgModule } from '@angular/core';
import { TestLibraryComponent } from './test-library.component';
import { TestExportComponent } from './test-export/test-export.component';



@NgModule({
  declarations: [TestLibraryComponent, TestExportComponent],
  imports: [
  ],
  exports: [TestLibraryComponent, TestExportComponent]
})
export class TestLibraryModule { }
