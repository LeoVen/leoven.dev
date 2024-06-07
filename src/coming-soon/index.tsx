import AnchorButton from "../anchor-button";
import CodeBrackets from "../code-brackets";

export function ComingSoon() {

    return (
        <div className="tw-bg-ctp-crust tw-p-[2rem]">
            <h1 className="tw-text-6xl tw-text-ctp-lavender">Leonardo Vencovsky</h1>
            <h2 className="tw-text-4xl tw-text-ctp-lavender">Curriculum Vitae</h2>
            <CodeBrackets className="tw-max-w-2xl" title="Coming Soon">
                <p>Meanwhile check out other places here:</p>
                <br />
                <div className="tw-flex tw-items-center tw-justify-center tw-flex-wrap">
                    <AnchorButton href="https://github.com/LeoVen" target="_blank">
                        GitHub
                    </AnchorButton>
                    <AnchorButton href="https://www.linkedin.com/in/leonardo-vencovsky-911252149/" target="_blank">
                        LinkedIn
                    </AnchorButton>
                    <AnchorButton href="./assets/files/CV_Leonardo_Vencovsky.pdf" target="_blank">
                        CV in PDF
                    </AnchorButton>
                </div>
            </CodeBrackets>
        </div >
    )
}