import { Content } from "ionic-angular";
import {
	Directive,
	ElementRef,
	Input,
	Renderer2,
	SimpleChanges
} from "@angular/core";

@Directive({
	selector: "[scroll-hide]",
	inputs: ["scrollContent"] // make sure you add this inputs array with the scrollContent value in order for the @Input to be recognized!
})
export class ScrollHideDirective {

	@Input("scrollContent") scrollContent: Content;

	private config = {
		cssProperty: "margin-top",
		maxValue: 56 // this is the height of your header, change it as you see if
	};

	private contentHeight: number;
	private scrollHeight: number;
	private lastScrollPosition: number;
	private lastValue: number = 0;

	constructor(private element: ElementRef, private renderer: Renderer2) {}

	ngOnChanges(changes: SimpleChanges) {
		if (this.scrollContent) {
			this.scrollContent.ionScrollStart.subscribe(ev => {
				this.contentHeight = this.scrollContent.getScrollElement().offsetHeight;
				this.scrollHeight = this.scrollContent.getScrollElement().scrollHeight;
				this.lastScrollPosition = ev.scrollTop;
			});
			this.scrollContent.ionScroll.subscribe(ev =>
				this.adjustElementOnScroll(ev)
			);
			this.scrollContent.ionScrollEnd.subscribe(ev =>
				this.adjustElementOnScroll(ev)
			);
		}
	}

	private adjustElementOnScroll(ev) {
		if (ev) {
			ev.domWrite(() => {
				let scrollTop: number = ev.scrollTop > 0 ? ev.scrollTop : 0;
				let scrolldiff: number = scrollTop - this.lastScrollPosition;
				this.lastScrollPosition = scrollTop;
				let newValue = this.lastValue + scrolldiff;
				newValue = Math.max(0, Math.min(newValue, this.config.maxValue));
				this.renderer.setStyle(
					this.element.nativeElement,
					this.config.cssProperty,
					`-${newValue}px`
				);
				this.lastValue = newValue;
			});
		}
	}
}
