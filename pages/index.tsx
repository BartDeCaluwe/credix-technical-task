import type { NextPage } from 'next'
import {
  WalletDisconnectButton,
  WalletMultiButton,
} from '@solana/wallet-adapter-react-ui'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { useEffect, useState } from 'react'
import { TOKEN_PROGRAM_ID } from '@solana/spl-token'
import { TableSwitch } from '../components/TableSwitch'
import { TableMenu, TableMenuItem } from '../components/TableMenu'
import { TableRow } from '../components/TableRow'
import { TableCell } from '../components/TableCell'
import { useTokenMetadata } from '../hooks/useTokenMetadata'

interface TokenAccountInfo {
  mint: string
  tokenAmount: {
    uiAmountString: string
  }
}

const AccountInfoRow = ({ accountInfo }: { accountInfo: TokenAccountInfo }) => {
  let metaData = useTokenMetadata(accountInfo.mint)

  return (
    <TableRow>
      <TableCell>{accountInfo.mint}</TableCell>
      <TableCell align="right">
        {accountInfo.tokenAmount.uiAmountString}
      </TableCell>
      <TableCell>{metaData?.symbol}</TableCell>
    </TableRow>
  )
}

const Home: NextPage = () => {
  const { connection } = useConnection()
  const [tokenAccountsInfo, setTokenAccountsInfo] =
    useState<TokenAccountInfo[]>()
  const { publicKey, wallet } = useWallet()
  const [isActive, setIsActive] = useState(true)

  let tableMenuItems: TableMenuItem[] = [
    {
      label: 'Mint',
      icon: 'bar',
    },
    {
      label: 'Amount',
      icon: 'link',
      align: 'end',
    },
    {
      label: 'Name',
    },
  ]

  useEffect(() => {
    if (publicKey) {
      connection
        .getParsedTokenAccountsByOwner(publicKey, {
          programId: TOKEN_PROGRAM_ID,
        })
        .then((res) => {
          const parsedTokenAccountsInfo = res.value.map(
            (tokenAccount) => tokenAccount.account.data.parsed.info
          )
          setTokenAccountsInfo(parsedTokenAccountsInfo)
        })
    }
  }, [publicKey, connection])

  const handleTableSwitch = () => {
    setIsActive(!isActive)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.walletButtons}>
          <WalletMultiButton className="bg-white text-gray-900 hover:text-white" />
          <WalletDisconnectButton className="bg-white text-gray-900 hover:text-white" />
        </div>
        <div className={wallet?.adapter.connected ? 'block' : 'hidden'}>
          <TableSwitch
            isActive={isActive}
            label="Investments"
            onClick={handleTableSwitch}
          />
          <table>
            <TableMenu items={tableMenuItems} />
            <tbody>
              {tokenAccountsInfo?.map((accountInfo) => {
                return (
                  <AccountInfoRow
                    key={accountInfo.mint}
                    accountInfo={accountInfo}
                  />
                )
              })}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  )
}

export default Home
