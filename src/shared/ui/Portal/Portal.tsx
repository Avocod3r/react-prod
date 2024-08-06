import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode;
    element?: HTMLElement
}

const PORTAL_ROOT = document.getElementById('portal-root');

const Portal = ({
  children,
  element = PORTAL_ROOT,
} : PortalProps) => createPortal(children, element);

export default Portal;
