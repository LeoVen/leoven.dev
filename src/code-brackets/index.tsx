import './index.css'

export interface CodeBracketProps {
  children: React.ReactNode,
  className?: string,
  title?: string,
  margin?: number,
  maxChars?: number,
}

const T_L = '┌';
const T_R = '┐';
const B_L = '└';
const B_R = '┘';
const D = '─';

export function CodeBrackets(props: CodeBracketProps) {
  let maxWidth = props.maxChars ?? 200;
  let floor = D.repeat(maxWidth);
  let roof_arr = [...D.repeat(maxWidth)];

  let margin = props.margin ?? 4;

  if (props.title) {
    let len = props.title.length + margin;

    roof_arr[margin - 1] = " ";
    for (let i = margin; i < props.title.length + margin; i++) {
      roof_arr[i] = props.title[i - margin];
    }
    roof_arr[len] = " ";
  }

  let roof = roof_arr.join('');

  return (
    <div className={props.className + " "}>
      <div className='code-brackets-row tw-text-ctp-lavender tw-mb-4'>
        <div> {T_L} </div>
        <div className="tw-overflow-hidden"> {roof} </div>
        <div> {T_R} </div>
      </div>

      <div>
        {props.children}
      </div>

      <div className="code-brackets-row tw-text-ctp-lavender tw-mt-4">
        <div> {B_L} </div>
        <div className="tw-overflow-hidden"> {floor} </div>
        <div> {B_R} </div>
      </div>
    </div>
  );
}

export default CodeBrackets;

