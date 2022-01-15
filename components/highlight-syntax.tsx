import Highlight, { defaultProps, Language } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import { useState } from "react";
import styled from "styled-components";
import { useDimension } from "./useDimension";

const Pre = styled.pre`
  margin: 1em 0;
`;

const Line = styled.div`
  display: table-row;
`;

const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;

const LineContent = styled.span`
  display: table-cell;
`;

interface HightlightProps {
  code: string
  lineNumber?: boolean
  language?: Language
  showCopy?: boolean
}

const HighlightCode: React.FC<HightlightProps> = (props) => {
  const { code, lineNumber = false, language = "jsx", showCopy } = props
  const [isCopy, setIsCopy] = useState<boolean>(false)
  const [width] = useDimension()

  return <div>
    <Highlight {...defaultProps} theme={theme} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className + ' px-6 py-4 overflow-auto relative rounded text-left'} style={style}>
          {showCopy && width > 575 && (
            <button className="absolute right-4 top-4" onClick={() => {
              setIsCopy(!isCopy)
              navigator.clipboard.writeText(code)
            }}>
              {isCopy ? (
                <span className="text-teal-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
              ) : (
                <span className="text-gray-300 hover:text-gray-100 duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                    <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                  </svg>
                </span>
              )}
            </button>
          )}
          {tokens.map((line, i) => (
            <Line key={i} {...getLineProps({ line, key: i })}>
              {lineNumber && <LineNo>{i + 1}</LineNo>}
              <LineContent>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </LineContent>
            </Line>
          ))}
        </Pre>
      )}
    </Highlight>
  </div>
}

export default HighlightCode