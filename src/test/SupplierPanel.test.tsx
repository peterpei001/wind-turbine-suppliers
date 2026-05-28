import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { LanguageProvider } from '../LanguageContext';
import SupplierPanel from '../components/SupplierPanel';

const mockSupplier = {
  id: 's1',
  name: { zh: '测试供应商', en: 'Test Supplier' },
  rank: 1,
  marketShare: { zh: '~30%', en: '~30%' },
  annualShipment: { zh: '1000+ 台', en: '1000+ units' },
  keyParams: { zh: '关键参数', en: 'Key params' },
  customers: [{ zh: '客户A', en: 'Client A' }],
  headquarters: { zh: '北京', en: 'Beijing' },
  description: { zh: '描述', en: 'Description' },
  tier: { zh: '国产高端', en: 'China High-end' },
  techHighlights: [{ zh: '技术1', en: 'Tech 1' }],
};

const mockNode = {
  id: 'comp-01',
  name: { zh: '测试部件', en: 'Test Component' },
  type: 'component' as const,
  suppliers: [mockSupplier],
  cr3: '~60%',
};

function Wrapper({ children }: { children: React.ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}

describe('SupplierPanel', () => {
  it('shows empty state when node is null', () => {
    render(<SupplierPanel node={null} onSelectSupplier={() => {}} />, { wrapper: Wrapper });
    expect(screen.getByText('风电供应商图谱')).toBeInTheDocument();
  });

  it('renders supplier cards when node has suppliers', () => {
    render(<SupplierPanel node={mockNode} onSelectSupplier={() => {}} />, { wrapper: Wrapper });
    expect(screen.getByText('测试供应商')).toBeInTheDocument();
    expect(screen.getByText('~30%')).toBeInTheDocument();
  });

  it('shows no data message for non-component nodes', () => {
    const sysNode = { id: 'sys', name: 'System', type: 'system' as const };
    render(<SupplierPanel node={sysNode} onSelectSupplier={() => {}} />, { wrapper: Wrapper });
    expect(screen.getByText(/暂无供应商数据/)).toBeInTheDocument();
  });

  it('renders CR3 when available', () => {
    render(<SupplierPanel node={mockNode} onSelectSupplier={() => {}} />, { wrapper: Wrapper });
    expect(screen.getByText(/CR3: ~60%/)).toBeInTheDocument();
  });

  it('renders tier badge', () => {
    render(<SupplierPanel node={mockNode} onSelectSupplier={() => {}} />, { wrapper: Wrapper });
    expect(screen.getByText('国产高端')).toBeInTheDocument();
  });
});
