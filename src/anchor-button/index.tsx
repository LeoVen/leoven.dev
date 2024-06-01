import { HTMLAttributeAnchorTarget } from "react";

export interface AnchorButtonProps {
    children: React.ReactNode,
    href?: string,
    target?: HTMLAttributeAnchorTarget,
}

export function AnchorButton(props: AnchorButtonProps) {

    return (
        <a href={props.href}
            target={props.target}
            className="tw-bg-ctp-surface0 tw-rounded tw-px-[1rem] tw-py-[0.6rem] tw-m-2 hover:tw-bg-ctp-surface1">
            {props.children}
        </a>
    )
}

export default AnchorButton;
