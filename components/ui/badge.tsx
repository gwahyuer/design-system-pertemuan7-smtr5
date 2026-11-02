"use client";
import styled, { css } from "styled-components";
type Props={variant?:"default"|"success"|"warning"|"danger";children:React.ReactNode};
const StyledBadge=styled.span<{ $variant:string }>`
  display:inline-flex;align-items:center;padding:5px 10px;border-radius:${({theme})=>theme.radius.pill};
  font-size:11px;font-weight:750;white-space:nowrap;
  ${({$variant,theme})=>$variant==="success"?css`color:${theme.colors.success};background:${theme.colors.success}18;`:
  $variant==="warning"?css`color:${theme.colors.warning};background:${theme.colors.warning}20;`:
  $variant==="danger"?css`color:${theme.colors.danger};background:${theme.colors.danger}18;`:
  css`color:${theme.colors.muted};background:${theme.colors.secondary};`}
`;
export function Badge({variant="default",children}:Props){return <StyledBadge $variant={variant}>{children}</StyledBadge>;}