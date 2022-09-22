declare module "*.module.css" {
    interface IClassName {
        [className: string] : string
    }
    const className: IClassName
    export = className
}declare module "*.module.scss" {
    interface IClassName {
        [className: string] : string
    }
    const className: IClassName
    export = className
}
declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}

declare module '*.png';
declare module '*.jpg';

declare const __IS_DEV__: boolean;