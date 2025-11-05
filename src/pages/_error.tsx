import type { NextPageContext } from 'next'

interface ErrorProps {
  statusCode?: number
}

function Error({ statusCode }: ErrorProps) {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>
        {statusCode
          ? `Ошибка ${statusCode} на сервере`
          : 'Произошла ошибка на клиенте'}
      </h1>
    </div>
  )
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
