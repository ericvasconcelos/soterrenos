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
  sewage: ({ color, size }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-25 -25 562 562"
      strokeWidth={5}
      stroke={color}
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
      strokeWidth={strokeWidth}
      stroke={color}
      fill={color}
    >
      <path d="M274.87,98.67H146.71a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H274.87a8,8,0,0,0,8-8V106.67A8,8,0,0,0,274.87,98.67Zm-8,85.32H154.71V114.67H266.87Zm-56.08,56.64a8,8,0,0,0-5.66,2.35c-3.69,3.7-36,36.9-36,63,0,27.95,18.71,50.68,41.71,50.68S252.51,334,252.51,306c0-26.12-32.36-59.32-36-63A8,8,0,0,0,210.79,240.63Zm0,100.05c-14.17,0-25.71-15.56-25.71-34.68,0-13.67,15.41-34,25.7-45.63,10.12,11.48,25.73,32.07,25.73,45.63C236.51,325.12,225,340.68,210.79,340.68ZM436.05,225.13l-47.72-79.9a8,8,0,0,0-13.74,8.2l29.53,49.45a36,36,0,0,0,17,67.79h.13V325.4a29.28,29.28,0,0,1-58.55,0V229.27a45.42,45.42,0,0,0-37.28-44.56V84a28,28,0,0,0-28-28H124.22a28,28,0,0,0-28,28v313.3H92.79a18,18,0,0,0-18,18V438a18,18,0,0,0,18,18h236a18,18,0,0,0,18-18V415.32a18,18,0,0,0-18-18h-3.42V201.11a29.46,29.46,0,0,1,21.28,28.16V325.4a45.28,45.28,0,0,0,90.55,0V229.27A8,8,0,0,0,436.05,225.13ZM330.8,415.32V438a2,2,0,0,1-2,2h-236a2,2,0,0,1-2-2V415.32a2,2,0,0,1,2-2h236A2,2,0,0,1,330.8,415.32Zm-218.58-18V84a12,12,0,0,1,12-12H297.38a12,12,0,0,1,12,12v313.3Zm309-142.65a20,20,0,0,1-8.87-38l8.87,14.84Z" />
    </svg>
  ),
  'gas-cylinder': ({ color, size }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-40 -40 592 592"
      fill={color}
    >
      <g>
        <path d="M216,61h10v30c0,5.522,4.477,10,10,10s10-4.478,10-10V61h20v30c0,5.522,4.478,10,10,10 s10-4.478,10-10V61h10c5.522,0,10-4.478,10-10s-4.478-10-10-10c-23.456,0-55.045,0-80,0c-5.523,0-10,4.478-10,10 S210.477,61,216,61z" />
        <path d="M320.546,296.454c0-32.803-51.049-94.892-56.87-101.863c-3.991-4.782-11.354-4.788-15.352,0 c-5.821,6.972-56.87,69.061-56.87,101.863C191.454,332.243,220.652,361,256,361C291.363,361,320.546,332.226,320.546,296.454z  M241.454,326.454c0-4.419,6.719-15.879,14.546-26.655c7.827,10.776,14.546,22.237,14.546,26.655 c0,8.021-6.525,14.546-14.546,14.546C247.98,341,241.454,334.475,241.454,326.454z M290.456,324.652 c-1.412-16.023-20.708-40.29-26.78-47.562c-3.991-4.781-11.354-4.788-15.352,0c-6.072,7.272-25.368,31.539-26.78,47.562 c-6.301-7.686-10.09-17.507-10.09-28.198c0-16.976,24.83-54.329,44.548-79.532c19.716,25.192,44.544,62.537,44.544,79.532 C300.546,307.145,296.757,316.966,290.456,324.652z" />
        <path d="M366,81h-20V21h15c5.522,0,10-4.478,10-10s-4.478-10-10-10c-16.961,0-203.385,0-210,0 c-5.523,0-10,4.477-10,10s4.477,10,10,10h15v60h-20c-22.056,0-40,17.944-40,40v310c0,22.056,17.944,40,40,40h2.193l1.253,5.009 C154.595,496.611,173.022,511,194.259,511H317.74c21.237,0,39.665-14.389,44.814-34.99l1.253-5.01H366c22.056,0,40-17.944,40-40 V121C406,98.944,388.056,81,366,81z M126,151h260v250H126V151z M186,21h140v60H186V21z M146,101c8.969,0,208.928,0,220,0 c11.028,0,20,8.972,20,20v10H126v-10C126,109.972,134.972,101,146,101z M343.152,471.159C340.232,482.841,329.782,491,317.74,491 H194.259c-12.042,0-22.491-8.159-25.411-19.842L168.809,471h174.383L343.152,471.159z M366,451c-15.492,0-210.281,0-220,0 c-11.028,0-20-8.972-20-20v-10h260v10C386,442.028,377.028,451,366,451z" />
      </g>
    </svg>
  ),
  wall: ({ color, size }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="8 8 240 240"
      fill="none"
      stroke="currentColor"
    >
      <rect fill="none" height="256" width="256" />
      <line
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
        x1="128"
        x2="128"
        y1="104"
        y2="56"
      />
      <line
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
        x1="80"
        x2="80"
        y1="152"
        y2="104"
      />
      <line
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
        x1="176"
        x2="176"
        y1="152"
        y2="104"
      />
      <line
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
        x1="128"
        x2="128"
        y1="200"
        y2="152"
      />
      <line
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
        x1="32"
        x2="224"
        y1="104"
        y2="104"
      />
      <line
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
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
        strokeWidth="8"
        width="192"
        x="32"
        y="56"
      />
    </svg>
  ),
  tractor: ({ color, size }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="-4 0 58 50"
    >
      <rect fill="none" height="50" width="50" />
      <g>
        <path
          d="M39,38c2.204,0,3.999,1.795,3.999,4S41.204,46,39,46c-2.205,0-4.001-1.795-4.001-4S36.795,38,39,38 M34.707,36.473   C33.061,37.754,32,39.754,32,42c0,3.863,3.137,7,7,7s7-3.137,7-7c0-2.344-1.154-4.419-2.924-5.689"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
      </g>
      <g>
        <path
          d="M12,33.5c2.482,0,4.5,2.019,4.5,4.5c0,2.48-2.018,4.5-4.5,4.5S7.5,40.48,7.5,38C7.5,35.519,9.518,33.5,12,33.5 M12,27   C5.928,27,1,31.927,1,38c0,6.072,4.928,11,11,11s11-4.928,11-11C23,31.927,18.072,27,12,27L12,27z"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
      </g>
      <path
        d="M23,38c0,6.072-4.928,11-11,11S1,44.072,1,38c0-6.073,4.928-11,11-11S23,31.927,23,38z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        d="M2.531,26.098c2.638-2.219,6.044-3.558,9.757-3.558c8.376,0,15.171,6.797,15.171,15.172"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2.1039"
      />
      <path
        d="M27.781,36h15.192c1.087,0,2.653-1.123,3.052-2.219l2.895-7.938C49.321,24.746,48.136,24,47.049,24H28.027L23.669,7.985  C23.443,6.921,22.79,6,21.703,6H5.966C4.881,6,4,6.888,4,7.985v16.669 M22.919,19H8.005v-9h12.46L22.919,19z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2.0011"
      />
      <path
        d="M35,24c0,0,0-5.231,0-7.174C35,11.833,38.671,11,41,11v2c0,0-2-0.149-2,4c0,1.942,0,7,0,7"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2.1039"
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
  dish: ({ color, size }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth={6}
      stroke={color}
      fill={color}
      viewBox="-36 -36 584 584"
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
      viewBox="-7 -7 64 64"
    >
      <path
        d="M45,44v3c0,1.104-0.896,2-2,2h-4  c-1.104,0-2-0.896-2-2v-2"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        d="M13,45v2c0,1.104-0.896,2-2,2H7  c-1.103,0-2-0.896-2-2v-3"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <rect height="50" width="50" />
      <path
        d="M46,9c0-5.161-1-8-6-8H12C6,1,4,2.714,4,8  c0,4,0,17.919,0,21.846C4,35.617,4,41,4,41c0,3.312,2.688,4,6,4h30c3.312,0,6-0.688,6-4c0,0,0-4.426,0-11.154C46,25.85,46,13,46,9z"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <circle
        cx="38.5"
        cy="37.5"
        r="3.5"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <circle
        cx="11.5"
        cy="37.5"
        r="3.5"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        d="M46,13h2c0.553,0,1,0.448,1,1v8c0,0.552-0.447,1-1,1  h-2"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        d="M4,13H2c-0.552,0-1,0.448-1,1v8c0,0.552,0.448,1,1,1  h2"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        d="M37,7c0,0.552-0.447,1-1,1H15c-0.552,0-1-0.448-1-1  V5c0-0.552,0.448-1,1-1h21c0.553,0,1,0.448,1,1V7z"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        d="M39,28.922L11,29c-2,0-3-1-3-3c0-3,0-8.859,0-12  c0-2,1-3,3-3c9,0,15.713,0,28,0c2,0,3,1,3,3s0,10.977,0,12C42,28,40.047,28.922,39,28.922z"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth="2"
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
  pharmacy: ({ color, size }) => (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-38 -38 556 556"
      fill={color}
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
};

export const Icon = ({
  name,
  color = 'black',
  size = 20,
  strokeWidth = 1,
}: IIcon) => {
  const IconComponent = iconList[name];

  const colors: Record<string, string> = {
    black: 'var(--color-gray-900)',
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
