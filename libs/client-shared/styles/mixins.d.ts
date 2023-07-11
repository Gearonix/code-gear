export declare const wh: (w?: string, h?: string) => import("styled-components").FlattenSimpleInterpolation;
export declare const testBorder: import("styled-components").FlattenSimpleInterpolation;
export declare const hPadding: (size: number) => import("styled-components").FlattenSimpleInterpolation;
export declare const flex: (jc?: string, ai?: string, dir?: string) => import("styled-components").FlattenSimpleInterpolation;
export declare const hover: (color: string) => import("styled-components").FlattenSimpleInterpolation;
type Font = 'Poppins' | 'Consolas';
export declare const font: (font: Font) => import("styled-components").FlattenSimpleInterpolation;
export declare const antdColor: (color: string) => ({ theme }: any) => string;
export declare const customScrollbar: (elem?: string) => import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
export declare const color: (color: string) => import("styled-components").FlattenInterpolation<import("styled-components").ThemeProps<any>>;
type AbsoluteProps = Partial<{
    left: string;
    top: string;
    right: string;
    bottom: string;
}>;
export declare const absolute: (props: AbsoluteProps) => import("styled-components").FlattenSimpleInterpolation;
export declare const margin: (left: number, top: number) => import("styled-components").FlattenSimpleInterpolation;
export {};
