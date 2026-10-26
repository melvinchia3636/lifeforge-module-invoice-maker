import { useQuery } from '@tanstack/react-query'

import { type InferOutput } from '@lifeforge/api'
import {
  EmptyStateScreen,
  Scrollbar,
  Stack,
  WithQuery
} from '@lifeforge/ui'

import DocCard from '@/components/DocCard'
import DocWrapper from '@/components/DocWrapper'
import { RECEIPT_STATUS_CONFIG } from '@/constants/statusConfig'
import useFilter from '@/hooks/useFilter'
import { forgeAPI } from '@/manifest'

export type ReceiptEntry = InferOutput<typeof forgeAPI.receipts.list>[number]

export default function ReceiptsPage() {
  const { statusFilter, clientFilter, searchQuery } = useFilter()

  const receiptsQuery = useQuery(
    forgeAPI.receipts.list
      .input({
        status: (statusFilter ||
          undefined) as keyof typeof RECEIPT_STATUS_CONFIG,
        clientId: clientFilter || undefined,
        search: searchQuery || undefined
      })
      .queryOptions()
  )

  const settingsQuery = useQuery(forgeAPI.settings.get.queryOptions())

  const currencySymbol = settingsQuery.data?.currency_symbol || 'RM'

  return (
    <DocWrapper itemCount={receiptsQuery.data?.length ?? 0} type="receipt">
      <WithQuery query={receiptsQuery}>
        {data => {
          if (data.length === 0) {
            return (
              <EmptyStateScreen
                icon="tabler:file-off"
                message={{
                  id: 'receipt'
                }}
              />
            )
          }

          return (
            <Scrollbar pb={{ base: 'lg', md: 'none' }}>
              <Stack>
                {data.map(receipt => (
                  <DocCard
                    key={receipt.id}
                    currencySymbol={currencySymbol}
                    data={receipt}
                    statusConfig={RECEIPT_STATUS_CONFIG}
                    type="receipt"
                  />
                ))}
              </Stack>
            </Scrollbar>
          )
        }}
      </WithQuery>
    </DocWrapper>
  )
}
