export interface ThemePickerProps {
    changeTheme: (newTheme: string) => void
}

function ThemePicker(props: ThemePickerProps) {

    return (
        <div className="tw-absolute tw-left-[50%] tw-translate-x-[-50%] tw-bottom-2">
            <ul className="tw-flex tw-justify-center tw-space-x-2 tw-p-2 tw-text-[1.5rem]">
                <li>❯</li>
                <li className="ctp-latte tw-text-ctp-crust tw-cursor-pointer" onClick={() => props.changeTheme("ctp-latte")}>◉</li>
                <li className="ctp-mocha tw-text-ctp-crust tw-cursor-pointer" onClick={() => props.changeTheme("ctp-mocha")}>◉</li>
                <li>❮</li>
            </ul>
        </div>
    )
}

export default ThemePicker;
