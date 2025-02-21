/**
 * Renders a paragraph with line breaks for each newline character in the input string.
 *
 * @param {string} str - The input string to be displayed with line breaks.
 * @param {string} [className] - Optional CSS class for styling the container.
 * @returns {JSX.Element} A React component displaying the string with line breaks.
 */
export const ParagraphWithBreakLine: React.FC<{ str: string; className?: string }> = ({str, className}) => {
    return (
        <div className={className}> {/* Container div with optional className */}
            {
                str.split('\n').map((line, i) => (
                    <p key={i} className='break-words'> {/* Paragraph with word break */}
                        {line}
                        <br/> {/* Line break element */}
                    </p>
                ))
            }
        </div>
    );
};
