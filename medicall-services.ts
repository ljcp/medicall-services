import { NgModule,ModuleWithProviders } from '@angular/core'

export * from './lib/services'

@NgModule({
    declarations:[]
})

export class MedicallServicesModule {
    static forRoot(): ModuleWithProviders {
        return {ngModule: MedicallServicesModule,providers: [LoginService] };
    }
}