import { ReactNode } from 'react';

import { IconNames, IIcon } from './types';

const iconList: Record<
  IconNames,
  ({ color, size, strokeWidth }: Omit<IIcon, 'name'>) => ReactNode
> = {
  map: ({ color, size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={color}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
      />
    </svg>
  ),
  'map-pin': ({ color, size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={color}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
      />
    </svg>
  ),
  calendar: ({ color, size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={color}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
      />
    </svg>
  ),
  'calendar-days': ({ color, size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={color}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
      />
    </svg>
  ),
  heart: ({ color, size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={color}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
      />
    </svg>
  ),
  'heart-filled': ({ color, size }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={color}
    >
      <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
    </svg>
  ),
  camera: ({ color, size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={color}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
      />
    </svg>
  ),
  'video-camera': ({ color, size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={color}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
      />
    </svg>
  ),
  'credit-card': ({ color, size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={color}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
      />
    </svg>
  ),
  banknotes: ({ color, size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={color}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
      />
    </svg>
  ),
  search: ({ color, size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={color}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </svg>
  ),
  home: ({ color, size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={color}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
      />
    </svg>
  ),
  'building-office': ({ color, size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={color}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
      />
    </svg>
  ),
  document: ({ color, size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={color}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
      />
    </svg>
  ),
  'document-text': ({ color, size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={color}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
      />
    </svg>
  ),
  'document-check': ({ color, size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={color}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12"
      />
    </svg>
  ),
  'document-chart-bar': ({ color, size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={color}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
      />
    </svg>
  ),
  bank: ({ color, size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={color}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
      />
    </svg>
  ),
  user: ({ color, size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={color}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
      />
    </svg>
  ),
  check: ({ color, size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={color}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 12.75 6 6 9-13.5"
      />
    </svg>
  ),
  'check-badge': ({ color, size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={color}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
      />
    </svg>
  ),
  'check-circle': ({ color, size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={color}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  ),
  phone: ({ color, size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={color}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
      />
    </svg>
  ),
  whatsapp: ({ color, size }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path
        fill={color}
        d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
      />
    </svg>
  ),
  droplet: ({ color, size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
    </svg>
  ),
  bolt: ({ color, size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={color}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
      />
    </svg>
  ),
  'light-bulb': ({ color, size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={color}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
      />
    </svg>
  ),
  sewage: ({ color, size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      stroke={color}
      strokeWidth={strokeWidth}
    >
      <path
        fill={color}
        d="M483.39,194H394.68V69.64h88.71a6.06,6.06,0,1,0,0-12.11H394.68V45.26a6.06,6.06,0,0,0-6.06-6.06H333A6.06,6.06,0,0,0,327,45.26V96.94H278.72c-102.29,0-185.51,83.23-185.51,185.53v68.07a6.06,6.06,0,1,0,12.12,0V282.47c0-95.62,77.79-173.41,173.39-173.41H327v32.18h-42.6A119.28,119.28,0,0,0,165.23,260.39v90.15a6.06,6.06,0,1,0,12.12,0V260.39a107.14,107.14,0,0,1,107-107H327v28.37c-.09,0-.16,0-.25,0H305.86a72.48,72.48,0,0,0-72.4,72.4v96.46a6.06,6.06,0,1,0,12.12,0V254.08a60.35,60.35,0,0,1,60.28-60.29h20.86a2.21,2.21,0,0,0,.25,0v24.63a6.06,6.06,0,0,0,6.06,6.06h55.59a6.06,6.06,0,0,0,6.06-6.06V206.12h88.71a6.06,6.06,0,0,0,0-12.12ZM382.56,212.32H339.08v-161h43.48v161Z"
      />
      <path
        fill={color}
        d="M397.76,434.55l-10.35,7.8c-32.25,24.28-88.79,24.29-121,0l-10.44-7.86a6,6,0,0,0-6.34-.55,5.55,5.55,0,0,0-1.35.92l-10,7.5c-32.25,24.28-88.79,24.29-121,0l-10.44-7.86a6.06,6.06,0,1,0-7.29,9.68L110,452c36.74,27.69,98.83,27.71,135.61,0l6.75-5.08,6.75,5.08c18.38,13.85,43.09,20.78,67.81,20.78s49.43-6.93,67.81-20.78l10.57-8a6,6,0,0,0,1-8.41A6.11,6.11,0,0,0,397.76,434.55Z"
      />
      <path
        fill={color}
        d="M472.39,369.52,462,377.32c-32.23,24.27-88.77,24.29-121,0l-10.45-7.86a6.2,6.2,0,0,0-7.36.07l-10.35,7.8c-32.25,24.28-88.82,24.29-121,0l-10.44-7.86a6,6,0,0,0-6.34-.54,5.28,5.28,0,0,0-1.34.91l-10,7.5c-32.25,24.28-88.79,24.29-121,0l-10.45-7.86A6.06,6.06,0,1,0,25,379.14L35.41,387c36.76,27.7,98.85,27.69,135.61,0l6.75-5.09,6.75,5.08c36.75,27.69,98.84,27.7,135.62,0l6.78-5.12,6.8,5.11c18.38,13.85,43.1,20.78,67.81,20.78S451,400.84,469.33,387l10.35-7.8a6.06,6.06,0,1,0-7.29-9.68Z"
      />
    </svg>
  ),
  wifi: ({ color, size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={color}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 0 1 1.06 0Z"
      />
    </svg>
  ),
  'gas-station': ({ color, size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill={color}
      stroke={color}
      strokeWidth={strokeWidth}
    >
      <path d="M274.87,98.67H146.71a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H274.87a8,8,0,0,0,8-8V106.67A8,8,0,0,0,274.87,98.67Zm-8,85.32H154.71V114.67H266.87Zm-56.08,56.64a8,8,0,0,0-5.66,2.35c-3.69,3.7-36,36.9-36,63,0,27.95,18.71,50.68,41.71,50.68S252.51,334,252.51,306c0-26.12-32.36-59.32-36-63A8,8,0,0,0,210.79,240.63Zm0,100.05c-14.17,0-25.71-15.56-25.71-34.68,0-13.67,15.41-34,25.7-45.63,10.12,11.48,25.73,32.07,25.73,45.63C236.51,325.12,225,340.68,210.79,340.68ZM436.05,225.13l-47.72-79.9a8,8,0,0,0-13.74,8.2l29.53,49.45a36,36,0,0,0,17,67.79h.13V325.4a29.28,29.28,0,0,1-58.55,0V229.27a45.42,45.42,0,0,0-37.28-44.56V84a28,28,0,0,0-28-28H124.22a28,28,0,0,0-28,28v313.3H92.79a18,18,0,0,0-18,18V438a18,18,0,0,0,18,18h236a18,18,0,0,0,18-18V415.32a18,18,0,0,0-18-18h-3.42V201.11a29.46,29.46,0,0,1,21.28,28.16V325.4a45.28,45.28,0,0,0,90.55,0V229.27A8,8,0,0,0,436.05,225.13ZM330.8,415.32V438a2,2,0,0,1-2,2h-236a2,2,0,0,1-2-2V415.32a2,2,0,0,1,2-2h236A2,2,0,0,1,330.8,415.32Zm-218.58-18V84a12,12,0,0,1,12-12H297.38a12,12,0,0,1,12,12v313.3Zm309-142.65a20,20,0,0,1-8.87-38l8.87,14.84Z" />
    </svg>
  ),
  'gas-cylinder': ({ color, size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill={color}
      stroke={color}
      strokeWidth={strokeWidth}
    >
      <g>
        <path d="M216,61h10v30c0,5.522,4.477,10,10,10s10-4.478,10-10V61h20v30c0,5.522,4.478,10,10,10 s10-4.478,10-10V61h10c5.522,0,10-4.478,10-10s-4.478-10-10-10c-23.456,0-55.045,0-80,0c-5.523,0-10,4.478-10,10 S210.477,61,216,61z" />
        <path d="M320.546,296.454c0-32.803-51.049-94.892-56.87-101.863c-3.991-4.782-11.354-4.788-15.352,0 c-5.821,6.972-56.87,69.061-56.87,101.863C191.454,332.243,220.652,361,256,361C291.363,361,320.546,332.226,320.546,296.454z  M241.454,326.454c0-4.419,6.719-15.879,14.546-26.655c7.827,10.776,14.546,22.237,14.546,26.655 c0,8.021-6.525,14.546-14.546,14.546C247.98,341,241.454,334.475,241.454,326.454z M290.456,324.652 c-1.412-16.023-20.708-40.29-26.78-47.562c-3.991-4.781-11.354-4.788-15.352,0c-6.072,7.272-25.368,31.539-26.78,47.562 c-6.301-7.686-10.09-17.507-10.09-28.198c0-16.976,24.83-54.329,44.548-79.532c19.716,25.192,44.544,62.537,44.544,79.532 C300.546,307.145,296.757,316.966,290.456,324.652z" />
        <path d="M366,81h-20V21h15c5.522,0,10-4.478,10-10s-4.478-10-10-10c-16.961,0-203.385,0-210,0 c-5.523,0-10,4.477-10,10s4.477,10,10,10h15v60h-20c-22.056,0-40,17.944-40,40v310c0,22.056,17.944,40,40,40h2.193l1.253,5.009 C154.595,496.611,173.022,511,194.259,511H317.74c21.237,0,39.665-14.389,44.814-34.99l1.253-5.01H366c22.056,0,40-17.944,40-40 V121C406,98.944,388.056,81,366,81z M126,151h260v250H126V151z M186,21h140v60H186V21z M146,101c8.969,0,208.928,0,220,0 c11.028,0,20,8.972,20,20v10H126v-10C126,109.972,134.972,101,146,101z M343.152,471.159C340.232,482.841,329.782,491,317.74,491 H194.259c-12.042,0-22.491-8.159-25.411-19.842L168.809,471h174.383L343.152,471.159z M366,451c-15.492,0-210.281,0-220,0 c-11.028,0-20-8.972-20-20v-10h260v10C386,442.028,377.028,451,366,451z" />
      </g>
    </svg>
  ),
  wall: ({ color, size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
    >
      <line
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        x1="128"
        x2="128"
        y1="104"
        y2="56"
      />
      <line
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        x1="80"
        x2="80"
        y1="152"
        y2="104"
      />
      <line
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        x1="176"
        x2="176"
        y1="152"
        y2="104"
      />
      <line
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        x1="128"
        x2="128"
        y1="200"
        y2="152"
      />
      <line
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        x1="32"
        x2="224"
        y1="104"
        y2="104"
      />
      <line
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        x1="32"
        x2="224"
        y1="152"
        y2="152"
      />
      <rect
        height="144"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        width="192"
        x="32"
        y="56"
      />
    </svg>
  ),
  tractor: ({ color, size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 58 58"
      stroke={color}
      strokeWidth={strokeWidth}
    >
      <g>
        <path
          d="M39,38c2.204,0,3.999,1.795,3.999,4S41.204,46,39,46c-2.205,0-4.001-1.795-4.001-4S36.795,38,39,38 M34.707,36.473   C33.061,37.754,32,39.754,32,42c0,3.863,3.137,7,7,7s7-3.137,7-7c0-2.344-1.154-4.419-2.924-5.689"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth={strokeWidth}
        />
      </g>
      <g>
        <path
          d="M12,33.5c2.482,0,4.5,2.019,4.5,4.5c0,2.48-2.018,4.5-4.5,4.5S7.5,40.48,7.5,38C7.5,35.519,9.518,33.5,12,33.5 M12,27   C5.928,27,1,31.927,1,38c0,6.072,4.928,11,11,11s11-4.928,11-11C23,31.927,18.072,27,12,27L12,27z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth={strokeWidth}
        />
      </g>
      <path
        d="M23,38c0,6.072-4.928,11-11,11S1,44.072,1,38c0-6.073,4.928-11,11-11S23,31.927,23,38z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth={strokeWidth}
      />
      <path
        d="M2.531,26.098c2.638-2.219,6.044-3.558,9.757-3.558c8.376,0,15.171,6.797,15.171,15.172"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth={strokeWidth}
      />
      <path
        d="M27.781,36h15.192c1.087,0,2.653-1.123,3.052-2.219l2.895-7.938C49.321,24.746,48.136,24,47.049,24H28.027L23.669,7.985  C23.443,6.921,22.79,6,21.703,6H5.966C4.881,6,4,6.888,4,7.985v16.669 M22.919,19H8.005v-9h12.46L22.919,19z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth={strokeWidth}
      />
      <path
        d="M35,24c0,0,0-5.231,0-7.174C35,11.833,38.671,11,41,11v2c0,0-2-0.149-2,4c0,1.942,0,7,0,7"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth={strokeWidth}
      />
    </svg>
  ),
  broom: ({ color, size }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth={0.5}
      stroke={color}
      viewBox="-4 0 72 64"
    >
      <g>
        <path
          fill={color}
          d="M51.9,1.1c-0.5-0.3-1.1-0.2-1.4,0.3L32.5,28.3l-1.5-1c-0.5-0.3-1.1-0.2-1.4,0.3l-2.5,3.8l-1.5-1c-0.4-0.3-0.9-0.2-1.2,0.1   l-17,15.4C7.1,46,7,46.3,7,46.6c0,0.3,0.2,0.6,0.4,0.8l23.1,15.5c0.2,0.1,0.4,0.2,0.6,0.2c0.1,0,0.2,0,0.3,0   c0.3-0.1,0.5-0.3,0.6-0.6l7.8-21.6c0.2-0.4,0-0.9-0.4-1.2l-1.5-1l2.5-3.8c0.3-0.5,0.2-1.1-0.3-1.4l-1.5-1L56.8,5.6   C57,5.4,57,5.1,57,4.9c-0.1-0.3-0.2-0.5-0.4-0.6L51.9,1.1z M30.6,60.5l-2.8-1.9c0.1-0.1,0.2-0.2,0.3-0.3l1.6-2.3   c0.3-0.5,0.2-1.1-0.3-1.4c-0.5-0.3-1.1-0.2-1.4,0.3l-1.6,2.3c-0.1,0.1-0.1,0.2-0.2,0.4l-3.1-2.1c0.1-0.1,0.2-0.2,0.3-0.3l1.6-2.3   c0.3-0.5,0.2-1.1-0.3-1.4c-0.5-0.3-1.1-0.2-1.4,0.3l-1.6,2.3c-0.1,0.1-0.1,0.2-0.2,0.4l-3.1-2.1c0.1-0.1,0.2-0.2,0.3-0.3l1.5-2.3   c0.3-0.5,0.2-1.1-0.3-1.4c-0.5-0.3-1.1-0.2-1.4,0.3L17.2,51c-0.1,0.1-0.1,0.2-0.2,0.4l-3.1-2.1c0.1-0.1,0.2-0.2,0.3-0.3l1.6-2.3   c0.3-0.5,0.2-1.1-0.3-1.4c-0.5-0.3-1.1-0.2-1.4,0.3l-1.6,2.3c-0.1,0.1-0.1,0.2-0.1,0.4l-2.8-1.9l15.5-14l1.6,1.1c0,0,0,0,0,0   l9.2,6.2c0,0,0,0,0,0l1.6,1.1L30.6,60.5z M36.3,37.5l-7.6-5.1l2-3l1.5,1c0,0,0,0,0,0l4.6,3.1c0,0,0,0,0,0l1.5,1L36.3,37.5z    M34.1,29.4L47.8,9l2.9,2L37.1,31.4L34.1,29.4z M51.9,9.4l-2.9-2l2.7-4l3,2L51.9,9.4z"
        />
      </g>
    </svg>
  ),
  dish: ({ color, size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth={strokeWidth}
      stroke={color}
      fill={color}
      viewBox="0 0 512 512"
    >
      <path d="M495.582,465.117c-0.004,0-0.012,0-0.02,0H20.306c-2.485,0-4.5-2.015-4.5-4.5c0-133.316,108.77-241.777,242.466-241.777c64.229,0,124.829,25.175,170.636,70.888c45.781,45.688,71.04,106.212,71.154,170.458c0.013,0.142,0.02,0.285,0.02,0.431C500.082,463.103,498.067,465.117,495.582,465.117z M24.849,456.117h466.17C488.611,329.833,385.129,227.84,258.272,227.84C131.047,227.84,27.264,329.833,24.849,456.117z" />
      <path d="M496.239,499.709H16.242c-2.485,0-4.5-2.015-4.5-4.5s2.015-4.5,4.5-4.5h479.997c2.485,0,4.5,2.015,4.5,4.5S498.725,499.709,496.239,499.709z" />
      <path d="M404.722,353.942c-1.519,0-3.001-0.77-3.849-2.162c-30.727-50.517-86.406-81.898-145.31-81.898c-2.485,0-4.5-2.015-4.5-4.5s2.015-4.5,4.5-4.5c31.194,0,61.978,8.235,89.025,23.816c26.202,15.095,48.324,36.674,63.975,62.404c1.291,2.124,0.617,4.892-1.506,6.184C406.326,353.73,405.519,353.942,404.722,353.942z" />
      <path d="M252.854,227.84c-25.718,0-45.864-20.443-45.864-46.542c0-25.705,20.146-45.84,45.864-45.84c25.656,0,46.529,20.563,46.529,45.84c0,12.614-4.867,24.375-13.705,33.119C276.93,223.073,265.272,227.84,252.854,227.84z M252.854,144.459c-20.671,0-36.864,16.182-36.864,36.84c0,21.051,16.192,37.542,36.864,37.542c21.045,0,37.529-16.49,37.529-37.542C290.384,160.985,273.548,144.459,252.854,144.459z" />
      <path d="M95.561,371.575H75.906c-2.485,0-4.5-2.015-4.5-4.5s2.015-4.5,4.5-4.5h19.655c2.485,0,4.5,2.015,4.5,4.5S98.046,371.575,95.561,371.575z" />
      <path d="M107.765,411.563H88.109c-2.485,0-4.5-2.015-4.5-4.5s2.015-4.5,4.5-4.5h19.656c2.485,0,4.5,2.015,4.5,4.5S110.25,411.563,107.765,411.563z" />
      <path d="M152.516,380.382h-18.989c-2.485,0-4.5-2.015-4.5-4.5s2.015-4.5,4.5-4.5h18.989c2.485,0,4.5,2.015,4.5,4.5S155.001,380.382,152.516,380.382z" />
      <path d="M176.246,423.777h-18.989c-2.485,0-4.5-2.015-4.5-4.5s2.015-4.5,4.5-4.5h18.989c2.485,0,4.5,2.015,4.5,4.5S178.731,423.777,176.246,423.777z" />
      <path d="M136.235,343.757h-18.977c-2.485,0-4.5-2.015-4.5-4.5s2.015-4.5,4.5-4.5h18.977c2.485,0,4.5,2.015,4.5,4.5S138.721,343.757,136.235,343.757z" />
      <path d="M190.481,329.535h-19.667c-2.485,0-4.5-2.015-4.5-4.5s2.015-4.5,4.5-4.5h19.667c2.485,0,4.5,2.015,4.5,4.5S192.967,329.535,190.481,329.535z" />
      <path d="M210.135,371.575h-18.978c-2.485,0-4.5-2.015-4.5-4.5s2.015-4.5,4.5-4.5h18.978c2.485,0,4.5,2.015,4.5,4.5S212.621,371.575,210.135,371.575z" />
      <path d="M220.984,410.884H201.33c-2.485,0-4.5-2.015-4.5-4.5s2.015-4.5,4.5-4.5h19.655c2.485,0,4.5,2.015,4.5,4.5S223.47,410.884,220.984,410.884z" />
      <path d="M159.289,160.714c-2.485,0-4.5-2.015-4.5-4.5v-73.9c0-2.485,2.015-4.5,4.5-4.5s4.5,2.015,4.5,4.5v73.9C163.789,158.7,161.774,160.714,159.289,160.714z" />
      <path d="M327.432,141.749c-2.485,0-4.5-2.015-4.5-4.5V84.347c0-2.485,2.015-4.5,4.5-4.5s4.5,2.015,4.5,4.5v52.902C331.932,139.734,329.917,141.749,327.432,141.749z" />
      <path d="M396.578,214.948c-2.485,0-4.5-2.015-4.5-4.5v-62.362c0-2.485,2.015-4.5,4.5-4.5s4.5,2.015,4.5,4.5v62.362C401.078,212.933,399.063,214.948,396.578,214.948z" />
      <path d="M89.465,232.582c-2.485,0-4.5-2.015-4.5-4.5v-73.899c0-2.485,2.015-4.5,4.5-4.5s4.5,2.015,4.5,4.5v73.899C93.965,230.567,91.95,232.582,89.465,232.582z" />
      <path d="M253.531,84.106c-2.485,0-4.5-2.015-4.5-4.5V17.244c0-2.485,2.015-4.5,4.5-4.5s4.5,2.015,4.5,4.5v62.362C258.031,82.091,256.017,84.106,253.531,84.106z" />
    </svg>
  ),
  'academic-cap': ({ color, size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={color}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
      />
    </svg>
  ),
  bus: ({ color, size }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 50 50"
    >
      <path
        d="M45,44v3c0,1.104-0.896,2-2,2h-4  c-1.104,0-2-0.896-2-2v-2"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth={2}
      />
      <path
        d="M13,45v2c0,1.104-0.896,2-2,2H7  c-1.103,0-2-0.896-2-2v-3"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth={2}
      />
      <rect height="50" width="50" />
      <path
        d="M46,9c0-5.161-1-8-6-8H12C6,1,4,2.714,4,8  c0,4,0,17.919,0,21.846C4,35.617,4,41,4,41c0,3.312,2.688,4,6,4h30c3.312,0,6-0.688,6-4c0,0,0-4.426,0-11.154C46,25.85,46,13,46,9z"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth={2}
      />
      <circle
        cx="38.5"
        cy="37.5"
        r="3.5"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth={2}
      />
      <circle
        cx="11.5"
        cy="37.5"
        r="3.5"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth={2}
      />
      <path
        d="M46,13h2c0.553,0,1,0.448,1,1v8c0,0.552-0.447,1-1,1  h-2"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth={2}
      />
      <path
        d="M4,13H2c-0.552,0-1,0.448-1,1v8c0,0.552,0.448,1,1,1  h2"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth={2}
      />
      <path
        d="M37,7c0,0.552-0.447,1-1,1H15c-0.552,0-1-0.448-1-1  V5c0-0.552,0.448-1,1-1h21c0.553,0,1,0.448,1,1V7z"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth={2}
      />
      <path
        d="M39,28.922L11,29c-2,0-3-1-3-3c0-3,0-8.859,0-12  c0-2,1-3,3-3c9,0,15.713,0,28,0c2,0,3,1,3,3s0,10.977,0,12C42,28,40.047,28.922,39,28.922z"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth={2}
      />
    </svg>
  ),
  store: ({ color, size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={color}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
      />
    </svg>
  ),
  pharmacy: ({ color, size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 480 480"
      fill={color}
      stroke={color}
      strokeWidth={strokeWidth}
    >
      <path d="M264,144l-48-36V72h8a8,8,0,0,0,8-8V16a8,8,0,0,0-8-8H64a8,8,0,0,0-8,8V64a8,8,0,0,0,8,8h8v36L24,144A40.191,40.191,0,0,0,8,176V432a40.045,40.045,0,0,0,40,40H240a40.045,40.045,0,0,0,40-40V176A40.191,40.191,0,0,0,264,144ZM104,56V24h32V56Zm48-32h32V56H152Zm64,32H200V24h16ZM72,24H88V56H72ZM33.6,156.8l51.2-38.4A8,8,0,0,0,88,112V72H200v40a8,8,0,0,0,3.2,6.4l51.2,38.4A24.113,24.113,0,0,1,264,176v8H24v-8A24.113,24.113,0,0,1,33.6,156.8ZM264,376H24V200H264Zm-24,80H48a24.027,24.027,0,0,1-24-24V392H264v40A24.028,24.028,0,0,1,240,456Z" />
      <path d="M96,312h24v24a8,8,0,0,0,8,8h32a8,8,0,0,0,8-8V312h24a8,8,0,0,0,8-8V272a8,8,0,0,0-8-8H168V240a8,8,0,0,0-8-8H128a8,8,0,0,0-8,8v24H96a8,8,0,0,0-8,8v32A8,8,0,0,0,96,312Zm8-32h24a8,8,0,0,0,8-8V248h16v24a8,8,0,0,0,8,8h24v16H160a8,8,0,0,0-8,8v24H136V304a8,8,0,0,0-8-8H104Z" />
      <path d="M410.344,378.344l33.94-33.942a40.046,40.046,0,0,0,0-56.569c-.152-.153-.312-.294-.466-.444-.332-.321-.662-.644-1-.952-.123-.111-.251-.215-.375-.324-.388-.343-.778-.684-1.177-1.01-.047-.039-.1-.074-.142-.112a40,40,0,0,0-50.33.069l-.045.035c-.452.37-.895.753-1.333,1.144-.072.064-.147.124-.219.189q-.755.683-1.478,1.405l-33.942,33.941,0,.006-33.936,33.936A40,40,0,0,0,376.4,412.284l33.931-33.931Zm-5.658-16.972-33.941-33.94,8.319-8.319,19.966-19.966a24.027,24.027,0,0,1,33.94,0,24.342,24.342,0,0,1,1.643,1.819l0,.007a24.042,24.042,0,0,1,0,30.29l0,.006a24.146,24.146,0,0,1-1.643,1.819Zm-39.6,39.6a24,24,0,1,1-33.941-33.94l28.284-28.284,33.941,33.94Z" />
      <path d="M432,392a40,40,0,1,0,40,40A40.045,40.045,0,0,0,432,392Zm0,16a24.039,24.039,0,0,1,22.624,16H409.376A24.039,24.039,0,0,1,432,408Zm0,48a24.039,24.039,0,0,1-22.624-16h45.248A24.039,24.039,0,0,1,432,456Z" />
      <path d="M376,256a40,40,0,1,0-40,40A40.045,40.045,0,0,0,376,256Zm-40-24a24.039,24.039,0,0,1,22.624,16H313.376A24.039,24.039,0,0,1,336,232Zm-22.624,32h45.248a24,24,0,0,1-45.248,0Z" />
    </svg>
  ),
  'arrow-right': ({ color, size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={color}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
      />
    </svg>
  ),
  'arrow-left': ({ color, size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={color}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
      />
    </svg>
  ),
  'x-mark': ({ color, size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={color}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  ),
  'chevron-down': ({ color, size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={color}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  ),
  'menu-bar': ({ color, size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={color}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  ),
  share: ({ color, size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={color}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
      />
    </svg>
  ),
  well: ({ color, size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      viewBox="0 0 512 512"
      strokeWidth={strokeWidth}
      stroke={color}
    >
      <path d="M503.5,271h-60V68.5h30c4.143,0,7.5-3.357,7.5-7.5s-3.357-7.5-7.5-7.5h-30v-45 c0-4.143-3.357-7.5-7.5-7.5h-37.5c-4.143,0-7.5,3.357-7.5,7.5v45h-22.5V31c0-4.143-3.357-7.5-7.5-7.5c-26.336,0-181.184,0-210,0 c-4.143,0-7.5,3.357-7.5,7.5v22.5H121v-45c0-4.143-3.357-7.5-7.5-7.5H76c-4.143,0-7.5,3.357-7.5,7.5v45h-30 c-4.143,0-7.5,3.357-7.5,7.5v37.5H8.5c-4.143,0-7.5,3.357-7.5,7.5s3.357,7.5,7.5,7.5h30c4.143,0,7.5-3.357,7.5-7.5V68.5h22.5V271 h-60c-4.143,0-7.5,3.357-7.5,7.5v45c0,4.143,3.357,7.5,7.5,7.5h15v172.5c0,4.143,3.357,7.5,7.5,7.5h450c4.143,0,7.5-3.357,7.5-7.5 V331h15c4.143,0,7.5-3.357,7.5-7.5v-45C511,274.357,507.643,271,503.5,271z M406,16h22.5v255H406V16z M326.5,38.5h27v45h-27V38.5z  M284.5,38.5h27v45h-27V38.5z M242.5,38.5h27v45h-27V38.5z M274.75,173.5h-37.5v-3.75c0-10.339,8.411-18.75,18.75-18.75 s18.75,8.411,18.75,18.75V173.5z M287.9,188.5L276.233,241h-40.467L224.1,188.5C236.378,188.5,275.586,188.5,287.9,188.5z  M200.5,38.5h27v45h-27V38.5z M158.5,38.5h27v45h-27V38.5z M121,68.5h22.5V91c0,4.143,3.357,7.5,7.5,7.5c13.743,0,83.787,0,97.5,0 v38.35c-15.01,3.421-26.25,16.868-26.25,32.9v3.75h-7.5c-4.798,0-8.36,4.448-7.321,9.127l15,67.5 c0.763,3.432,3.806,5.873,7.321,5.873h52.5c3.516,0,6.559-2.441,7.321-5.873l15-67.5c1.04-4.684-2.528-9.127-7.321-9.127h-7.5 v-3.75c0-16.031-11.24-29.479-26.25-32.9V98.5c21.112,0,77.874,0,97.5,0c4.143,0,7.5-3.357,7.5-7.5V68.5H391V271H121V68.5z  M83.5,16H106v255H83.5V16z M136,496H38.5v-45H136V496z M361,376h-97.5v-45H361V376z M410.5,391v45h-93v-45H410.5z M302.5,391v45 h-93v-45H302.5z M248.5,376H151v-45h97.5V376z M194.5,391v45h-93v-45H194.5z M136,376H38.5v-45H136V376z M86.5,391v45h-48v-45H86.5   z M248.5,496H151v-45h97.5V496z M361,496h-97.5v-45H361V496z M473.5,496H376v-45h97.5V496z M473.5,436h-48v-45h48V436z M473.5,376   H376v-45h97.5V376z M496,316c-23.846,0-456.938,0-480,0v-30c33.621,0,459.846,0,480,0V316z" />
    </svg>
  ),
  soil: ({ color, size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      viewBox="0 0 32 32"
      strokeWidth={strokeWidth}
    >
      <path
        d="M24.5,28A5.385,5.385,0,0,1,19,22.751a5.3837,5.3837,0,0,1,.874-2.8308L23.49,14.5383a1.217,1.217,0,0,1,2.02,0L29.06,19.8154A5.4923,5.4923,0,0,1,30,22.751,5.385,5.385,0,0,1,24.5,28Zm0-11.38-2.9356,4.3672A3.3586,3.3586,0,0,0,21,22.751a3.51,3.51,0,0,0,7,0,3.4356,3.4356,0,0,0-.63-1.867Z"
        transform="translate(0 0)"
      />
      <circle cx="5" cy="13" r="1" />
      <circle cx="11" cy="19" r="1" />
      <circle cx="15" cy="25" r="1" />
      <circle cx="17" cy="15" r="1" />
      <circle cx="13" cy="11" r="1" />
      <circle cx="27" cy="11" r="1" />
      <circle cx="9" cy="27" r="1" />
      <circle cx="3" cy="21" r="1" />
      <rect height="2" width="28" x="2" y="6" />
    </svg>
  ),
  zoning: ({ color, size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill={color}
      stroke={color}
      strokeWidth={strokeWidth}
    >
      <g>
        <path d="M63.5,16c-0.3-0.2-0.7-0.3-1-0.1l-20.4,7.3l-14.3-5.2c0.8-2,1.2-3.8,1.2-5.3c0-2.7-1-5.1-2.9-7c-1.9-1.9-4.4-2.9-7-2.9    c-5.5,0-9.9,4.4-9.9,9.9c0,1.9,0.7,4.2,1.9,7L0.7,23.2c-0.4,0.2-0.7,0.6-0.7,1v36c0,0.4,0.2,0.7,0.5,0.9c0.2,0.1,0.4,0.2,0.6,0.2    c0.1,0,0.3,0,0.4-0.1L21.9,54l19.8,7.3c0.2,0.1,0.5,0.1,0.7,0l20.8-7.4c0.4-0.2,0.7-0.6,0.7-1v-36C64,16.5,63.8,16.2,63.5,16z     M19.1,4.8c2.1,0,4,0.8,5.4,2.3c0,0,0,0,0,0c1.5,1.4,2.3,3.4,2.3,5.4c0,1.4-0.5,3.3-1.5,5.5c-1.8,4-4.8,8.2-6.2,10.1    c-0.2-0.2-0.3-0.4-0.5-0.7c-1.3-1.8-3.4-4.8-4.9-7.9c-1.5-2.9-2.2-5.3-2.2-7.1C11.4,8.3,14.9,4.8,19.1,4.8z M61.8,52.1l-19.7,7    l-19.8-7.3c-0.1,0-0.3-0.1-0.4-0.1c-0.1,0-0.3,0-0.4,0.1L2.2,58.7V25l10-3.5c0,0,0,0,0,0.1c0.1,0.1,0.1,0.2,0.2,0.3    c0.1,0.2,0.2,0.4,0.3,0.6c0.1,0.1,0.1,0.2,0.2,0.3c0.1,0.2,0.2,0.4,0.3,0.6c0.1,0.1,0.1,0.2,0.2,0.3c0.1,0.2,0.2,0.4,0.3,0.5    c0.1,0.1,0.1,0.2,0.2,0.3c0.1,0.2,0.2,0.3,0.3,0.5c0.1,0.1,0.1,0.2,0.2,0.3c0.1,0.2,0.2,0.3,0.3,0.5c0.1,0.1,0.1,0.2,0.2,0.3    c0.1,0.2,0.2,0.3,0.3,0.5c0.1,0.1,0.1,0.2,0.2,0.3c0.1,0.2,0.2,0.3,0.3,0.5c0.1,0.1,0.1,0.2,0.2,0.2c0.1,0.2,0.2,0.3,0.3,0.4    c0,0.1,0.1,0.1,0.1,0.2c0.1,0.2,0.2,0.3,0.3,0.4c0,0,0.1,0.1,0.1,0.1c0.1,0.1,0.2,0.3,0.3,0.4c0,0,0.1,0.1,0.1,0.1    c0.1,0.1,0.2,0.3,0.3,0.4c0,0,0,0,0,0c0.1,0.1,0.2,0.2,0.3,0.3c0,0,0,0,0,0c0.2,0.3,0.4,0.5,0.4,0.6c0.2,0.3,0.5,0.4,0.9,0.4    c0.3,0,0.6-0.2,0.9-0.4c0,0,0.1-0.1,0.3-0.3c0,0,0.1-0.1,0.1-0.1c0.1-0.1,0.1-0.1,0.2-0.2c0,0,0.1-0.1,0.1-0.1    c0.1-0.1,0.1-0.2,0.2-0.3c0-0.1,0.1-0.1,0.1-0.2c0.1-0.1,0.2-0.2,0.2-0.3c0.1-0.1,0.1-0.2,0.2-0.3c0.1-0.1,0.2-0.2,0.3-0.4    c0.1-0.1,0.1-0.2,0.2-0.3c0.1-0.1,0.2-0.2,0.3-0.4c0.1-0.1,0.2-0.2,0.2-0.3c0.1-0.1,0.2-0.3,0.3-0.4c0.1-0.1,0.2-0.3,0.3-0.4    c0.1-0.1,0.2-0.3,0.3-0.4c0.1-0.1,0.2-0.3,0.3-0.4c0.1-0.2,0.2-0.3,0.3-0.5c0.1-0.1,0.2-0.3,0.3-0.4c0.1-0.2,0.2-0.3,0.3-0.5    c0.1-0.2,0.2-0.3,0.3-0.5c0.1-0.2,0.2-0.3,0.3-0.5c0.1-0.2,0.2-0.3,0.3-0.5c0.1-0.2,0.2-0.3,0.3-0.5c0.1-0.2,0.2-0.3,0.3-0.5    c0.1-0.2,0.2-0.3,0.3-0.5c0.1-0.2,0.2-0.3,0.3-0.5c0.1-0.2,0.2-0.4,0.3-0.5c0.1-0.2,0.2-0.3,0.2-0.5c0,0,0,0,0-0.1l14.8,5.4    c0.2,0.1,0.5,0.1,0.7,0l19.3-6.9V52.1z" />
        <path d="M52.5,42.4c0.2,0.1,0.5,0.1,0.7,0.1c0.6,0,1.2-0.2,1.7-0.5c0.7-0.5,1.2-1.2,1.4-2c0.2-0.8,0-1.7-0.4-2.4    c-0.5-0.7-1.2-1.2-2-1.4c-1.7-0.4-3.5,0.7-3.9,2.4v0c-0.2,0.8,0,1.7,0.4,2.4C51,41.7,51.7,42.2,52.5,42.4z M52.2,39    c0.1-0.6,0.7-0.9,1.2-0.8c0.3,0.1,0.5,0.2,0.6,0.5c0.1,0.2,0.2,0.5,0.1,0.8c-0.1,0.3-0.2,0.5-0.5,0.6c-0.2,0.1-0.5,0.2-0.8,0.1    c-0.3-0.1-0.5-0.2-0.6-0.5C52.2,39.5,52.2,39.3,52.2,39z" />
        <path d="M11,39.1l-0.7,0.4l-0.4-0.7c-0.3-0.5-1-0.7-1.5-0.3c-0.5,0.3-0.7,1-0.3,1.5l0.4,0.7l-0.7,0.4c-0.5,0.3-0.7,1-0.3,1.5    C7.6,43,8,43.1,8.3,43.1c0.2,0,0.4-0.1,0.6-0.2l0.7-0.4l0.4,0.7c0.2,0.3,0.6,0.5,0.9,0.5c0.2,0,0.4-0.1,0.6-0.2    c0.5-0.3,0.7-1,0.3-1.5l-0.4-0.7l0.7-0.4c0.5-0.3,0.7-1,0.3-1.5C12.2,38.9,11.5,38.8,11,39.1z" />
        <path d="M21.3,42.1c-1.3,0-3-0.2-4.1-0.5c-0.6-0.1-1.2,0.3-1.3,0.9c-0.1,0.6,0.3,1.2,0.9,1.3c1.1,0.2,2.9,0.5,4.5,0.5c0,0,0,0,0,0    c0.6,0,1.1-0.5,1.1-1.1C22.4,42.6,21.9,42.1,21.3,42.1z" />
        <path d="M29.5,38.3c-0.7,1-1.5,1.8-2.5,2.4c-0.3,0.2-0.7,0.4-1.1,0.6c-0.6,0.2-0.8,0.9-0.6,1.5c0.2,0.4,0.6,0.7,1,0.7    c0.1,0,0.3,0,0.4-0.1c0.5-0.2,0.9-0.4,1.3-0.7c1.2-0.8,2.2-1.7,3.1-2.9c0.4-0.5,0.3-1.2-0.2-1.5C30.6,37.7,29.9,37.8,29.5,38.3z" />
        <path d="M37.5,31.1c-1.1,0-1.7,0.3-2.3,0.5c-1.4,0.6-2.6,1.9-2.9,2.3c-0.4,0.5-0.3,1.2,0.1,1.6c0.2,0.2,0.5,0.3,0.7,0.3    c0.3,0,0.6-0.1,0.8-0.4c0.5-0.6,1.3-1.3,2.1-1.7c0.6-0.2,0.8-0.3,1.5-0.4c0.6,0,1.1-0.5,1.1-1.1C38.6,31.6,38.1,31.1,37.5,31.1z" />
        <path d="M41.6,32.8c-0.2,0.6,0,1.2,0.6,1.5c1.1,0.5,2.7,1.3,3.9,2.2c0.2,0.1,0.4,0.2,0.6,0.2c0.4,0,0.7-0.2,0.9-0.5    c0.3-0.5,0.2-1.2-0.3-1.5c-1.4-0.9-3-1.8-4.3-2.3C42.5,32,41.9,32.3,41.6,32.8z" />
        <path d="M19.1,15.2c1.9,0,3.4-1.5,3.4-3.4S21,8.4,19.1,8.4c-1.9,0-3.4,1.5-3.4,3.4S17.3,15.2,19.1,15.2z M19.1,10.6    c0.6,0,1.2,0.5,1.2,1.2c0,0.6-0.5,1.2-1.2,1.2c-0.6,0-1.2-0.5-1.2-1.2C18,11.2,18.5,10.6,19.1,10.6z" />
      </g>
    </svg>
  ),
  hospital: ({ color, size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill={color}
      stroke={color}
      strokeWidth={strokeWidth}
    >
      <g>
        <path d="M47.5,12.6h-11V0.5h-25v12.1h-11v29.3h6.2v5.6h34.6v-5.6h6.2V12.6z M13.5,2.5h21v10.1v27.3h-4.2v-8H17.7v8h-4.2V12.6V2.5z    M28.3,39.9h-8.7v-6h8.7V39.9z M2.5,39.9V14.6h9v25.3H6.7H2.5z M39.3,45.5H8.7v-3.6h2.8h2h4.2h12.7h4.2h2h2.8V45.5z M45.5,39.9   h-4.2h-4.8V14.6h9V39.9z" />
        <polygon points="23,14.6 25,14.6 25,11.7 27.9,11.7 27.9,9.7 25,9.7 25,6.8 23,6.8 23,9.7 20.1,9.7 20.1,11.7 23,11.7  " />
        <rect height="3.1" width="2" x="6" y="18.5" />
        <rect height="3.1" width="2" x="6" y="25.7" />
        <rect height="3.1" width="2" x="6" y="32.9" />
        <rect height="3.1" width="2" x="40" y="18.5" />
        <rect height="3.1" width="2" x="40" y="25.7" />
        <rect height="3.1" width="2" x="40" y="32.9" />
        <rect height="3.1" width="2" x="17.7" y="18.5" />
        <rect height="3.1" width="2" x="17.7" y="25.7" />
        <rect height="3.1" width="2" x="23" y="18.5" />
        <rect height="3.1" width="2" x="23" y="25.7" />
        <rect height="3.1" width="2" x="28.3" y="18.5" />
        <rect height="3.1" width="2" x="28.3" y="25.7" />
      </g>
    </svg>
  ),
  'lock-closed': ({ color, size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={color}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
      />
    </svg>
  ),
  sun: ({ color, size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={color}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
      />
    </svg>
  ),
  'arrow-up-right': ({ color, size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={color}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
      />
    </svg>
  ),
  'arrow-down-right': ({ color, size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={color}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
      />
    </svg>
  ),
  minus: ({ color, size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={color}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
    </svg>
  ),
  'information-circle': ({ color, size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={color}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
      />
    </svg>
  ),
  road: ({ color, size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      viewBox="0 0 20 20"
      strokeWidth={strokeWidth}
      stroke={color}
    >
      <path d="M 5.5058594 1.9921875 C 5.2863216 1.9906151 5.0914349 2.1324229 5.0253906 2.3417969 L 0.025390625 17.341797 C -0.18554662 17.974609 0.76367212 18.291015 0.97460938 17.658203 L 5.9746094 2.6582031 C 6.0886432 2.3341172 5.8494162 1.9942155 5.5058594 1.9921875 z M 7.0078125 1.9921875 C 6.7703022 1.989649 6.5637797 2.1545405 6.5136719 2.3867188 L 3.0136719 17.386719 C 2.8181108 18.062031 3.8633485 18.3055 3.9863281 17.613281 L 7.4863281 2.6132812 C 7.564421 2.3003834 7.3302798 1.9964776 7.0078125 1.9921875 z M 9.4921875 1.9921875 C 9.2160425 1.9964962 8.9956791 2.2238552 9 2.5 L 9 3.5 C 8.99044 4.1761613 10.009563 4.1761613 10 3.5 L 10 2.5 C 10.004417 2.2177336 9.7744539 1.9877707 9.4921875 1.9921875 z M 11.976562 1.9921875 C 11.654096 1.9964776 11.419957 2.3003834 11.498047 2.6132812 L 14.998047 17.613281 C 15.121027 18.3055 16.166264 18.062031 15.970703 17.386719 L 12.470703 2.3867188 C 12.420596 2.1545405 12.214073 1.9896475 11.976562 1.9921875 z M 13.478516 1.9921875 C 13.134959 1.9942155 12.895733 2.3341172 13.009766 2.6582031 L 18.009766 17.658203 C 18.220703 18.291015 19.169921 17.974609 18.958984 17.341797 L 13.958984 2.3417969 C 13.892939 2.1324229 13.698054 1.9906175 13.478516 1.9921875 z M 9.4921875 6.9921875 C 9.2160445 6.9964925 8.9956791 7.2238552 9 7.5 L 9 10.5 C 8.99044 11.176161 10.009563 11.176161 10 10.5 L 10 7.5 C 10.004417 7.2177336 9.7744539 6.9877707 9.4921875 6.9921875 z M 9.4921875 13.992188 C 9.2160427 13.996496 8.9956794 14.223855 9 14.5 L 9 17.5 C 8.99044 18.176161 10.009563 18.176161 10 17.5 L 10 14.5 C 10.0044 14.217734 9.7744537 13.987771 9.4921875 13.992188 z " />
    </svg>
  ),
  village: ({ color, size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      viewBox="0 0 512 512"
      strokeWidth={strokeWidth}
      stroke={color}
    >
      <path d="M49.45,209.52a5.1,5.1,0,0,0,5.1-5.1v-65L105,101.71l50.41,37.73v65a5.1,5.1,0,0,0,10.2,0V137.67a6.68,6.68,0,0,0-2.66-5.33L109,92a6.72,6.72,0,0,0-8,0L47,132.34a6.7,6.7,0,0,0-2.68,5.33v66.75A5.1,5.1,0,0,0,49.45,209.52Z" />
      <path d="M306.41,204.42a5.1,5.1,0,0,0,10.2,0V137.67a6.68,6.68,0,0,0-2.66-5.33L260,92a6.71,6.71,0,0,0-8,0l-53.95,40.39a6.67,6.67,0,0,0-2.68,5.33v66.75a5.1,5.1,0,0,0,10.2,0v-65L256,101.71l50.41,37.73Z" />
      <path d="M351.51,209.52a5.1,5.1,0,0,0,5.1-5.1v-65L407,101.71l50.41,37.73v65a5.1,5.1,0,1,0,10.2,0V137.67a6.71,6.71,0,0,0-2.66-5.33l-54-40.4a6.66,6.66,0,0,0-8,0l-53.95,40.39a6.69,6.69,0,0,0-2.67,5.33v66.75A5.1,5.1,0,0,0,351.51,209.52Z" />
      <path d="M245.75,319.26l-33.92-23.42v-39a5.1,5.1,0,0,0-5.1-5.1H174.39a5.1,5.1,0,0,0-5.1,5.1v9.63L139,245.56a5.09,5.09,0,0,0-5.8,0L26.44,319.26a5.09,5.09,0,0,0,2.89,9.29H55.91v87.73a5.1,5.1,0,0,0,10.2,0V323.45a5.1,5.1,0,0,0-5.1-5.1H45.7L136.09,256l35.4,24.44a5.1,5.1,0,0,0,8-4.2V262h22.14v36.57a5.09,5.09,0,0,0,2.2,4.19l22.66,15.64H211.17a5.1,5.1,0,0,0-5.1,5.1v92.83a5.1,5.1,0,0,0,10.2,0V328.55h26.58a5.1,5.1,0,0,0,2.9-9.29Z" />
      <path d="M136.38,333.24h-.57a33.55,33.55,0,0,0-33.52,33.51v49.53a5.1,5.1,0,0,0,10.2,0V366.75a23.34,23.34,0,0,1,23.32-23.31h.57a23.33,23.33,0,0,1,23.31,23.31v49.53a5.1,5.1,0,0,0,10.2,0V366.75A33.54,33.54,0,0,0,136.38,333.24Z" />
      <path d="M485.56,319.26l-33.92-23.42v-39a5.1,5.1,0,0,0-5.1-5.1H414.2a5.11,5.11,0,0,0-5.1,5.1v9.63l-30.3-20.92a5.07,5.07,0,0,0-5.79,0l-106.76,73.7a5.1,5.1,0,0,0,2.9,9.29h26.58v87.73a5.1,5.1,0,0,0,10.2,0V323.45a5.1,5.1,0,0,0-5.1-5.1H285.51L375.9,256l35.41,24.44a5.09,5.09,0,0,0,8-4.2V262h22.14v36.57a5.09,5.09,0,0,0,2.2,4.19l22.66,15.64H451a5.1,5.1,0,0,0-5.1,5.1v92.83a5.1,5.1,0,0,0,10.2,0V328.55h26.59a5.09,5.09,0,0,0,2.89-9.29Z" />
      <path d="M376.19,333.24h-.57a33.54,33.54,0,0,0-33.51,33.51v49.53a5.1,5.1,0,0,0,10.2,0V366.75a23.33,23.33,0,0,1,23.31-23.31h.57a23.33,23.33,0,0,1,23.31,23.31v49.53a5.1,5.1,0,1,0,10.2,0V366.75A33.54,33.54,0,0,0,376.19,333.24Z" />
    </svg>
  ),
  'entrance-gate': ({ color, size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
      viewBox="0 0 512 512"
      strokeWidth={strokeWidth}
      stroke={color}
    >
      <path d="M501.554,149.833l-7.986-3.993c-1.744-0.872-3.64-1.442-5.575-1.692c0.001-0.05,0.007-0.098,0.007-0.148v-12.687   l21.657-21.657c2.435-2.435,3.039-6.154,1.499-9.234L488,54.112V40c0-4.418-3.582-8-8-8s-8,3.582-8,8v14.112l-23.155,46.311   c-1.54,3.08-0.937,6.8,1.499,9.234L472,131.313V144c0,0.05,0.007,0.098,0.007,0.148c-1.936,0.25-3.831,0.819-5.574,1.691   l-7.986,3.993c-6.444,3.222-10.447,9.698-10.447,16.902v36.167c-2.672-1.111-5.339-2.402-8-3.877V160c0-4.418-3.582-8-8-8   s-8,3.582-8,8v27.92c-3.439-2.878-6.865-6.061-10.277-9.555c-4.525-4.635-9.101-8.799-13.723-12.5V152c4.418,0,8-3.582,8-8   s-3.582-8-8-8v-8c0-4.418-3.582-8-8-8s-8,3.582-8,8v8c-4.418,0-8,3.582-8,8s3.582,8,8,8v3.019c-7.895-4.402-15.902-7.486-24-9.25   V120c4.418,0,8-3.582,8-8s-3.582-8-8-8v-8c0-4.418-3.582-8-8-8s-8,3.582-8,8v8c-4.418,0-8,3.582-8,8s3.582,8,8,8v24.008   c-1.37-0.005-2.742,0.02-4.117,0.09c-7.093,0.361-13.737,1.706-19.883,3.659V136c4.418,0,8-3.582,8-8s-3.582-8-8-8v-8   c0-4.418-3.582-8-8-8s-8,3.582-8,8v8c-4.418,0-8,3.582-8,8s3.582,8,8,8v18.639c-6.203,3.389-11.574,7.185-16,10.773V80   c4.418,0,8-3.582,8-8s-3.582-8-8-8v-8c0-4.418-3.582-8-8-8s-8,3.582-8,8v8c-4.418,0-8,3.582-8,8s3.582,8,8,8v104.29   c0,0.008-0.001,0.015-0.001,0.023L272,456c0,4.418,3.582,8,8,8h168v8c0,4.418,3.582,8,8,8h48c4.418,0,8-3.582,8-8V166.735   C512,159.531,507.997,153.054,501.554,149.833z M400,187.266c0.759,0.745,1.518,1.501,2.275,2.277   c7.391,7.569,14.658,13.583,21.725,18.346v59.371c-3.454-2.842-6.895-5.988-10.321-9.441c-4.511-4.547-9.073-8.635-13.679-12.271   V187.266z M400,266.802c0.774,0.748,1.548,1.505,2.32,2.284c6.098,6.148,13.384,12.477,21.68,17.985V376h-24V266.802z M360,162.26   c8.042,2.23,16.053,6.112,24,11.622v60.98c-7.896-4.339-15.904-7.379-24-9.118V162.26z M360,242.226   c8.044,2.191,16.055,6.005,24,11.418V376h-24V242.226z M320,164.772c6.298-2.537,13.294-4.334,20.827-4.702   c1.058-0.052,2.116-0.068,3.173-0.062v63.998c-1.391-0.005-2.783,0.022-4.178,0.093c-7.07,0.361-13.694,1.685-19.822,3.605V164.772   z M320,244.701c6.285-2.489,13.256-4.262,20.771-4.629c1.076-0.052,2.153-0.068,3.229-0.062V376h-24V244.701z M288,208v-20.689   c2.649-2.886,8.215-8.468,16-13.838v61.014c-6.205,3.342-11.576,7.083-16.001,10.618l0-37.087C287.999,208.012,288,208.006,288,208   z M287.999,266.845c2.665-2.854,8.225-8.33,16.001-13.602V376h-16.001L287.999,266.845z M448,448H288l0-56h160V448z M448,376h-8   v-80.126c2.597,1.136,5.266,2.158,8,3.056V376z M448,281.987c-2.672-1.092-5.339-2.36-8-3.81v-61.386   c2.713,1.196,5.38,2.216,8,3.081V281.987z M465.734,102.42L480,73.889l14.266,28.532L480,116.687L465.734,102.42z M496,216h-16   c-4.418,0-8,3.582-8,8s3.582,8,8,8h16v48h-16c-4.418,0-8,3.582-8,8s3.582,8,8,8h16v48h-16c-4.418,0-8,3.582-8,8s3.582,8,8,8h16v48   h-16c-4.418,0-8,3.582-8,8s3.582,8,8,8h16v40h-32v-8h16c4.418,0,8-3.582,8-8s-3.582-8-8-8h-16v-48h16c4.418,0,8-3.582,8-8   s-3.582-8-8-8h-16v-48h16c4.418,0,8-3.582,8-8s-3.582-8-8-8h-16v-48h16c4.418,0,8-3.582,8-8s-3.582-8-8-8h-16v-48h16   c4.418,0,8-3.582,8-8s-3.582-8-8-8h-16v-17.265c0-1.104,0.614-2.097,1.602-2.591l7.987-3.994c0.196-0.098,0.415-0.149,0.635-0.149   h11.552c0.22,0,0.439,0.052,0.635,0.15l7.988,3.994c0.987,0.494,1.601,1.486,1.601,2.591V216z" />
      <path d="M248,72c0-4.418-3.582-8-8-8v-8c0-4.418-3.582-8-8-8s-8,3.582-8,8v8c-4.418,0-8,3.582-8,8s3.582,8,8,8v85.412   c-4.426-3.588-9.797-7.384-16-10.773V136c4.418,0,8-3.582,8-8s-3.582-8-8-8v-8c0-4.418-3.582-8-8-8s-8,3.582-8,8v8   c-4.418,0-8,3.582-8,8s3.582,8,8,8v11.757c-6.146-1.953-12.79-3.298-19.883-3.659c-1.374-0.07-2.746-0.095-4.117-0.091V120   c4.418,0,8-3.582,8-8s-3.582-8-8-8v-8c0-4.418-3.582-8-8-8s-8,3.582-8,8v8c-4.418,0-8,3.582-8,8s3.582,8,8,8v25.768   c-8.097,1.764-16.105,4.849-24,9.252V152c4.418,0,8-3.582,8-8s-3.582-8-8-8v-8c0-4.418-3.582-8-8-8s-8,3.582-8,8v8   c-4.418,0-8,3.582-8,8s3.582,8,8,8v13.865c-4.622,3.702-9.199,7.866-13.723,12.5c-3.411,3.494-6.838,6.659-10.277,9.534V160   c0-4.418-3.582-8-8-8s-8,3.582-8,8v39.01c-2.661,1.471-5.328,2.749-8,3.857v-36.132c0-7.204-4.003-13.681-10.446-16.902   l-7.986-3.993c-1.744-0.872-3.64-1.442-5.575-1.692C39.993,144.098,40,144.05,40,144v-12.687l21.657-21.657   c2.435-2.435,3.039-6.154,1.499-9.234L40,54.112V40c0-4.418-3.582-8-8-8s-8,3.582-8,8v14.112L0.845,100.422   c-1.54,3.08-0.937,6.8,1.499,9.234L24,131.313V144c0,0.05,0.007,0.098,0.007,0.148c-1.936,0.25-3.831,0.819-5.574,1.691   l-7.986,3.993C4.003,153.054,0,159.531,0,166.735V472c0,4.418,3.582,8,8,8h48c4.418,0,8-3.582,8-8v-8h168c4.418,0,8-3.582,8-8   l0-271.687c0-0.008-0.001-0.015-0.001-0.023V80C244.418,80,248,76.418,248,72z M17.734,102.42L32,73.889l14.266,28.532L32,116.687   L17.734,102.42z M48,184H32c-4.418,0-8,3.582-8,8s3.582,8,8,8h16v48H32c-4.418,0-8,3.582-8,8s3.582,8,8,8h16v48H32   c-4.418,0-8,3.582-8,8s3.582,8,8,8h16v48H32c-4.418,0-8,3.582-8,8s3.582,8,8,8h16v48H32c-4.418,0-8,3.582-8,8s3.582,8,8,8h16v8H16   v-40h16c4.418,0,8-3.582,8-8s-3.582-8-8-8H16v-48h16c4.418,0,8-3.582,8-8s-3.582-8-8-8H16v-48h16c4.418,0,8-3.582,8-8s-3.582-8-8-8   H16v-48h16c4.418,0,8-3.582,8-8s-3.582-8-8-8H16v-49.265c0-1.104,0.614-2.097,1.602-2.591l7.987-3.994   c0.196-0.098,0.415-0.149,0.635-0.149h11.552c0.22,0,0.439,0.052,0.635,0.15l7.988,3.994c0.987,0.494,1.601,1.486,1.601,2.591V184z    M168,160.008c1.058-0.005,2.115,0.011,3.173,0.062c7.533,0.367,14.529,2.165,20.827,4.702v62.932   c-6.129-1.92-12.752-3.244-19.822-3.605c-1.395-0.071-2.787-0.097-4.178-0.093V160.008z M168,240.009   c1.076-0.006,2.152,0.01,3.229,0.063c7.515,0.367,14.486,2.141,20.771,4.629V376h-24V240.009z M128,173.883   c7.948-5.509,15.959-9.392,24-11.622v63.481c-8.097,1.738-16.105,4.778-24,9.117V173.883z M128,253.643   c7.945-5.414,15.956-9.228,24-11.419V376h-24V253.643z M88,207.851c8.32-5.602,15.615-12.051,21.725-18.309   c0.757-0.776,1.516-1.531,2.275-2.277v58.281c-4.607,3.635-9.168,7.724-13.679,12.272c-3.426,3.454-6.867,6.586-10.321,9.426   V207.851z M88,287.082c8.301-5.509,15.581-11.846,21.68-17.996c0.772-0.779,1.546-1.536,2.32-2.284V376H88V287.082z M64,219.874   c2.734-0.911,5.403-1.951,8-3.103v61.387c-2.661,1.447-5.328,2.72-8,3.81V219.874z M64,298.93c2.735-0.898,5.402-1.924,8-3.061V376   h-8V298.93z M64,448v-56h160l0,56H64z M224.001,376H208V253.243c7.776,5.272,13.336,10.749,16.001,13.602L224.001,376z    M224.001,245.105c-4.425-3.535-9.796-7.277-16.001-10.618v-61.014c7.79,5.373,13.356,10.957,16,13.837V208   c0,0.006,0.001,0.012,0.001,0.019L224.001,245.105z" />
    </svg>
  ),
  playground: ({ color, size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      strokeWidth={strokeWidth}
      stroke={color}
    >
      <g data-name="Layer 24" id="Layer_24">
        <rect height="4" width="60" x="2" y="58" />
        <path d="M4,58V4A2,2,0,0,1,6,2H6A2,2,0,0,1,8,4V58" />
        <path d="M56,58V4a2,2,0,0,1,2-2h0a2,2,0,0,1,2,2V58" />
        <rect height="4" width="48" x="8" y="10" />
        <rect height="4" width="16" x="12" y="38" />
        <line x1="14" x2="14" y1="38" y2="18" />
        <line x1="26" x2="26" y1="38" y2="18" />
        <path d="M12,14v2a2,2,0,0,0,2,2h0a2,2,0,0,0,2-2V14" />
        <path d="M24,14v2a2,2,0,0,0,2,2h0a2,2,0,0,0,2-2V14" />
        <rect height="4" width="16" x="36" y="38" />
        <line x1="38" x2="38" y1="38" y2="18" />
        <line x1="50" x2="50" y1="38" y2="18" />
        <path d="M36,14v2a2,2,0,0,0,2,2h0a2,2,0,0,0,2-2V14" />
        <path d="M48,14v2a2,2,0,0,0,2,2h0a2,2,0,0,0,2-2V14" />
        <line x1="56" x2="60" y1="52" y2="52" />
        <line x1="56" x2="60" y1="46" y2="46" />
        <line x1="4" x2="8" y1="52" y2="52" />
        <line x1="4" x2="8" y1="46" y2="46" />
      </g>
    </svg>
  ),
  walk: ({ color, size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth={strokeWidth}
      stroke={color}
    >
      <path d="M7.617 8.712l3.205-2.328A1.995 1.995 0 0 1 12.065 6a2.616 2.616 0 0 1 2.427 1.82c.186.583.356.977.51 1.182A4.992 4.992 0 0 0 19 11v2a6.986 6.986 0 0 1-5.402-2.547l-.697 3.955 2.061 1.73 2.223 6.108-1.88.684-2.04-5.604-3.39-2.845a2 2 0 0 1-.713-1.904l.509-2.885-.677.492-2.127 2.928-1.618-1.176L7.6 8.7l.017.012zM13.5 5.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm-2.972 13.181l-3.214 3.83-1.532-1.285 2.976-3.546.746-2.18 1.791 1.5-.767 1.681z" />
    </svg>
  ),
  mail: ({ color, size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth={strokeWidth}
      stroke={color}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
      />
    </svg>
  ),
  'document-duplicate': ({ color, size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth={strokeWidth}
      stroke={color}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
      />
    </svg>
  ),
  facebook: ({ color, size }) => (
    <svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
    >
      <path d="M512,257.555c0,-141.385 -114.615,-256 -256,-256c-141.385,0 -256,114.615 -256,256c0,127.777 93.616,233.685 216,252.89l0,-178.89l-65,0l0,-74l65,0l0,-56.4c0,-64.16 38.219,-99.6 96.695,-99.6c28.009,0 57.305,5 57.305,5l0,63l-32.281,0c-31.801,0 -41.719,19.733 -41.719,39.978l0,48.022l71,0l-11.35,74l-59.65,0l0,178.89c122.385,-19.205 216,-125.113 216,-252.89Z" />
    </svg>
  ),
  'facebook-messenger': ({ color, size }) => (
    <svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
    >
      <path d="M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94 8.35 7.51 6.63 11.86 8.05 58.23A19.92 19.92 0 0 0 122 502.31c52.91-23.3 53.59-25.14 62.56-22.7C337.85 521.8 504 423.7 504 248.57 504 110.34 396.59 8 256.55 8zm149.24 185.13l-73 115.57a37.37 37.37 0 0 1-53.91 9.93l-58.08-43.47a15 15 0 0 0-18 0l-78.37 59.44c-10.46 7.93-24.16-4.6-17.11-15.67l73-115.57a37.36 37.36 0 0 1 53.91-9.93l58.06 43.46a15 15 0 0 0 18 0l78.41-59.38c10.44-7.98 24.14 4.54 17.09 15.62z" />
    </svg>
  ),
  twitter: ({ color, size }) => (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
    >
      <polygon points="12.153992,10.729553 8.088684,5.041199 5.92041,5.041199 10.956299,12.087097 11.59021,12.97345    15.900635,19.009583 18.068909,19.009583 12.785217,11.615906  " />
      <path d="M21.15979,1H2.84021C1.823853,1,1,1.823853,1,2.84021v18.31958C1,22.176147,1.823853,23,2.84021,23h18.31958   C22.176147,23,23,22.176147,23,21.15979V2.84021C23,1.823853,22.176147,1,21.15979,1z M15.235352,20l-4.362549-6.213013   L5.411438,20H4l6.246887-7.104675L4,4h4.764648l4.130127,5.881958L18.06958,4h1.411377l-5.95697,6.775635L20,20H15.235352z" />
    </svg>
  ),
  telegram: ({ color, size }) => (
    <svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
    >
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
    </svg>
  ),
  'arrow-top-right-on-square': ({ color, size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth={strokeWidth}
      stroke={color}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
      />
    </svg>
  ),
  identification: ({ color, size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth={strokeWidth}
      stroke={color}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
      />
    </svg>
  ),
  youtube: ({ color, size }) => (
    <svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
    >
      <path d="M501.303,132.765c-5.887,-22.03 -23.235,-39.377 -45.265,-45.265c-39.932,-10.7 -200.038,-10.7 -200.038,-10.7c0,0 -160.107,0 -200.039,10.7c-22.026,5.888 -39.377,23.235 -45.264,45.265c-10.697,39.928 -10.697,123.238 -10.697,123.238c0,0 0,83.308 10.697,123.232c5.887,22.03 23.238,39.382 45.264,45.269c39.932,10.696 200.039,10.696 200.039,10.696c0,0 160.106,0 200.038,-10.696c22.03,-5.887 39.378,-23.239 45.265,-45.269c10.696,-39.924 10.696,-123.232 10.696,-123.232c0,0 0,-83.31 -10.696,-123.238Zm-296.506,200.039l0,-153.603l133.019,76.802l-133.019,76.801Z" />
    </svg>
  ),
  instagram: ({ color, size }) => (
    <svg
      viewBox="0 0 56.7 56.7"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill={color}
    >
      <g>
        <path d="M28.2,16.7c-7,0-12.8,5.7-12.8,12.8s5.7,12.8,12.8,12.8S41,36.5,41,29.5S35.2,16.7,28.2,16.7z M28.2,37.7 c-4.5,0-8.2-3.7-8.2-8.2s3.7-8.2,8.2-8.2s8.2,3.7,8.2,8.2S32.7,37.7,28.2,37.7z" />
        <circle cx="41.5" cy="16.4" r="2.9" />
        <path d="M49,8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7,0-14.5,5.8-14.5,14.5v20.5c0,4.3,1.4,8,4.2,10.7c2.7,2.6,6.3,3.9,10.4,3.9 h20.4c4.3,0,7.9-1.4,10.5-3.9c2.7-2.6,4.1-6.3,4.1-10.6V19.3C53,15.1,51.6,11.5,49,8.9z M48.6,39.9c0,3.1-1.1,5.6-2.9,7.3 s-4.3,2.6-7.3,2.6H18c-3,0-5.5-0.9-7.3-2.6C8.9,45.4,8,42.9,8,39.8V19.3c0-3,0.9-5.5,2.7-7.3c1.7-1.7,4.3-2.6,7.3-2.6h20.6 c3,0,5.5,0.9,7.3,2.7c1.7,1.8,2.7,4.3,2.7,7.2V39.9L48.6,39.9z" />
      </g>
    </svg>
  ),
  'thumb-down': ({ color, size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth={strokeWidth}
      stroke={color}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54"
      />
    </svg>
  ),
  'thumb-up': ({ color, size, strokeWidth }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth={strokeWidth}
      stroke={color}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
      />
    </svg>
  ),
};

export const Icon = ({
  name,
  color = 'dark',
  size = 20,
  strokeWidth = 1,
}: IIcon) => {
  const IconComponent = iconList[name];

  const colors: Record<string, string> = {
    dark: 'var(--color-gray-900)',
    primary: 'var(--color-primary-700)',
    danger: 'var(--color-danger-700)',
    warning: 'var(--color-warning-700)',
    light: 'var(--color-light)',
  };

  return (
    <IconComponent
      color={colors[color]}
      size={size}
      strokeWidth={strokeWidth}
    />
  );
};
