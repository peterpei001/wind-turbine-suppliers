import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { LanguageProvider } from '../LanguageContext';
import { UI } from '../i18n';
import SupplierDetail from '../components/SupplierDetail';

const supplier = {
  id: 's1',
  name: { zh: '测试供应商', en: 'Test Supplier' },
  rank: 1,
  marketShare: { zh: '~30%', en: '~30%' },
  annualShipment: { zh: '1000+ 台', en: '1000+ units' },
  keyParams: { zh: '关键参数', en: 'Key params' },
  customers: [{ zh: '客户A', en: 'Client A' }, { zh: '客户B', en: 'Client B' }],
  headquarters: { zh: '北京', en: 'Beijing' },
  description: { zh: '公司描述信息', en: 'Company description' },
  tier: { zh: '国产高端', en: 'China High-end' },
  techHighlights: [{ zh: '技术亮点A', en: 'Tech A' }],
  mainProducts: [{ zh: '产品X', en: 'Product X' }],
  contact: {
    website: 'example.com',
    person: { zh: '张三', en: 'Zhang San' },
    phone: '010-1234',
    email: 'test@example.com',
  },
  established: { zh: '2000年', en: '2000' },
  employees: '3000+',
};

function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <MemoryRouter>
      <LanguageProvider>{children}</LanguageProvider>
    </MemoryRouter>
  );
}

describe('SupplierDetail', () => {
  it('renders company name and rank', () => {
    render(<SupplierDetail supplier={supplier} componentName="Test Component" onBack={() => {}} />, { wrapper: Wrapper });
    expect(screen.getByText('测试供应商')).toBeInTheDocument();
  });

  it('renders medal for rank 1', () => {
    render(<SupplierDetail supplier={supplier} componentName="Test" onBack={() => {}} />, { wrapper: Wrapper });
    expect(screen.getByText('🥇')).toBeInTheDocument();
  });

  it('renders market share label', () => {
    render(<SupplierDetail supplier={supplier} componentName="Test" onBack={() => {}} />, { wrapper: Wrapper });
    expect(screen.getByText('~30%')).toBeInTheDocument();
  });

  it('renders tier badge', () => {
    render(<SupplierDetail supplier={supplier} componentName="Test" onBack={() => {}} />, { wrapper: Wrapper });
    expect(screen.getByText('国产高端')).toBeInTheDocument();
  });

  it('renders contact info section', () => {
    render(<SupplierDetail supplier={supplier} componentName="Test" onBack={() => {}} />, { wrapper: Wrapper });
    expect(screen.getByText('example.com')).toBeInTheDocument();
    expect(screen.getByText('010-1234')).toBeInTheDocument();
    expect(screen.getByText('test@example.com')).toBeInTheDocument();
  });

  it('renders customer chips', () => {
    render(<SupplierDetail supplier={supplier} componentName="Test" onBack={() => {}} />, { wrapper: Wrapper });
    expect(screen.getByText('客户A')).toBeInTheDocument();
    expect(screen.getByText('客户B')).toBeInTheDocument();
  });

  it('renders tech highlights', () => {
    render(<SupplierDetail supplier={supplier} componentName="Test" onBack={() => {}} />, { wrapper: Wrapper });
    expect(screen.getByText('技术亮点A')).toBeInTheDocument();
  });

  it('renders main products', () => {
    render(<SupplierDetail supplier={supplier} componentName="Test" onBack={() => {}} />, { wrapper: Wrapper });
    expect(screen.getByText('产品X')).toBeInTheDocument();
  });

  it('renders back button', () => {
    render(<SupplierDetail supplier={supplier} componentName="Test" onBack={() => {}} />, { wrapper: Wrapper });
    expect(screen.getByText(UI.back.zh)).toBeInTheDocument();
  });
});
