interface SystemIconProps {
  systemId: string;
  size?: number;
}

export function SystemIcon({ systemId, size = 24 }: SystemIconProps) {
  const s = size;
  const props = { width: s, height: s, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };

  switch (systemId) {
    case 'sys-blade':
      return (<svg {...props}><path d="M12 3c0 0-2 2-2 5s0.5 4 2 5c1.5-1 2-2 2-5S12 3 12 3z"/><path d="M12 13v8"/><path d="M10 18h4"/><path d="M8 5c-2 1-4 3-4 6s1 5 4 6"/><path d="M16 5c2 1 4 3 4 6s-1 5-4 6"/></svg>);
    case 'sys-pitch':
      return (<svg {...props}><circle cx="12" cy="12" r="3"/><path d="M12 2v4"/><path d="M12 18v4"/><path d="M4.93 4.93l2.83 2.83"/><path d="M16.24 16.24l2.83 2.83"/><path d="M2 12h4"/><path d="M18 12h4"/><path d="M4.93 19.07l2.83-2.83"/><path d="M16.24 7.76l2.83-2.83"/></svg>);
    case 'sys-hub':
      return (<svg {...props}><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="9"/><circle cx="12" cy="3" r="1.5"/><circle cx="12" cy="21" r="1.5"/><circle cx="3" cy="12" r="1.5"/><circle cx="21" cy="12" r="1.5"/></svg>);
    case 'sys-drivetrain':
      return (<svg {...props}><circle cx="9" cy="12" r="4"/><circle cx="17" cy="12" r="2.5"/><path d="M13 12h1.5"/><path d="M5 8c0 0-0.5 2-0.5 4s0.5 4 0.5 4"/></svg>);
    case 'sys-generator':
      return (<svg {...props}><rect x="7" y="4" width="10" height="16" rx="2"/><path d="M10 4V2"/><path d="M14 4V2"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M4 12h3"/><path d="M17 12h3"/></svg>);
    case 'sys-yaw':
      return (<svg {...props}><path d="M21 12c0 5-4 9-9 9s-9-4-9-9 4-9 9-9c3 0 5.7 1.5 7.5 4"/><path d="M21 3v4h-4"/><path d="M15 12l-4 3v-6z"/></svg>);
    case 'sys-brake':
      return (<svg {...props}><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><path d="M12 7v1"/><path d="M12 16v1"/><path d="M7 12h1"/><path d="M16 12h1"/><path d="M9.17 9.17l0.7 0.7"/><path d="M14.13 14.13l0.7 0.7"/><path d="M9.17 14.83l0.7-0.7"/><path d="M14.13 9.87l0.7-0.7"/></svg>);
    case 'sys-converter':
      return (<svg {...props}><rect x="3" y="7" width="7" height="10" rx="1.5"/><rect x="14" y="7" width="7" height="10" rx="1.5"/><path d="M10 12h4"/><path d="M10 9h1"/><path d="M10 15h1"/><path d="M13 9h1"/><path d="M13 15h1"/></svg>);
    case 'sys-electrical':
      return (<svg {...props}><path d="M13 2L7 13h5l-1 9 7-12h-5l1-8z"/></svg>);
    case 'sys-control':
      return (<svg {...props}><rect x="5" y="5" width="14" height="14" rx="2"/><circle cx="9" cy="9" r="1.5"/><circle cx="15" cy="9" r="1.5"/><circle cx="9" cy="15" r="1.5"/><circle cx="15" cy="15" r="1.5"/></svg>);
    case 'sys-cms':
      return (<svg {...props}><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 16V11"/><path d="M12 16V8"/><path d="M16 16V13"/></svg>);
    case 'sys-hydraulic':
      return (<svg {...props}><path d="M12 21c-3 0-5-2-5-5 0-3 2-6 5-10 3 4 5 7 5 10 0 3-2 5-5 5z"/><line x1="10" y1="14" x2="14" y2="14"/></svg>);
    case 'sys-cooling':
      return (<svg {...props}><path d="M12 2v8"/><path d="M12 14v8"/><path d="M4.93 4.93l5.66 5.66"/><path d="M13.41 13.41l5.66 5.66"/><path d="M2 12h8"/><path d="M14 12h8"/><path d="M4.93 19.07l5.66-5.66"/><path d="M13.41 10.59l5.66-5.66"/></svg>);
    case 'sys-structure':
      return (<svg {...props}><path d="M4 20V8l8-4 8 4v12"/><path d="M4 12h16"/><path d="M8 20v-8"/><path d="M16 20v-8"/><path d="M12 16v4"/></svg>);
    case 'sys-foundation':
      return (<svg {...props}><path d="M4 16l8-10 8 10"/><path d="M6 14v6"/><path d="M18 14v6"/><path d="M4 20h16"/><path d="M10 20v-4h4v4"/></svg>);
    default:
      return (<svg {...props}><circle cx="12" cy="12" r="8"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>);
  }
}
