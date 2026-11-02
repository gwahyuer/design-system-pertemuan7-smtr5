"use client";
import styled from "styled-components";
export const Card = styled.article<{padding?:"md"|"lg"}>`
  background:${({theme})=>theme.colors.surface};color:${({theme})=>theme.colors.text};
  border:1px solid ${({theme})=>theme.colors.border};border-radius:${({theme})=>theme.radius.lg};
  padding:${p=>p.padding==="md"?"18px":"24px"};box-shadow:0 8px 24px #0f172a0a;
  transition:background .2s,border-color .2s;
`;