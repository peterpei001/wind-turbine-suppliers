import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useT } from '../LanguageContext';
import type { Supplier } from '../types';

ChartJS.register(ArcElement, Tooltip, Legend);

const CHART_COLORS = [
  '#3B82F6', '#22C55E', '#8B5CF6', '#F59E0B', '#EC4899',
  '#06B6D4', '#F97316', '#14B8A6', '#A855F7', '#EAB308',
  '#6366F1', '#84CC16', '#D946EF', '#0EA5E9', '#10B981',
];

function parseShare(s: string): number {
  const m = s.match(/[\d.]+/);
  return m ? parseFloat(m[0]) : 0;
}

interface Props {
  suppliers: Supplier[];
  className?: string;
}

export default function MarketShareChart({ suppliers, className }: Props) {
  const { t } = useT();

  const withShare = suppliers.filter((s) => {
    const v = typeof s.marketShare === 'string' ? s.marketShare : s.marketShare.zh;
    return v !== '—' && parseShare(v) > 0;
  });

  if (withShare.length < 2) return null;

  const data = {
    labels: withShare.map((s) => t(s.name)),
    datasets: [
      {
        data: withShare.map((s) => {
          const v = typeof s.marketShare === 'string' ? s.marketShare : s.marketShare.zh;
          return parseShare(v);
        }),
        backgroundColor: withShare.map((_, i) => CHART_COLORS[i % CHART_COLORS.length]),
        borderColor: '#0F172A',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    cutout: '55%',
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          color: '#94A3B8',
          font: { size: 11 },
          padding: 12,
          usePointStyle: true,
          pointStyle: 'circle' as const,
        },
      },
      tooltip: {
        backgroundColor: '#1E293B',
        titleColor: '#F1F5F9',
        bodyColor: '#94A3B8',
        borderColor: '#334155',
        borderWidth: 1,
        padding: 10,
        callbacks: {
          label: (ctx: any) => `${ctx.label}: ${ctx.parsed}%`,
        },
      },
    },
  };

  return (
    <div className={`chart-container ${className || ''}`}>
      <Doughnut data={data} options={options} />
    </div>
  );
}
