import styled from "styled-components";
import { iconTypes } from "../icon/icon-types.ts";
import { Icon } from "../icon";

interface IButtonProps {
	view?: "primary" | "secondary";
	disabled?: boolean;
	iconBefore?: iconTypes;
	text?: string;
}

const StyledButton = styled.button<IButtonProps>`
	${(props) =>
		`
        display: inline-flex;
		justify-content: center;
		align-items: center;
		gap: ${props.theme.spacing.inner.connected};
		cursor: pointer;
		font-family: ${props.theme.typography.fontFamily.text};
		font-size: ${props.theme.typography.fontSize.text.base};
	    line-height: ${props.theme.typography.lineHeight.text.base};
		font-weight: ${props.theme.typography.fontWeight.medium};
		border: 1px solid ${props.theme.colors.transparent};
		border-radius: ${props.theme.borderRadius};
		padding: ${props.theme.spacing.padding.small} ${props.theme.spacing.padding.large};
		background: unset;
		transition: ${props.theme.animation.base};
    `}

    ${(props) =>
		props.view === "primary" &&
		`
        color: ${props.theme.colors.text.white};
        &:enabled {
            background: ${props.theme.colors.background.primary.enabled};
        }

         &:hover {
            background: ${props.theme.colors.background.primary.hover};
        }

         &:active {
            background: ${props.theme.colors.background.primary.active};
        }
    `}

	${(props) =>
		props.disabled && props.view === "primary" &&
		`
        &:disabled {
            cursor: not-allowed;
            background: ${props.theme.colors.background.primary.disabled};
            color: ${props.theme.colors.text.primary.disabled};
            border-color: ${props.theme.colors.background.primary.disabled};
        }
    `}

    ${(props) =>
		props.view === "secondary" &&
		`
        background: ${props.theme.colors.transparent};
		border-width: 2px;
        &:enabled {
            border-color: ${props.theme.colors.border.accent.enabled};
            color: ${props.theme.colors.text.accent.enabled};
        }

         &:hover {
            border-color: ${props.theme.colors.border.accent.hover};
            color: ${props.theme.colors.text.accent.hover};
        }

         &:active {
            border-color: ${props.theme.colors.border.accent.active};
            color: ${props.theme.colors.text.accent.active};
        }
    `}

	${(props) =>
		props.disabled && props.view === "secondary" &&
		`
	    &:disabled {
	        cursor: not-allowed;
	        background: ${props.theme.colors.transparent};
	        color: ${props.theme.colors.text.accent.disabled};
	        border-color: ${props.theme.colors.border.accent.disabled};
	    }
	`}
`

export const Button: React.FC<IButtonProps> = ({
	view = "primary",
	disabled,
	iconBefore,
	text = "Перейти к рецепту",
}) => {
	return (
		<StyledButton view={view} disabled={disabled}>
			{iconBefore ? (
				<Icon iconName={iconBefore} size={24}/>
			) : null}
			{text}
		</StyledButton>
	);
};