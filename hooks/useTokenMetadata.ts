import React, { useEffect, useState } from 'react'
import { TokenListProvider, TokenInfo } from '@solana/spl-token-registry'

export const useTokenMetadata = (mint: string) => {
  const [tokenMap, setTokenMap] = useState<Map<string, TokenInfo>>(new Map())

  useEffect(() => {
    new TokenListProvider().resolve().then((tokens) => {
      const tokenList = tokens.filterByChainId(101).getList()

      setTokenMap(
        tokenList.reduce((map, item) => {
          map.set(item.address, item)
          return map
        }, new Map())
      )
    })
  }, [setTokenMap])

  const token = tokenMap.get(mint)
  if (!token) return null

  return token
}
