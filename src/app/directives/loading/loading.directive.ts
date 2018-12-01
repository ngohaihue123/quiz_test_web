import { Component, Directive, TemplateRef, ComponentFactory, ComponentRef, ViewContainerRef, ComponentFactoryResolver, Input } from '@angular/core';

import { WaitingComponent } from './loading.component';

@Directive({
    selector: '[waiting]'
})

export class WaitingDirective {
    loadingFactory: ComponentFactory<WaitingComponent>;
    loadingComponent: ComponentRef<WaitingComponent>;

    @Input()
    set waiting(loading: boolean) {
        this.vcRef.clear();
        if (loading) {
            // create and embed an instance of the loading component
            this.loadingComponent = this.vcRef.createComponent(this.loadingFactory);
        }
        else {
            // embed the contents of the host template
            this.vcRef.createEmbeddedView(this.templateRef);
        }
    }

    constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver) {
        // Create resolver for loading component
        this.loadingFactory = this.componentFactoryResolver.resolveComponentFactory(WaitingComponent);
    }
}