"use client";
import styled, { css } from "styled-components";

type Props = {variant?:"primary"|"secondary"|"outline";size?:"sm"|"md";children:React.ReactNode;onClick?:()=>void};
const StyledButton = styled.button<{ $variant:string;$size:string }>`
  border:1px solid transparent;border-radius:${({theme})=>theme.radius.md};font-weight:700;cursor:pointer;
  transition:all .18s ease;display:inline-flex;align-items:center;justify-content:center;gap:8px;
  ${({$size})=>$size==="sm"?css`padding:8px 12px;font-size:12px;`:css`padding:11px 16px;font-size:14px;`}
  ${({$variant,theme})=>$variant==="primary"?css`background:${theme.colors.primary};color:#fff;&:hover{background:${theme.colors.primaryHover};}`:
    $variant==="secondary"?css`background:${theme.colors.secondary};color:${theme.colors.text};border-color:${theme.colors.border};`:
    css`background:transparent;color:${theme.colors.primary};border-color:${theme.colors.primary};&:hover{background:${theme.colors.secondary};}`}
  &:focus-visible{outline:3px solid ${({theme})=>theme.colors.primary}55;outline-offset:2px;}
`;
export function Button({variant="primary",size="md",children,onClick}:Props){return <StyledButton type="button" $variant={variant} $size={size} onClick={onClick}>{children}</StyledButton>;}