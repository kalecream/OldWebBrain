import { CreateGlobalStyle } from "styled-components";

export const lightTheme = {
	primary: "#f5f5f5",
	body: "#fff",
	text: "#363537",
	toggleBorder: "#FFF",
	background: "#363537",
};

export const darkTheme = {
	primary: "#363537",
	body: "#363537",
	text: "#FAFAFA",
	toggleBorder: "#6B8096",
	background: "#999",
};

export const GlobalStyles = CreateGlobalStyle`
    body {
        background-color: ${(props) => props.theme.body};
        color: ${(props) => props.theme.text};
        transition: all 0.50s linear;
    }

    .toggle-container {
        background-color: ${(props) => props.theme.background};
        border-color: ${(props) => props.theme.toggleBorder};
        transition: all 0.50s linear;
    }

    .toggle-container:hover {
        background-color: ${(props) => props.theme.background};
        border-color: ${(props) => props.theme.toggleBorder};
        transition: all 0.50s linear;
    }
`;
