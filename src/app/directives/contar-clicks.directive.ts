import {Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
	selector: 'li[contar-clicks]'
})

export class ContarClicksDirective{
	clickN= 0;

	// hostBinding permite manipular componente html del dom
	
	@HostBinding('style.opacity') opacity: number= .1;

	// host listener escucha eventos en el dom
	@HostListener('click', ['$event.target']) onClick(btn){
		console.log("a", btn, "Número de clicks", this.clickN++);
		this.opacity += 1;
	}
}