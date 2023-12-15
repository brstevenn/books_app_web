import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-dynamic'

export async function GET ( request: NextRequest) {

  const supabase = createServerComponentClient({ cookies });
  const { data: books } = await supabase.from('books').select('*, reviews(created_at, rate, commentary, user:users(username, picture))');

  return NextResponse.json(books)
}