/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ComponenttToast {
    }
    interface ComponenttToastItem {
        "autoRemove": boolean;
        "cooldown": number;
        "hasDescription": boolean;
        "icon": string;
        "progress": boolean;
        "toastTitle": string;
        "type": string;
        "viewLessButtonText": string;
        "viewMoreButtonText": string;
    }
}
declare global {
    interface HTMLComponenttToastElement extends Components.ComponenttToast, HTMLStencilElement {
    }
    var HTMLComponenttToastElement: {
        prototype: HTMLComponenttToastElement;
        new (): HTMLComponenttToastElement;
    };
    interface HTMLComponenttToastItemElement extends Components.ComponenttToastItem, HTMLStencilElement {
    }
    var HTMLComponenttToastItemElement: {
        prototype: HTMLComponenttToastItemElement;
        new (): HTMLComponenttToastItemElement;
    };
    interface HTMLElementTagNameMap {
        "componentt-toast": HTMLComponenttToastElement;
        "componentt-toast-item": HTMLComponenttToastItemElement;
    }
}
declare namespace LocalJSX {
    interface ComponenttToast {
    }
    interface ComponenttToastItem {
        "autoRemove"?: boolean;
        "cooldown"?: number;
        "hasDescription"?: boolean;
        "icon"?: string;
        "progress"?: boolean;
        "toastTitle"?: string;
        "type"?: string;
        "viewLessButtonText"?: string;
        "viewMoreButtonText"?: string;
    }
    interface IntrinsicElements {
        "componentt-toast": ComponenttToast;
        "componentt-toast-item": ComponenttToastItem;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "componentt-toast": LocalJSX.ComponenttToast & JSXBase.HTMLAttributes<HTMLComponenttToastElement>;
            "componentt-toast-item": LocalJSX.ComponenttToastItem & JSXBase.HTMLAttributes<HTMLComponenttToastItemElement>;
        }
    }
}
