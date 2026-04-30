/* global React */
const { useState, useEffect, useRef, useCallback } = React;

const MIcon = ({ name, size = 24, style = {}, className = '', weight = 300 }) => (
  <span
    className={`material-symbols-outlined ${className}`}
    style={{
      fontSize: size,
      fontVariationSettings: `'wght' ${weight}, 'FILL' 0, 'GRAD' 0, 'opsz' 24`,
      ...style,
    }}
  >{name}</span>
);

const IconWhatsApp = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3.5 20.5l1.3-4.2a8.5 8.5 0 1 1 3.4 3.4l-4.7.8z"/>
    <path d="M8.5 9.2c.1-.6.4-.8.7-.8h.5c.2 0 .4.1.6.6l.7 1.8c.1.2.1.4 0 .6l-.3.5c-.1.1-.2.3 0 .6.2.3.7 1.2 1.6 2 1 .9 1.9 1.2 2.2 1.4.2.1.4.1.5 0l.6-.7c.1-.2.3-.2.5-.1.2.1 1.4.7 1.7.8.2.1.4.2.4.3.1.1.1.6-.1 1.2-.2.6-1.1 1.1-1.7 1.2-.4.1-1 .1-1.6-.1-.4-.1-.9-.2-1.5-.5-2.7-1.1-4.4-3.8-4.5-4-.1-.2-1.1-1.4-1.1-2.7 0-1.3.7-1.9.9-2.1.3-.2.5-.3.7-.3h.3z" fill="currentColor" stroke="none"/>
  </svg>
);

const IconTelegram = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9.5" />
    <path d="M7.8 12.4l8.3-3.4c.4-.2.8.1.7.5l-1.4 6.8c-.1.4-.5.6-.9.3l-2.3-1.7-1.1 1.1c-.2.2-.5.1-.5-.1l-.1-2.3 4.2-3.8c.2-.2 0-.3-.2-.2l-5.2 3.3-2.2-.7c-.4-.1-.4-.6 0-.8z" fill="currentColor" stroke="none"/>
  </svg>
);

const IconMax = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <circle cx="12" cy="12" r="9.5" />
    <path d="M8 15.5V8.5l4 4 4-4v7" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconArrow = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6"/>
  </svg>
);

const IconChevronDown = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9l6 6 6-6"/>
  </svg>
);

const IconChevronLeft = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 18l-6-6 6-6"/>
  </svg>
);

const IconChevronRight = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 6l6 6-6 6"/>
  </svg>
);

const IconClose = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 6l12 12M18 6L6 18"/>
  </svg>
);

const IconMenu = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 7h16M4 12h16M4 17h16"/>
  </svg>
);

Object.assign(window, {
  MIcon, IconWhatsApp, IconTelegram, IconMax,
  IconArrow, IconChevronDown, IconChevronLeft, IconChevronRight,
  IconClose, IconMenu,
});