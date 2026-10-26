import { lazy } from 'react'

import { createForgeModule } from '@lifeforge/federation'

import type { Contract } from './contract'

const { forgeAPI, ...manifest } = createForgeModule<Contract>({
  subsection: [
    { label: 'Invoices', icon: 'tabler:file-invoice', path: 'invoice' },
    { label: 'Receipts', icon: 'tabler:receipt', path: 'receipt' },
    { label: 'Clients', icon: 'tabler:users', path: 'client' }
  ],
  routes: {
    '/': lazy(() => import('@/pages')),
    '/invoice': lazy(() => import('@/pages/Invoices')),
    '/invoice/view/:id': lazy(() => import('@/pages/ViewInvoice')),
    '/invoice/modify': lazy(() => import('@/pages/ModifyInvoice')),
    '/invoice/modify/:id': lazy(() => import('@/pages/ModifyInvoice')),
    '/receipt': lazy(() => import('@/pages/Receipts')),
    '/receipt/view/:id': lazy(() => import('@/pages/ViewReceipt')),
    '/receipt/modify': lazy(() => import('@/pages/ModifyReceipt')),
    '/receipt/modify/:id': lazy(() => import('@/pages/ModifyReceipt')),
    '/client': lazy(() => import('@/pages/Clients'))
  }
})

export default manifest

export { forgeAPI }
