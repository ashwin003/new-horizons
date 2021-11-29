import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { I18nModule } from '@app/i18n';
import { MaterialModule } from '@app/material.module';
import { ShellComponent } from './shell.component';
import { HeaderComponent } from './header/header.component';

import { SettingsModalComponent } from './settings-modal/settings-modal.component';
import { HemisphereSelectorComponent } from './hemisphere-selector/hemisphere-selector.component';

@NgModule({
  imports: [CommonModule, TranslateModule, FlexLayoutModule, MaterialModule, I18nModule, RouterModule],
  declarations: [HeaderComponent, SettingsModalComponent, ShellComponent, HemisphereSelectorComponent],
})
export class ShellModule {}
