import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "What Obligations do organisations have under the Australian Privacy Act?",
        value: "What Obligations do organisations have under the Australian Privacy Act?"
    },
    { text: "What information does Bupa collect?", value: "What information does Bupa Collect?" },
    { text: "Can Bupa use my email address to market to me?", value: "Can Bupa use my email address to market to me?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
