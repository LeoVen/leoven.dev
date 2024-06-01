export interface ThemePickerProps {
    changeTheme: (newTheme: string) => void
}

function ThemePicker(props: ThemePickerProps) {

    return (
        <div className="tw-absolute tw-right-5 tw-top-5">
            <ul>
                <li className="tw-text-ctp-flamingo tw-cursor-pointer" onClick={() => props.changeTheme("ctp-latte")}>▶ Latte</li>
                <li className="tw-text-ctp-flamingo tw-cursor-pointer" onClick={() => props.changeTheme("ctp-frappe")}>▶ Frappé</li>
                <li className="tw-text-ctp-flamingo tw-cursor-pointer" onClick={() => props.changeTheme("ctp-macchiato")}>▶ Macchiato</li>
                <li className="tw-text-ctp-flamingo tw-cursor-pointer" onClick={() => props.changeTheme("ctp-mocha")}>▶ Mocha</li>
            </ul>
        </div>
    )
}

export default ThemePicker;
