import React from "react";
import { transformVar } from "@quarkly/atomize";
import { createGlobalStyle } from "styled-components";

const pageStyles = {
    "404": {
        "background": "--color-darkL2"
    },
    "index": {},
    "stage-2-elementary": {},
    "stage-3-components": {},
    "stage-4-theme": {},
    "stage-5-code-editor": {},
    "stage-1-basics": {},
    "parrent-page": {},
    "children-page": {}
};

const PageStyles = createGlobalStyle`
    body {
        ${({ styles }) =>
            Object.entries(styles || {}).map(
                ([prop, value]) => `${prop}: ${transformVar(prop, value)};`
            )}
    }
`;
export const GlobalQuarklyPageStyles = ({ pageUrl }) => <PageStyles styles={pageStyles[pageUrl]} />
