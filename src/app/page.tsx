import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { AuthButtonServer } from './components/auth-button-server'
import { BookCard } from './components/book-card'

export default async function Home () {
  const supabase = createServerComponentClient({ cookies })
  const { data: books } = await supabase.from('books').select('*, reviews(created_at, rate, commentary, user:users(username, picture))')

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AuthButtonServer />
      <pre>
        {
          books?.map((book, index) => (
            <BookCard key={index} data={book} />
          ))
        }
      </pre>
    </main>
  )
}
