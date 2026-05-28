import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import SupplierPanel from '../components/SupplierPanel';
import { treeData } from '../data';
import type { TreeNode } from '../types';

export default function BrowsePage() {
  const { systemId } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const componentId = searchParams.get('component');

  let currentNode: TreeNode | null = null;
  if (componentId) {
    currentNode = findNode(treeData, componentId);
  } else if (systemId) {
    const sys = treeData.children?.find(s => s.id === systemId);
    if (sys && sys.children?.length) {
      currentNode = sys.children[0];
    }
  }

  return (
    <SupplierPanel
      node={currentNode}
      onSelectSupplier={(s) => navigate(`/detail/${s.id}`)}
    />
  );
}

function findNode(node: TreeNode, id: string): TreeNode | null {
  if (node.id === id) return node;
  for (const child of node.children || []) {
    const found = findNode(child, id);
    if (found) return found;
  }
  return null;
}
